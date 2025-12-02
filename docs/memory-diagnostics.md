# Memory diagnostics guide

Use this checklist to decide what to do when platform metrics (e.g., Railway RAM charts) rise even when the site is idle. The steps rely on the `/api/diagnostics/memory` endpoint added for leak investigations.

## 1) Enable guarded access
- Set `DIAGNOSTICS_TOKEN=<strong-secret>` in the environment.
- Call the endpoint with `x-diagnostic-token: <strong-secret>` so only authorized callers can read runtime data.

## 2) Capture periodic samples
- Poll `GET /api/diagnostics/memory` every few minutes for at least one hour while the app is idle.
- Save each JSON response alongside its timestamp to see whether RSS or heap grows without traffic.
- A simple starting command: `curl -H "x-diagnostic-token: $DIAGNOSTICS_TOKEN" https://<host>/api/diagnostics/memory >> memory-log.jsonl`.
- For automated sampling, run `./scripts/poll-memory.sh --url https://<host>/api/diagnostics/memory --token "$DIAGNOSTICS_TOKEN" --output memory-log.jsonl --interval 120 --count 50` to capture 50 JSONL entries locally (defaults target the ecoviapestcontrol.com.au deployment).

> Live example: if the site is deployed to `https://www.ecoviapestcontrol.com.au`, call `curl -H "x-diagnostic-token: $DIAGNOSTICS_TOKEN" https://www.ecoviapestcontrol.com.au/api/diagnostics/memory` to capture a single sample.

## 3) Interpret the readings
- **rssMb** rising steadily while **heapUsedMb** stays flat often points to native add-ons or open file/socket handles.
- **heapUsedMb** growing together with **heapTotalMb** suggests JavaScript allocations that are not released.
- Compare **uptimeSeconds** between samples; growth that resets after restarts indicates a process-level leak.
- When **gcEnabled** is `true`, you can trigger GC manually in a controlled environment (not production) to see if usage drops.

## 4) Narrow down sources
- Enable application-level request logging to verify the instance is truly idle during the sampling window.
- Inspect **resourceUsage** counters: rising `fsRead`/`fsWrite` or context switches without traffic may hint at background tasks.
- Collect a Node.js heap snapshot in staging using `node --inspect` or `node --inspect-brk` and analyze it in Chrome DevTools; look for growing retainers such as caches or event listeners.

## 5) Decide next actions
- If RSS rises but heap stays flat, audit native dependencies and long-lived handles (DB connections, sockets, file streams).
- If heap rises, profile allocations under a representative load test, then patch the retaining objects and redeploy.
- Keep the diagnostics endpoint available during verification so you can confirm the fix stabilizes memory over hours or days.

## 6) Disable access when finished
- Remove or rotate `DIAGNOSTICS_TOKEN` after the investigation to avoid exposing runtime details unnecessarily.

Following this flow should clarify whether the observed chart drift is a real leak and point to the likely layer (Node heap vs. native resources) to fix next.
