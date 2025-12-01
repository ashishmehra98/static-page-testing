import v8 from "v8";

export function getMemoryReport() {
	const memory = process.memoryUsage();
	const toMb = (bytes: number) => Math.round((bytes / 1024 / 1024) * 100) / 100;

	const formatMemory = () => ({
		rssMb: toMb(memory.rss),
		heapTotalMb: toMb(memory.heapTotal),
		heapUsedMb: toMb(memory.heapUsed),
		externalMb: toMb(memory.external),
		arrayBuffersMb: toMb(memory.arrayBuffers ?? 0),
	});

	const resourceUsage = (() => {
		if (typeof process.resourceUsage !== "function") {
			return null;
		}

		const usage = process.resourceUsage();
		return {
			userCpuSeconds: Math.round((usage.userCPUTime / 1e6) * 100) / 100,
			systemCpuSeconds: Math.round((usage.systemCPUTime / 1e6) * 100) / 100,
			maxRssMb: toMb(usage.maxRSS),
			fsReadOps: usage.fsRead,
			fsWriteOps: usage.fsWrite,
			voluntaryContextSwitches: usage.voluntaryContextSwitches,
			involuntaryContextSwitches: usage.involuntaryContextSwitches,
		};
	})();

	return {
		timestamp: new Date().toISOString(),
		uptimeSeconds: Math.round(process.uptime()),
		pid: process.pid,
		memory: formatMemory(),
		resourceUsage,
		heapStatistics: typeof v8.getHeapStatistics === "function" ? v8.getHeapStatistics() : null,
		gcEnabled: typeof global.gc === "function",
	};
}
