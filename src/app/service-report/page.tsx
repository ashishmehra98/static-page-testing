"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ServiceReportCreate = () => {
	const router = useRouter();

	useEffect(() => {
		const createServiceReport = async () => {
			try {
				const response = await fetch("/api/service-report", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					throw new Error("Failed to create service report");
				}

				const data = await response.json();

				if (data.success && data.id) {
					// Redirect to the service report form with the ID
					router.push(`/service-report/${data.id}`);
				} else {
					throw new Error("No ID returned from API");
				}
			} catch (error) {
				console.error("Error creating service report:", error);
				// You might want to show an error message to the user here
			}
		};

		createServiceReport();
	}, [router]);

	// Show loading state while creating the report
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
				<p className="text-gray-600 text-lg">Please hold on, this will just take a few seconds...</p>
			</div>
		</div>
	);
};

export default ServiceReportCreate;
