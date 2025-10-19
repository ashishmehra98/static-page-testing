import { useState, useEffect } from "react";

interface UseIsMobileOptions {
	breakpoint?: number;
}

const useIsMobile = (options: UseIsMobileOptions = {}) => {
	const { breakpoint = 768 } = options;
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};

		// Check on mount
		checkIsMobile();

		// Add event listener for window resize
		window.addEventListener("resize", checkIsMobile);

		// Cleanup
		return () => window.removeEventListener("resize", checkIsMobile);
	}, [breakpoint]);

	return isMobile;
};

export default useIsMobile;
