import styles from "./EcoviaProcess.module.css";
import HeaderSection from "@/app/components/HeaderSection";
import Process from "@/app/components/Process";

interface ProcessStep {
	number: string;
	title: string;
	description: string;
}

interface EcoviaProcessProps {
	title?: string;
	subtitle?: string;
	steps?: ProcessStep[];
}

const EcoviaProcess = ({
	title = "Our Process: How Ecovia Works",
	subtitle = "We follow a transparent, step-by-step approach so you know exactly what to expect.",
	steps,
}: EcoviaProcessProps) => {
	return (
		<div className={styles.ecoviaProcessSection}>
			<HeaderSection title={title} subtitle={subtitle} align="center" className="header" />
			<Process steps={steps} />
		</div>
	);
};

export default EcoviaProcess;
