import HeaderSection from "../../../components/HeaderSection";
import Process from "../../../components/Process";
import styles from "./EcoviaProcess.module.css";

const EcoviaProcess = () => {
	return (
		<div className={styles.ecoviaProcessSection}>
			<HeaderSection
				title="Our Process: How Ecovia Works"
				subtitle="We follow a transparent, step-by-step approach so you know exactly what to expect."
				align="center"
				className="header"
			/>
			<Process />
		</div>
	);
};

export default EcoviaProcess;
