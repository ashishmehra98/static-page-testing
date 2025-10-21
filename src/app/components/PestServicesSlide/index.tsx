"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Hero from "../Hero";
import HeaderSection from "../HeaderSection";
import PestInfo from "../PestInfo";
import { IMAGES } from "../../constants/images";
import useIsMobile from "../../../hooks/useIsMobile";
import styles from "./PestServicesSlide.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface SlideData {
	id: string;
	imageSrc: string;
	imageAlt?: string;
	pestName: string;
	commonSigns: string;
	treatment: string;
}

const slides: SlideData[] = [
	{
		id: "cockroaches",
		imageSrc: "/images/pest-controller.png",
		imageAlt: "Cockroaches",
		pestName: "Cockroaches",
		commonSigns: "Droppings, greasy marks behind appliances, live sightings",
		treatment:
			"Use gel baits, residual sprays, and deep cleaning of hiding places. We’ll also advise on restricting food and moisture sources",
	},
	{
		id: "rodents",
		imageSrc: "/images/worker.png",
		imageAlt: "Rodents",
		pestName: "Rodents",
		commonSigns: "Gnaw marks, droppings, scratching noises, nests in hidden areas",
		treatment: "Seal entry points, deploy bait stations and traps, and remove food/water access to discourage activity",
	},
	{
		id: "spiders",
		imageSrc: "/images/trusted-expert.jpg",
		imageAlt: "Spiders",
		pestName: "Spiders",
		commonSigns: "Webs in corners, window frames, garages and sheds",
		treatment: "Targeted residual sprays in common nesting and webbing areas and removal of webs to prevent re‑settling",
	},
];

const PestServicesSlide: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<SwiperClass | null>(null);
	const isMobile = useIsMobile({ breakpoint: 768 });

	const handleSlideChange = (swiper: SwiperClass) => {
		setActiveIndex(swiper.activeIndex);
	};

	const onNext = () => {
		if (activeIndex < slides.length - 1) {
			const newIndex = activeIndex + 1;
			setActiveIndex(newIndex);
			if (swiperRef.current) {
				swiperRef.current.slideTo(newIndex, 500);
			}
		}
	};

	const onPrev = () => {
		if (activeIndex > 0) {
			const newIndex = activeIndex - 1;
			setActiveIndex(newIndex);
			if (swiperRef.current) {
				swiperRef.current.slideTo(newIndex, 500);
			}
		}
	};

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(activeIndex, 500);
		}
	}, [activeIndex]);

	useEffect(() => {
		if (swiperRef.current) {
			if (isMobile) {
				swiperRef.current.autoplay?.start();
			} else {
				swiperRef.current.autoplay?.stop();
			}
		}
	}, [isMobile]);

	return (
		<Hero bgImage={IMAGES.PATTERN_BG} hideGradient={true} className={styles.heroSection}>
			<HeaderSection
				title="Our Residential "
				highlightedText="Pest Services"
				extraTitle=": What We Treat"
				subtitle="We provide a comprehensive residential pest control service for Sydney households."
				align="center"
				titleColor="white"
				highlightedTextColor="#B1CF5F"
				subtitleColor="white"
				className={styles.headerSection}
			/>

			<div className={styles.sliderWrapper}>
				<Swiper
					key={isMobile ? "mobile" : "desktop"}
					modules={[Navigation, Pagination, Autoplay, EffectFade]}
					spaceBetween={0}
					slidesPerView={1}
					centeredSlides={false}
					effect="fade"
					fadeEffect={{ crossFade: true }}
					speed={500}
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
					{slides.map((s) => (
						<SwiperSlide key={s.id} className={styles.slide}>
							<PestInfo
								imageSrc={s.imageSrc}
								imageAlt={s.imageAlt}
								pestName={s.pestName}
								commonSigns={s.commonSigns}
								treatment={s.treatment}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={styles.actionView}>
					<div className={styles.progressContainer}>
						<div className={styles.progressBar}>
							<div className={styles.progressFill} style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }} />
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
							disabled={activeIndex === slides.length - 1}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</Hero>
	);
};

export default PestServicesSlide;
