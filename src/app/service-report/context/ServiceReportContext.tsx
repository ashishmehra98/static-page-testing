"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import type { Database } from "@/utils/supabase/database.types";

type ServiceReportData = Database["public"]["Tables"]["service_reports"]["Row"];
type PesticideApplicationData = Database["public"]["Tables"]["pesticide_applications"]["Row"];

interface ServiceReportContextType {
	data: ServiceReportData | null;
	pesticideApplicationData: PesticideApplicationData[] | null;
	loading: boolean;
	error: string | null;
	isFormCompleted: boolean;
	refresh: () => Promise<void>;
	updateData: (updates: Partial<ServiceReportData>) => void;
	updatePesticideApplicationData: (data: PesticideApplicationData[]) => void;
}

const ServiceReportContext = createContext<ServiceReportContextType | undefined>(undefined);

interface ServiceReportProviderProps {
	children: ReactNode;
	reportId: string;
}

export const ServiceReportProvider: React.FC<ServiceReportProviderProps> = ({ children, reportId }) => {
	const [data, setData] = useState<ServiceReportData | null>(null);
	const [pesticideApplicationData, setPesticideApplicationData] = useState<PesticideApplicationData[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

	const fetchServiceReport = useCallback(
		async (disableLoading = false) => {
			if (!disableLoading) setLoading(true);
			setError(null);

			try {
				// Fetch both service report and pesticide applications in parallel
				const [serviceReportResponse, pesticideApplicationResponse] = await Promise.all([
					fetch(`/api/service-report/${reportId}`),
					fetch(`/api/service-report/${reportId}/pesticide-application`),
				]);

				const [serviceReportResult, pesticideApplicationResult] = await Promise.all([
					serviceReportResponse.json(),
					pesticideApplicationResponse.json(),
				]);

				// Handle service report response
				if (!serviceReportResponse.ok) {
					// Explicitly handle 404 - ensure data is null
					if (serviceReportResponse.status === 404) {
						setData(null);
						setPesticideApplicationData(null);
						setError(serviceReportResult.error || "Service report not found");
						setIsFormCompleted(false);
						return;
					}
					throw new Error(serviceReportResult.error || "Failed to fetch service report");
				}

				if (serviceReportResult.success && serviceReportResult.data) {
					setData(serviceReportResult.data);
				} else {
					throw new Error("Invalid service report response format");
				}

				if (pesticideApplicationResult.success) {
					setPesticideApplicationData(pesticideApplicationResult.data || []);
				}

				// Calculate if all sections have their first required field available
				const serviceReport = serviceReportResult.success && serviceReportResult.data ? serviceReportResult.data : null;
				const pesticideApplications: PesticideApplicationData[] = pesticideApplicationResult.success
					? pesticideApplicationResult.data || []
					: [];

				const allSectionsComplete =
					!!serviceReport?.job_date &&
					!!(serviceReport?.pest_types && serviceReport.pest_types.length > 0) &&
					pesticideApplications.some((app: PesticideApplicationData) => app.areas_covered && app.areas_covered.length > 0) &&
					serviceReport?.site_active !== null &&
					serviceReport?.site_active !== undefined &&
					serviceReport?.people_present !== null &&
					serviceReport?.people_present !== undefined &&
					!!(serviceReport?.technician_name && serviceReport.technician_name.trim() !== "");

				setIsFormCompleted(allSectionsComplete);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
				setError(errorMessage);
				setData(null); // Ensure data is null on error
				setPesticideApplicationData(null);
				setIsFormCompleted(false);
				console.error("Error fetching service report:", err);
			} finally {
				if (!disableLoading) setLoading(false);
			}
		},
		[reportId],
	);

	// Fetch data on mount
	useEffect(() => {
		fetchServiceReport();
	}, [fetchServiceReport]);

	const refresh = async () => {
		await fetchServiceReport(true);
	};

	const updateData = (updates: Partial<ServiceReportData>) => {
		if (data) {
			const updatedData = { ...data, ...updates };
			setData(updatedData);

			// Recalculate if all sections have their first required field available
			// Note: pesticideApplicationDetails is checked separately via pesticideApplicationData
			const allSectionsComplete =
				!!updatedData.job_date &&
				!!(updatedData.pest_types && updatedData.pest_types.length > 0) &&
				(pesticideApplicationData?.some((app: PesticideApplicationData) => app.areas_covered && app.areas_covered.length > 0) ??
					false) &&
				updatedData.site_active !== null &&
				updatedData.site_active !== undefined &&
				updatedData.people_present !== null &&
				updatedData.people_present !== undefined &&
				!!(updatedData.technician_name && updatedData.technician_name.trim() !== "");

			setIsFormCompleted(allSectionsComplete);
		}
	};

	const updatePesticideApplicationData = (newData: PesticideApplicationData[]) => {
		setPesticideApplicationData(newData);

		// Recalculate if all sections have their first required field available
		if (data) {
			const allSectionsComplete =
				!!data.job_date &&
				!!(data.pest_types && data.pest_types.length > 0) &&
				newData.some((app: PesticideApplicationData) => app.areas_covered && app.areas_covered.length > 0) &&
				data.site_active !== null &&
				data.site_active !== undefined &&
				data.people_present !== null &&
				data.people_present !== undefined &&
				!!(data.technician_name && data.technician_name.trim() !== "");

			setIsFormCompleted(allSectionsComplete);
		}
	};

	return (
		<ServiceReportContext.Provider
			value={{
				data,
				pesticideApplicationData,
				loading,
				error,
				isFormCompleted,
				refresh,
				updateData,
				updatePesticideApplicationData,
			}}>
			{children}
		</ServiceReportContext.Provider>
	);
};

export const useServiceReport = (): ServiceReportContextType => {
	const context = useContext(ServiceReportContext);
	if (context === undefined) {
		throw new Error("useServiceReport must be used within a ServiceReportProvider");
	}
	return context;
};
