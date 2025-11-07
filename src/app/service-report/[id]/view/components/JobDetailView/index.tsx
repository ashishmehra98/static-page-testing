"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import styles from "./JobDetailView.module.css";
import { useServiceReport } from "@/app/service-report/context/ServiceReportContext";

const JobDetailView: React.FC = () => {
	const { data, loading } = useServiceReport();

	if (loading || !data) {
		return null;
	}

	// Format date
	const formatDate = (dateString: string | null): string => {
		if (!dateString) return "N/A";
		try {
			const date = new Date(dateString);
			return date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		} catch {
			return dateString;
		}
	};

	// Format time to AM/PM
	const formatTime = (timeString: string | null): string => {
		if (!timeString) return "N/A";
		try {
			const [hours, minutes] = timeString.split(":");
			const hour = parseInt(hours, 10);
			const ampm = hour >= 12 ? "PM" : "AM";
			const displayHour = hour % 12 || 12;
			return `${displayHour}:${minutes} ${ampm}`;
		} catch {
			return timeString;
		}
	};

	// Calculate duration
	const calculateDuration = (startTime: string | null, endTime: string | null): string => {
		if (!startTime || !endTime) return "N/A";
		try {
			const start = new Date(`2000-01-01T${startTime}`);
			const end = new Date(`2000-01-01T${endTime}`);
			const diffMs = end.getTime() - start.getTime();
			if (diffMs < 0) return "N/A";

			const hours = Math.floor(diffMs / (1000 * 60 * 60));
			const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

			if (hours === 0) {
				return `${minutes}m`;
			}
			return `${hours}h ${minutes}m`;
		} catch {
			return "N/A";
		}
	};

	return (
		<div className={styles.jobDetailView}>
			<SectionTitle heading="01. Job & Property Details" />
			<div className={styles.cardGroup}>
				<Card>
					<p className={styles.label}>Date</p>
					<p className={styles.value}>{formatDate(data.job_date)}</p>
				</Card>
				<Card>
					<p className={styles.label}>Start Time</p>
					<p className={styles.value}>{formatTime(data.start_time)}</p>
				</Card>
				<Card>
					<p className={styles.label}>End Time</p>
					<p className={styles.value}>{formatTime(data.end_time)}</p>
				</Card>
				<Card>
					<p className={styles.label}>Duration</p>
					<p className={styles.value}>{calculateDuration(data.start_time, data.end_time)}</p>
				</Card>
				<Card>
					<p className={styles.label}>Property Address</p>
					<p className={styles.value}>{data.property_address || "N/A"}</p>
				</Card>
			</div>
		</div>
	);
};

export default JobDetailView;
