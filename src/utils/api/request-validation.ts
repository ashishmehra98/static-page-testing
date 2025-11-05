import { NextRequest } from "next/server";

/**
 * Validates that the request is coming from the same server/origin
 * Checks IP address, origin, and referer headers for security
 * Ensures requests only come from the same domain where the server is hosted
 */
export function validateRequestOrigin(request: NextRequest): { isValid: boolean; error?: string } {
	const origin = request.headers.get("origin");
	const referer = request.headers.get("referer");
	const host = request.headers.get("host");

	// Get the client IP address
	// Check various headers in case of proxies (Vercel, Cloudflare, etc.)
	const forwardedFor = request.headers.get("x-forwarded-for");
	const realIp = request.headers.get("x-real-ip");
	const cfConnectingIp = request.headers.get("cf-connecting-ip"); // Cloudflare
	const serverIp = process.env.SERVER_IP; // Optional: server's own IP for strict validation

	// Extract the first IP from x-forwarded-for (can contain multiple IPs)
	const clientIp = cfConnectingIp || realIp || (forwardedFor ? forwardedFor.split(",")[0].trim() : null) || "unknown";

	// Get server's hostname from environment or request
	const serverHost = process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "") || host || "";
	const serverDomain = serverHost.split(":")[0]; // Remove port if present

	if (!serverDomain) {
		return {
			isValid: false,
			error: "Server configuration error: Unable to determine server domain.",
		};
	}

	// Check if IP matches server IP (for server-to-server or same-server requests)
	if (serverIp && clientIp && clientIp !== "unknown") {
		const isServerIp = clientIp === serverIp || clientIp === "127.0.0.1" || clientIp === "::1" || clientIp === "localhost";

		if (isServerIp) {
			return { isValid: true };
		}
	}

	// Build allowed origins based on server domain
	const allowedOrigins: string[] = [];
	allowedOrigins.push(`https://${serverDomain}`);
	allowedOrigins.push(`http://${serverDomain}`);

	// Add development origins
	if (process.env.NODE_ENV === "development") {
		allowedOrigins.push("http://localhost");
		allowedOrigins.push("http://127.0.0.1");
		if (host && !allowedOrigins.includes(`http://${host}`)) {
			allowedOrigins.push(`http://${host}`);
		}
	}

	// Normalize domain for comparison (remove port and protocol)
	const normalizeDomain = (url: string): string => {
		try {
			return url
				.replace(/^https?:\/\//, "")
				.split(":")[0]
				.toLowerCase();
		} catch {
			return url.split(":")[0].toLowerCase();
		}
	};

	const serverDomainNormalized = normalizeDomain(serverDomain);
	let originValid = true; // Default to true if not present (same-origin requests)
	let refererValid = true; // Default to true if not present

	// Check origin header (may be null for same-origin requests)
	if (origin) {
		const originDomain = normalizeDomain(origin);
		originValid = allowedOrigins.some((allowed) => {
			const allowedDomain = normalizeDomain(allowed);
			return originDomain === allowedDomain || originDomain === serverDomainNormalized;
		});
	}

	// Check referer header as additional validation
	if (referer) {
		try {
			const refererUrl = new URL(referer);
			const refererDomain = normalizeDomain(refererUrl.hostname);
			refererValid =
				refererDomain === serverDomainNormalized ||
				(process.env.NODE_ENV === "development" && (refererDomain === "localhost" || refererDomain === "127.0.0.1"));
		} catch {
			refererValid = false;
		}
	}

	// Require at least one header to be present
	if (!origin && !referer) {
		return {
			isValid: false,
			error: "Missing origin and referer headers. Request must come from the same server.",
		};
	}

	// Both must be valid if both are present, or at least the present one must be valid
	if (!originValid || !refererValid) {
		return {
			isValid: false,
			error: "Invalid origin or referer. Request must come from the same server.",
		};
	}

	// Additional check: In development, allow localhost IPs
	if (process.env.NODE_ENV === "development") {
		const isLocalhost = clientIp === "127.0.0.1" || clientIp === "::1" || clientIp === "localhost";
		if (isLocalhost) {
			return { isValid: true };
		}
	}

	return { isValid: true };
}
