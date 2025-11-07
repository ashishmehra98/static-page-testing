"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import type { Database } from "@/utils/supabase/database.types";

type ServiceReportData = Database["public"]["Tables"]["service_reports"]["Row"];

interface ServiceReportContextType {
	data: ServiceReportData | null;
	loading: boolean;
	error: string | null;
	refresh: () => Promise<void>;
	updateData: (updates: Partial<ServiceReportData>) => void;
}

const ServiceReportContext = createContext<ServiceReportContextType | undefined>(undefined);

interface ServiceReportProviderProps {
	children: ReactNode;
	reportId: string;
}

export const ServiceReportProvider: React.FC<ServiceReportProviderProps> = ({ children, reportId }) => {
	const [data, setData] = useState<ServiceReportData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchServiceReport = useCallback(
		async (disableLoading = false) => {
			if (!disableLoading) setLoading(true);
			setError(null);

			try {
				const response = await fetch(`/api/service-report/${reportId}`);
				const result = await response.json();

				if (!response.ok) {
					// Explicitly handle 404 - ensure data is null
					if (response.status === 404) {
						setData(null);
						setError(result.error || "Service report not found");
						return;
					}
					throw new Error(result.error || "Failed to fetch service report");
				}

				if (result.success && result.data) {
					setData(result.data);
				} else {
					throw new Error("Invalid response format");
				}
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
				setError(errorMessage);
				setData(null); // Ensure data is null on error
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
			setData({ ...data, ...updates });
		}
	};

	return (
		<ServiceReportContext.Provider value={{ data, loading, error, refresh, updateData }}>
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
