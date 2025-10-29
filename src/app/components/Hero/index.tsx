import { ReactNode } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
	children: ReactNode;
	bgImage: string;
	hideGradient?: boolean;
	className?: string;
	contentViewClassName?: string;
	bgPosition?: string;
}

const Hero = ({ children, bgImage, hideGradient, className, contentViewClassName, bgPosition = "center" }: HeroProps) => {
	return (
		<section
			className={`w-full min-h-[652px] flex items-center justify-center ${styles.hero} ${
				hideGradient ? styles.heroWithoutGradient : styles.heroWithGradient
			} ${className ?? ""}`}
			style={
				{
					"--bg-image": `url(${bgImage})`,
					backgroundPosition: bgPosition,
					position: "relative",
				} as React.CSSProperties
			}>
			<div className={`w-[90%] ${contentViewClassName ?? ""}`}>{children}</div>
		</section>
	);
};

export default Hero;
