import { ReactNode } from "react";

interface HeroProps {
	children: ReactNode;
	bgImage: string;
	hideGradient?: boolean;
	className?: string;
}

const Hero = ({ children, bgImage, hideGradient, className }: HeroProps) => {
	return (
		<section
			className={`w-full min-h-[652px] bg-cover bg-center bg-no-repeat flex items-center justify-center ${className}`}
			style={{
				backgroundImage: hideGradient
					? `url(${bgImage})`
					: `linear-gradient(278.35deg, rgba(19, 64, 33, 0) 38.67%, var(--secondary) 91.02%), url(${bgImage})`,
				position: "relative",
			}}>
			<div className="w-[90%]">{children}</div>
		</section>
	);
};

export default Hero;
