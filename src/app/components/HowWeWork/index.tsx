import Image from "next/image";
import Hero from "../Hero";
import HeaderSection from "../HeaderSection";
import Button from "../Button";
import Info from "../Info";
import { IMAGES } from "@/app/constants/images";

const HowWeWork = () => {
	return (
		<Hero bgImage={IMAGES.PATTERN_BG} hideGradient={true} className="pt-[90px] pb-[60px]">
			<div className="flex flex-row justify-between items-end mb-[60px]">
				<HeaderSection
					title="How We"
					titleColor="white"
					highlightedText="Work"
					subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
					subtitleColor="white"
					align="start"
					className="mb-0"
				/>
				<div className="flex gap-4 items-start">
					<Button variant="primary" title={" 0432 227 227"} onPress={() => {}} icon={"phone"} />
					<Button variant="light" title={"Contact us"} onPress={() => {}} icon={"email-secondary"} />
				</div>
			</div>
			<div className="flex flex-row justify-between items-center gap-[54px]">
				<div className="flex w-1/2 h-[438px] relative rounded-[20px] overflow-hidden">
					<Image
						src={IMAGES.INSECTION_SERVICE}
						alt="Inspection process"
						fill
						style={{ objectFit: "cover", objectPosition: "center 75%" }}
					/>
				</div>
				<div className="flex flex-col gap-[57px] w-1/2">
					<Info icon="support" title="Initial Consultation" description="We begin with a detailed assessment of your home" />
					<Info icon="document" title="Treatment Plan" description="We begin with a detailed assessment of your home" />
					<Info icon="stars" title="Implementation" description="We begin with a detailed assessment of your home" />
				</div>
			</div>
		</Hero>
	);
};

export default HowWeWork;
