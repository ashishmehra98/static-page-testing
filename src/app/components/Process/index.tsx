"use client";

import React from "react";
import styles from "./Process.module.css";

const defaultProcessSteps = [
	{
		number: "01",
		title: "Inspection & assessment",
		description:
			"Our technician visits your home, inspects the interior and exterior, identifies pests, and assesses severity (including hidden areas).",
	},
	{
		number: "02",
		title: "Treatment proposal",
		description:
			"We present you with a custom plan (no one-size-fits-all), quoting cost, methods, safety measures, and guarantees.",
	},
	{
		number: "03",
		title: "Execution of treatment",
		description:
			"We apply safe treatments, baiting, sprays, dusts, or barrier methods, depending on pest type. We take care to minimise disruption.",
	},
	{
		number: "04",
		title: "Follow-up & prevention",
		description:
			"We return if pests reappear within the warranty. We also provide advice on how you can reduce risk going forward",
	},
	{
		number: "05",
		title: "Optional maintenance plan",
		description:
			"Many clients choose periodic inspections and treatments (quarterly, bi-annual, or annual) to keep pests at bay.",
	},
];

interface ProcessStep {
	number: string;
	title: string;
	description: string;
}

interface ProcessProps {
	steps?: ProcessStep[];
}

const Process: React.FC<ProcessProps> = ({ steps = defaultProcessSteps }) => {
	return (
		<div className={styles.container}>
			<div className={styles.separator} />
			<div className={styles.flowOne}>
				{steps.slice(0, 3).map((step, index) => (
					<div key={index} className={styles.step}>
						{index !== 2 && <div className={styles.separator} />}
						<div className={styles.stepNumber}>
							<p className={styles.numberText}>{step.number}</p>
						</div>
						<div className={styles.stepContent}>
							<p className={styles.stepTitle}>{step.title}</p>
							<p className={styles.stepDescription}>{step.description}</p>
						</div>
					</div>
				))}
			</div>

			<div className={styles.flowTwo}>
				{steps.slice(3).map((step, index) => (
					<div key={index + 3} className={styles.step}>
						{index === 0 && <div className={styles.separator} />}
						<div className={styles.stepNumber}>
							<p className={styles.numberText}>{step.number}</p>
						</div>
						<div className={styles.stepContent}>
							<p className={styles.stepTitle}>{step.title}</p>
							<p className={styles.stepDescription}>{step.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Process;
