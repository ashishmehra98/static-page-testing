"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PesticideInfo from "../PesticideInfo";
import useIsMobile from "../../../hooks/useIsMobile";
import styles from "./PesticideInfoSlides.module.css";

interface PesticideData {
	id: string;
	insectType: "spider" | "ants" | "bedbug" | "bees" | "rodents";
	name: string;
	description: string;
}

const pesticideData: PesticideData[] = [
	{
		id: "ants",
		insectType: "ants",
		name: "Ants",
		description:
			"Nature's tiny architects—always building, always foraging. If they're showing up inside, your home is likely offering food, moisture, or easy entry points.",
	},
	{
		id: "spider",
		insectType: "spider",
		name: "Spiders",
		description:
			"Nature's stealthy agent — always hunting, never resting. But if they're showing up inside, it usually means your home is offering food, shelter, or a way in.",
	},
	{
		id: "bedbug",
		insectType: "bedbug",
		name: "Bed bugs",
		description:
			"Silent hitchhikers—feeding at night, hiding by day. If they've made their way in, they're likely traveling on luggage, furniture, or clothing.",
	},
	{
		id: "bees",
		insectType: "bees",
		name: "Bees and Wasps",
		description:
			"Buzzing intruders—sometimes helpful, often harmful when too close. They're usually seeking nesting sites or sweet scents that lure them near.",
	},
	{
		id: "rodents",
		insectType: "rodents",
		name: "Rodents",
		description:
			"Uninvited guests—chewing, nesting, and contaminating. They're drawn by warmth, food scraps, and cozy hiding spots.",
	},
];

const PesticideInfoSlides: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<SwiperClass | null>(null);
	const isMobile = useIsMobile({ breakpoint: 768 });

	const handleSlideChange = (swiper: SwiperClass) => {
		setActiveIndex(swiper.activeIndex);
	};

	const onNext = () => {
		if (activeIndex < pesticideData.length - 1) {
			const newIndex = activeIndex + 1;
			setActiveIndex(newIndex);
			// Scroll to the new slide if swiper instance is available
			if (swiperRef.current) {
				swiperRef.current.slideTo(newIndex);
			}
		}
	};

	const onPrev = () => {
		if (activeIndex > 0) {
			const newIndex = activeIndex - 1;
			setActiveIndex(newIndex);
			// Scroll to the new slide if swiper instance is available
			if (swiperRef.current) {
				swiperRef.current.slideTo(newIndex);
			}
		}
	};

	// Sync swiper with active index when it changes
	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(activeIndex);
		}
	}, [activeIndex]);

	// Handle autoplay based on screen size
	useEffect(() => {
		if (swiperRef.current) {
			if (isMobile) {
				// Start autoplay on mobile
				swiperRef.current.autoplay?.start();
			} else {
				// Stop autoplay on desktop
				swiperRef.current.autoplay?.stop();
			}
		}
	}, [isMobile]);

	return (
		<div className={styles.container}>
			<div className={styles.sliderWrapper}>
				<Swiper
					key={isMobile ? "mobile" : "desktop"}
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={24}
					slidesPerView="auto"
					centeredSlides={false}
					autoplay={
						isMobile
							? {
									delay: 3000,
									disableOnInteraction: false,
								}
							: false
					}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					onSlideChange={handleSlideChange}
					className={styles.swiper}>
					{pesticideData.map((pesticide, index) => (
						<SwiperSlide key={pesticide.id} className={styles.slide}>
							<PesticideInfo
								insectType={pesticide.insectType}
								name={pesticide.name}
								description={pesticide.description}
								isSelected={index === activeIndex}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={styles.actionView}>
					{/* Progress Bar */}
					<div className={styles.progressContainer}>
						<div className={styles.progressBar}>
							<div
								className={styles.progressFill}
								style={{
									width: `${((activeIndex + 1) / pesticideData.length) * 100}%`,
								}}
							/>
						</div>
					</div>
					<div className={styles.slideButtonContainer}>
						<button className={`${styles.navButton} ${styles.prevButton}`} onClick={onPrev} disabled={activeIndex === 0}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<button
							className={`${styles.navButton} ${styles.nextButton}`}
							onClick={onNext}
							disabled={activeIndex === pesticideData.length - 1}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PesticideInfoSlides;
