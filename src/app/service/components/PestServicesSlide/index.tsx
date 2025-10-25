import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import styles from "./PestServicesSlide.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import Hero from "@/app/components/Hero";
import HeaderSection from "@/app/components/HeaderSection";
import PestInfo from "@/app/components/PestInfo";
import { IMAGES } from "@/app/constants/images";
import { pestData } from "@/app/constants/pests";

const slides = pestData;

const PestServicesSlide: React.FC<{ className?: string }> = ({ className }) => {
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
		<Hero bgImage={IMAGES.PATTERN_BG} hideGradient={true} className={`${styles.heroSection} ${className}`}>
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
						<SwiperSlide key={s.path} className={styles.slide}>
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
