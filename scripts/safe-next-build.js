#!/usr/bin/env node
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = process.cwd();
const fallbackCache = path.join(projectRoot, '.next-turbo-cache');

function cleanFallbackCache(target) {
  try {
    fs.rmSync(target, { recursive: true, force: true });
  } catch (error) {
    console.warn(
      `[safe-next-build] Unable to clear ${target}: ${error.message}. Continuing; Next.js will manage cache contents automatically.`,
    );
  }
}

// We intentionally avoid deleting `.next` entirely because some platforms mount it
// as a volume, which makes `rm -rf .next` fail with EBUSY. When a custom cache
// directory is not provided, we fall back to `.next-turbo-cache` and try to
// clear that location only; the primary `.next` output will be overwritten by
// the build process without pre-cleaning.
if (!process.env.NEXT_CACHE_DIR) {
  cleanFallbackCache(fallbackCache);
}

const env = {
  ...process.env,
  NEXT_CACHE_DIR: process.env.NEXT_CACHE_DIR || fallbackCache,
};

const result = spawnSync('next', ['build', '--turbopack'], {
  stdio: 'inherit',
  env,
});

process.exit(result.status ?? 1);
