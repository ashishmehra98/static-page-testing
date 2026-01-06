#!/usr/bin/env node

/**
 * Load Testing Script for Ecovia Website
 *
 * This script performs load testing on configured routes by sending concurrent requests.
 * Configure the traffic number and route blacklist as needed.
 */

let BASE_URL = process.env.BASE_URL || "https://testing-ws.ashishmehra.dev";

// Configuration: Number of requests to send per route
let TRAFFIC_NUMBER = parseInt(process.env.TRAFFIC_NUMBER || "100", 10);

// Configuration: Route definitions with blacklist flags
const ROUTES = {
	"/": { isBlacklisted: false },
	"/about-us": { isBlacklisted: false },
	"/services": { isBlacklisted: false },
	"/services/residential-pest-control": { isBlacklisted: false },
	"/services/industrial-pest-control": { isBlacklisted: false },
	"/services/commercial-pest-control": { isBlacklisted: false },
	"/services/construction-site-pest-control": { isBlacklisted: false },
	"/services/eco-friendly-pest-control": { isBlacklisted: false },
	"/services/strata-pest-control": { isBlacklisted: false },
	"/pests": { isBlacklisted: false },
	"/pests/cockroach-pest-control": { isBlacklisted: false },
	"/pests/ant-pest-control-sydney": { isBlacklisted: false },
	"/pests/rats-mice-pest-control": { isBlacklisted: false },
	"/pests/spider-pest-control-study": { isBlacklisted: false },
	"/pests/bed-bug-pest-control": { isBlacklisted: false },
	"/pests/bee-pest-control": { isBlacklisted: false },
	"/pests/bird-pest-control": { isBlacklisted: false },
	"/pests/carpet-beetle-pest-control": { isBlacklisted: false },
	"/pests/fly-pest-control": { isBlacklisted: false },
	"/pests/mosquito-pest-control": { isBlacklisted: false },
	"/pests/possum-pest-control": { isBlacklisted: false },
	"/pests/stored-product-pests-control": { isBlacklisted: false },
	"/pests/wasp-pest-control": { isBlacklisted: false },
	"/blogs": { isBlacklisted: false },
	"/blogs/why-pest-control-is-important": { isBlacklisted: false },
	"/contact-us": { isBlacklisted: false },
};

// Statistics tracking
const stats = {
	totalRequests: 0,
	successfulRequests: 0,
	failedRequests: 0,
	errors: [],
	responseTimes: [],
	statusCodes: {},
	startTime: null,
	endTime: null,
};

/**
 * Fetches a URL and records statistics
 */
async function fetchUrl(url) {
	const startTime = Date.now();
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"User-Agent": "Mozilla/5.0 (compatible; LoadTester/1.0)",
			},
		});

		const responseTime = Date.now() - startTime;
		const statusCode = response.status;

		stats.totalRequests++;
		stats.responseTimes.push(responseTime);

		if (response.ok) {
			stats.successfulRequests++;
		} else {
			stats.failedRequests++;
			stats.errors.push({
				url,
				statusCode,
				message: `HTTP ${statusCode}`,
			});
		}

		// Track status codes
		if (!stats.statusCodes[statusCode]) {
			stats.statusCodes[statusCode] = 0;
		}
		stats.statusCodes[statusCode]++;

		return { success: response.ok, statusCode, responseTime };
	} catch (error) {
		const responseTime = Date.now() - startTime;
		stats.totalRequests++;
		stats.failedRequests++;
		stats.responseTimes.push(responseTime);

		const errorMessage = error instanceof Error ? error.message : "Unknown error";
		stats.errors.push({
			url,
			statusCode: null,
			message: errorMessage,
		});

		return { success: false, statusCode: null, responseTime, error: errorMessage };
	}
}

/**
 * Performs load testing on a single route
 */
async function testRoute(route, trafficNumber) {
	const url = `${BASE_URL}${route}`;
	const requests = [];

	for (let i = 0; i < trafficNumber; i++) {
		requests.push(fetchUrl(url));
	}

	await Promise.all(requests);
}

/**
 * Calculates statistics from response times
 */
function calculateStats(responseTimes) {
	if (responseTimes.length === 0) {
		return {
			min: 0,
			max: 0,
			avg: 0,
			median: 0,
			p95: 0,
			p99: 0,
		};
	}

	const sorted = [...responseTimes].sort((a, b) => a - b);
	const sum = responseTimes.reduce((acc, val) => acc + val, 0);

	return {
		min: sorted[0],
		max: sorted[sorted.length - 1],
		avg: Math.round(sum / responseTimes.length),
		median: sorted[Math.floor(sorted.length / 2)],
		p95: sorted[Math.floor(sorted.length * 0.95)],
		p99: sorted[Math.floor(sorted.length * 0.99)],
	};
}

