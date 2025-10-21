export const IMAGES = {
	HEADER_BG: "/images/home-bg.jpg",
	HOME_BG: "/images/home-bg.jpg",
	PEST_CONTROL_SERVICES: "/images/pest-service-thumbnail.jpg",
	PATTERN_BG: "/images/pattern-bg.png",
	INSECTION_SERVICE: "/images/inspection.jpg",
	WORKER: "/images/worker.png",
	PEST_WORKER: "/images/pest-controller.png",
	FOOTER_BG: "/images/home-footer-bg.jpg",
	IMAGES_GRID: "/images/images-grid.png",
	FRAME_ONE: "/images/frame-1.png",
	FRAME_TWO: "/images/frame-2.png",
	FRAME_THREE: "/images/frame-3.png",
	FRAME_FOUR: "/images/frame-4.png",
	FRAME_FIVE: "/images/frame-5.png",
	FRAME_SIX: "/images/frame-6.png",
	TRUSTED_EXPERTS: "/images/trusted-expert.jpg",
	ABOUT_HEADER_BG: "/images/about-us.jpg",
	SERVICE_HEADER_BG: "/images/service-bg.jpg",
	COMMERCIAL: "/images/commercial.jpg",
	COCKROACHES: "/images/cockroaches.png",
	CONTACT_BG: "/images/contact-bg.jpg",
};

export type ImageName = keyof typeof IMAGES;
export type IconPath = (typeof IMAGES)[ImageName];
