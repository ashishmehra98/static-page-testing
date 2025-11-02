/**
 * Dynamically loads Swiper CSS to prevent render-blocking.
 * Next.js will optimize these imports and load them asynchronously when components mount.
 * This ensures CSS is only loaded when Swiper components are actually used.
 */

// Import Swiper CSS directly - Next.js optimizes these imports
// These imports are code-split and only loaded when components using Swiper mount
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/**
 * Call this function in components that use Swiper to ensure styles are loaded.
 * The actual CSS loading is handled by the imports above, which Next.js optimizes.
 */
export function loadSwiperStyles() {
	// Function kept for API compatibility
	// The actual loading happens via the imports above
}
