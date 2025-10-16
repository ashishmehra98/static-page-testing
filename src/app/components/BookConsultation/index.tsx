import Image from "next/image";
import Hero from "../Hero";
import HeaderSection from "../HeaderSection";
import Button from "../Button";
import RatingCard from "../RatingCard";
import { IMAGES } from "@/app/constants/images";

const BookConsultation = () => {
	return (
		<Hero bgImage={IMAGES.PATTERN_BG} hideGradient={true} contentViewClassName="flex self-end">
			<div style={{ width: "100%", justifyContent: "space-between" }} className="flex flex-row">
				{/* Left Section */}
				<div className="flex flex-row">
					<div className="flex flex-col gap-[46px] w-[500px]">
						<HeaderSection
							title="Book your quick & free"
							titleColor="white"
							highlightedText="consultation "
							extraTitle="today"
							subtitle="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
							subtitleColor="white"
							align="start"
							className="mb-0"
							subtitleClassName="w-[85%]"
						/>
						<div className="flex gap-4 items-start">
							<Button variant="primary" title={" 0432 227 227"} onPress={() => {}} icon={"phone"} />
						</div>
					</div>
					<div style={{ width: 492, height: 508, position: "relative" }}>
						<Image src={IMAGES.WORKER} alt="Worker" fill />
					</div>
				</div>
				{/* Right Section */}
				<div>
					<RatingCard
						ratings={4}
						review={"Great team, professional approach, and always delivers on time. Highly recommend their services."}
						userImage={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"}
						username={"Sarah Johnson"}
						designation={"CEO"}
					/>
				</div>
			</div>
		</Hero>
	);
};

export default BookConsultation;
