import { ReactNode } from "react";

interface HeroProps {
	children: ReactNode;
	bgImage: string;
}

const Hero = ({ children, bgImage }: HeroProps) => {
	return (
		<section
			className="w-full h-[652px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
			style={{
				backgroundImage: `linear-gradient(278.35deg, rgba(19, 64, 33, 0) 38.67%, var(--secondary) 91.02%), url(${bgImage})`,
				position: "relative",
			}}>
			<div className="w-[90%]">{children}</div>
		</section>
	);
};

export default Hero;
