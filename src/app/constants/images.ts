export const IMAGES = {
	HEADER_BG: "/images/home-bg.jpg",
	PEST_CONTROL_SERVICES: "/images/pest-service-thumbnail.jpg",
	PATTERN_BG: "/images/pattern-bg.png",
	INSECTION_SERVICE: "/images/inspection.jpg",
	WORKER: "/images/worker.png",
	PEST_WORKER: "/images/pest-controller.png",
};

export type ImageName = keyof typeof IMAGES;
export type IconPath = (typeof IMAGES)[ImageName];