/**
 * Prints test results
 */
function printResults() {
	const duration = stats.endTime - stats.startTime;
	const responseTimeStats = calculateStats(stats.responseTimes);
	const successRate = stats.totalRequests > 0 ? ((stats.successfulRequests / stats.totalRequests) * 100).toFixed(2) : 0;

	console.log("\n" + "=".repeat(80));
	console.log("LOAD TEST RESULTS");
	console.log("=".repeat(80));
	console.log(`Base URL: ${BASE_URL}`);
	console.log(`Test Duration: ${(duration / 1000).toFixed(2)}s`);
	console.log(`Total Requests: ${stats.totalRequests}`);
	console.log(`Successful: ${stats.successfulRequests} (${successRate}%)`);
	console.log(`Failed: ${stats.failedRequests}`);
	console.log("\nResponse Time Statistics (ms):");
	console.log(`  Min: ${responseTimeStats.min}ms`);
	console.log(`  Max: ${responseTimeStats.max}ms`);
	console.log(`  Avg: ${responseTimeStats.avg}ms`);
	console.log(`  Median: ${responseTimeStats.median}ms`);
	console.log(`  P95: ${responseTimeStats.p95}ms`);
	console.log(`  P99: ${responseTimeStats.p99}ms`);

	if (Object.keys(stats.statusCodes).length > 0) {
		console.log("\nStatus Code Distribution:");
		Object.entries(stats.statusCodes)
			.sort(([a], [b]) => parseInt(a) - parseInt(b))
			.forEach(([code, count]) => {
				const percentage = ((count / stats.totalRequests) * 100).toFixed(2);
				console.log(`  ${code}: ${count} (${percentage}%)`);
			});
	}

	if (stats.errors.length > 0) {
		console.log(`\nErrors (showing first 10 of ${stats.errors.length}):`);
		stats.errors.slice(0, 10).forEach((error) => {
			console.log(`  ${error.url}: ${error.message}`);
		});
		if (stats.errors.length > 10) {
			console.log(`  ... and ${stats.errors.length - 10} more errors`);
		}
	}

	console.log("=".repeat(80) + "\n");
}

/**
 * Main function
 */
async function main() {
	// Filter out blacklisted routes
	const activeRoutes = Object.entries(ROUTES)
		.filter(([, config]) => !config.isBlacklisted)
		.map(([route]) => route);

	if (activeRoutes.length === 0) {
		console.error("No active routes to test. All routes are blacklisted.");
		process.exit(1);
	}

	console.log(`Starting load test...`);
	console.log(`Base URL: ${BASE_URL}`);
	console.log(`Traffic per route: ${TRAFFIC_NUMBER}`);
	console.log(`Active routes: ${activeRoutes.length}`);
	console.log(`Total requests: ${activeRoutes.length * TRAFFIC_NUMBER}`);
	console.log("\nActive routes:");
	activeRoutes.forEach((route) => console.log(`  - ${route}`));
	console.log("\nRunning tests...\n");

	stats.startTime = Date.now();

	// Test all routes concurrently
	const routePromises = activeRoutes.map((route) => testRoute(route, TRAFFIC_NUMBER));
	await Promise.all(routePromises);

	stats.endTime = Date.now();

	printResults();
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
	console.log(`
Load Testing Script for Ecovia Website

Usage: node load-test.js [options]

Options:
  --help, -h              Show this help message
  --traffic <number>      Number of requests per route (default: ${TRAFFIC_NUMBER})
  --url <url>             Base URL to test (default: ${BASE_URL})

Environment Variables:
  BASE_URL                Base URL to test (default: ${BASE_URL})
  TRAFFIC_NUMBER          Number of requests per route (default: ${TRAFFIC_NUMBER})

Configuration:
  Edit the ROUTES object in this script to configure which routes to test
  and which routes to blacklist.

Example:
  node load-test.js --traffic 50 --url https://testing-ws.ashishmehra.dev
  TRAFFIC_NUMBER=100 node load-test.js
`);
	process.exit(0);
}

// Parse command line arguments
for (let i = 0; i < args.length; i++) {
	if (args[i] === "--traffic" && args[i + 1]) {
		const traffic = parseInt(args[i + 1], 10);
		if (!isNaN(traffic) && traffic > 0) {
			TRAFFIC_NUMBER = traffic;
		}
		i++;
	} else if (args[i] === "--url" && args[i + 1]) {
		BASE_URL = args[i + 1];
		i++;
	}
}

// Run the load test
main().catch((error) => {
	console.error("Fatal error:", error);
	process.exit(1);
});
