import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const BASE_URL = "https://testing-ws.ashishmehra.dev";

interface ResourceInfo {
	url: string;
	type: "js" | "css" | "image" | "font" | "other";
	cacheStatus: string | null;
	cfRay?: string;
	cfCacheStatus?: string | null;
	statusCode?: number;
	contentType?: string;
	error?: string;
}

interface CacheStatusResult {
	cached: ResourceInfo[];
	notCached: ResourceInfo[];
	bypass: ResourceInfo[];
	expired: ResourceInfo[];
	stale: ResourceInfo[];
	errors: ResourceInfo[];
	summary: {
		total: number;
		cached: number;
		notCached: number;
		bypass: number;
		expired: number;
		stale: number;
		errors: number;
	};
}

function extractResources(html: string, baseUrl: string): string[] {
	const resources: Set<string> = new Set();

	// Helper to normalize and add URLs
	const addResource = (url: string) => {
		if (!url || url.startsWith("data:") || url.startsWith("javascript:") || url.startsWith("mailto:") || url.startsWith("#")) {
			return;
		}
		if (url.startsWith("/")) {
			url = baseUrl + url;
		}
		if (url.startsWith("http")) {
			resources.add(url);
		}
	};

	let match;

	// Extract script tags (including async, defer, module, etc.)
	const scriptRegex = /<script[^>]+src=["']([^"']+)["'][^>]*>/gi;
	while ((match = scriptRegex.exec(html)) !== null) {
		addResource(match[1]);
	}

	// Extract link tags (CSS, preload, prefetch, dns-prefetch, preconnect, etc.)
	const linkRegex = /<link[^>]+(?:href|as)=["']([^"']+)["'][^>]*>/gi;
	while ((match = linkRegex.exec(html)) !== null) {
		addResource(match[1]);
	}

	// Extract img tags (including srcset)
	const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
	while ((match = imgRegex.exec(html)) !== null) {
		addResource(match[1]);
	}

	// Extract srcset attributes (responsive images)
	const srcsetRegex = /srcset=["']([^"']+)["']/gi;
	while ((match = srcsetRegex.exec(html)) !== null) {
		const srcset = match[1];
		// Split srcset by comma and extract URLs
		srcset.split(",").forEach((entry) => {
			const url = entry.trim().split(/\s+/)[0];
			addResource(url);
		});
	}

	// Extract source tags (picture elements)
	const sourceRegex = /<source[^>]+src=["']([^"']+)["'][^>]*>/gi;
	while ((match = sourceRegex.exec(html)) !== null) {
		addResource(match[1]);
	}

	// Extract from _next/static paths (chunks, CSS, etc.)
	const nextStaticRegex = /["'](\/_next\/[^"']+)["']/gi;
	while ((match = nextStaticRegex.exec(html)) !== null) {
		addResource(match[1]);
	}

	// Extract from inline JSON data (Next.js build manifest references)
	const jsonDataRegex = /<script[^>]*type=["']application\/json["'][^>]*>([^<]+)<\/script>/gi;
	while ((match = jsonDataRegex.exec(html)) !== null) {
		try {
			const jsonData = JSON.parse(match[1]);
			// Recursively extract URLs from JSON
			const extractFromObject = (obj: unknown): void => {
				if (typeof obj === "string" && (obj.startsWith("/") || obj.startsWith("http"))) {
					addResource(obj);
				} else if (Array.isArray(obj)) {
					obj.forEach(extractFromObject);
				} else if (obj && typeof obj === "object") {
					Object.values(obj).forEach(extractFromObject);
				}
			};
			extractFromObject(jsonData);
		} catch {
			// Ignore JSON parse errors
		}
	}

	// Extract from style tags (background-image URLs, etc.)
	const styleRegex = /<style[^>]*>([^<]+)<\/style>/gi;
	while ((match = styleRegex.exec(html)) !== null) {
		const styleContent = match[1];
		// Extract url() references
		const urlRegex = /url\(["']?([^"')]+)["']?\)/gi;
		let urlMatch;
		while ((urlMatch = urlRegex.exec(styleContent)) !== null) {
			addResource(urlMatch[1]);
		}
	}

	// Extract from inline style attributes
	const inlineStyleRegex = /style=["']([^"']+)["']/gi;
	while ((match = inlineStyleRegex.exec(html)) !== null) {
		const styleContent = match[1];
		const urlRegex = /url\(["']?([^"')]+)["']?\)/gi;
		let urlMatch;
		while ((urlMatch = urlRegex.exec(styleContent)) !== null) {
			addResource(urlMatch[1]);
		}
	}

	// Extract from meta tags (og:image, etc.)
	const metaRegex = /<meta[^>]+content=["']([^"']+)["'][^>]*>/gi;
	while ((match = metaRegex.exec(html)) !== null) {
		const content = match[1];
		if (content.startsWith("http") || content.startsWith("/")) {
			addResource(content);
		}
	}

	return Array.from(resources);
}

function getResourceType(url: string): ResourceInfo["type"] {
	const lowerUrl = url.toLowerCase();
	if (lowerUrl.includes(".js") || lowerUrl.includes("javascript")) {
		return "js";
	}
	if (lowerUrl.includes(".css") || lowerUrl.includes("stylesheet")) {
		return "css";
	}
	if (lowerUrl.includes(".woff") || lowerUrl.includes(".woff2") || lowerUrl.includes(".ttf") || lowerUrl.includes(".otf")) {
		return "font";
	}
	if (
		lowerUrl.includes(".jpg") ||
		lowerUrl.includes(".jpeg") ||
		lowerUrl.includes(".png") ||
		lowerUrl.includes(".webp") ||
		lowerUrl.includes(".svg") ||
		lowerUrl.includes(".gif") ||
		lowerUrl.includes("image")
	) {
		return "image";
	}
	return "other";
}

async function checkCacheStatus(url: string): Promise<ResourceInfo> {
	const resourceInfo: ResourceInfo = {
		url,
		type: getResourceType(url),
		cacheStatus: null,
	};

	try {
		const response = await fetch(url, {
			method: "HEAD",
			headers: {
				"User-Agent": "Mozilla/5.0 (compatible; CacheStatusChecker/1.0)",
			},
		});

		resourceInfo.statusCode = response.status;
		resourceInfo.contentType = response.headers.get("content-type") || undefined;
		resourceInfo.cfRay = response.headers.get("cf-ray") || undefined;
		const cfCacheStatus = response.headers.get("cf-cache-status");
		resourceInfo.cfCacheStatus = cfCacheStatus || undefined;
		resourceInfo.cacheStatus = cfCacheStatus;
	} catch (error) {
		resourceInfo.error = error instanceof Error ? error.message : "Unknown error";
		resourceInfo.cacheStatus = "ERROR";
	}

	return resourceInfo;
}

function organizeResults(resources: ResourceInfo[]): CacheStatusResult {
	const result: CacheStatusResult = {
		cached: [],
		notCached: [],
		bypass: [],
		expired: [],
		stale: [],
		errors: [],
		summary: {
			total: resources.length,
			cached: 0,
			notCached: 0,
			bypass: 0,
			expired: 0,
			stale: 0,
			errors: 0,
		},
	};

	for (const resource of resources) {
		const status = resource.cfCacheStatus?.toUpperCase() || resource.cacheStatus?.toUpperCase() || "UNKNOWN";

		if (resource.error || status === "ERROR") {
			result.errors.push(resource);
			result.summary.errors++;
		} else if (status === "HIT") {
			result.cached.push(resource);
			result.summary.cached++;
		} else if (status === "MISS" || status === "NONE" || status === "UNKNOWN") {
			result.notCached.push(resource);
			result.summary.notCached++;
		} else if (status === "BYPASS") {
			result.bypass.push(resource);
			result.summary.bypass++;
		} else if (status === "EXPIRED") {
			result.expired.push(resource);
			result.summary.expired++;
		} else if (status === "STALE") {
			result.stale.push(resource);
			result.summary.stale++;
		} else {
			// Other statuses like UPDATING, DYNAMIC, etc.
			result.notCached.push(resource);
			result.summary.notCached++;
		}
	}

	return result;
}

export async function GET(request: NextRequest) {
	try {
		// Fetch the main page HTML
		const htmlResponse = await fetch(BASE_URL, {
			headers: {
				"User-Agent": "Mozilla/5.0 (compatible; CacheStatusChecker/1.0)",
			},
		});

		if (!htmlResponse.ok) {
			return NextResponse.json(
				{
					error: `Failed to fetch main page: ${htmlResponse.status} ${htmlResponse.statusText}`,
				},
				{ status: htmlResponse.status },
			);
		}

		const html = await htmlResponse.text();

		// Extract all resource URLs from HTML
		const resourceUrls = extractResources(html, BASE_URL);

		// Try to fetch Next.js build manifest to get all chunks
		try {
			const manifestResponse = await fetch(`${BASE_URL}/_next/static/chunks/manifest.json`, {
				headers: {
					"User-Agent": "Mozilla/5.0 (compatible; CacheStatusChecker/1.0)",
				},
			});

			if (manifestResponse.ok) {
				const manifest = await manifestResponse.json();
				// Extract all chunk URLs from manifest
				if (manifest && typeof manifest === "object") {
					const extractChunks = (obj: unknown): void => {
						if (typeof obj === "string" && obj.startsWith("/_next/")) {
							resourceUrls.push(BASE_URL + obj);
						} else if (Array.isArray(obj)) {
							obj.forEach(extractChunks);
						} else if (obj && typeof obj === "object") {
							Object.values(obj).forEach(extractChunks);
						}
					};
					extractChunks(manifest);
				}
			}
		} catch {
			// Ignore manifest fetch errors
		}

		// Try to fetch Next.js build ID file
		try {
			const buildIdResponse = await fetch(`${BASE_URL}/_next/static/BUILD_ID`, {
				headers: {
					"User-Agent": "Mozilla/5.0 (compatible; CacheStatusChecker/1.0)",
				},
			});
			if (buildIdResponse.ok) {
				resourceUrls.push(`${BASE_URL}/_next/static/BUILD_ID`);
			}
		} catch {
			// Ignore build ID fetch errors
		}

		// Remove duplicates and filter out non-http/https URLs
		const uniqueUrls = Array.from(new Set(resourceUrls.filter((url) => url.startsWith("http://") || url.startsWith("https://"))));

		// Check cache status for all resources (with concurrency limit)
		const concurrencyLimit = 10;
		const resources: ResourceInfo[] = [];

		for (let i = 0; i < uniqueUrls.length; i += concurrencyLimit) {
			const batch = uniqueUrls.slice(i, i + concurrencyLimit);
			const batchResults = await Promise.all(batch.map((url) => checkCacheStatus(url)));
			resources.push(...batchResults);
		}

		// Organize results
		const organizedResults = organizeResults(resources);

		// Sort resources within each category by type and URL
		const sortResources = (a: ResourceInfo, b: ResourceInfo) => {
			if (a.type !== b.type) {
				return a.type.localeCompare(b.type);
			}
			return a.url.localeCompare(b.url);
		};

		organizedResults.cached.sort(sortResources);
		organizedResults.notCached.sort(sortResources);
		organizedResults.bypass.sort(sortResources);
		organizedResults.expired.sort(sortResources);
		organizedResults.stale.sort(sortResources);
		organizedResults.errors.sort(sortResources);

		return NextResponse.json(
			{
				baseUrl: BASE_URL,
				timestamp: new Date().toISOString(),
				...organizedResults,
			},
			{
				headers: {
					"Cache-Control": "no-store, no-cache, must-revalidate",
				},
			},
		);
	} catch (error) {
		console.error("Cache status check error:", error);
		return NextResponse.json(
			{
				error: error instanceof Error ? error.message : "An unexpected error occurred",
			},
			{ status: 500 },
		);
	}
}
