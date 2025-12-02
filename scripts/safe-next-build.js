#!/usr/bin/env node
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = process.cwd();
const nextDir = path.join(projectRoot, '.next');
const fallbackCache = path.join(projectRoot, '.next-turbo-cache');

function cleanNextDir() {
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
  } catch (error) {
    console.warn(
      `[safe-next-build] Unable to remove ${nextDir}: ${error.message}. Continuing; stale caches will be overwritten.`,
    );
  }
}

cleanNextDir();

const env = {
  ...process.env,
  NEXT_CACHE_DIR: process.env.NEXT_CACHE_DIR || fallbackCache,
};

const result = spawnSync('next', ['build', '--turbopack'], {
  stdio: 'inherit',
  env,
});

process.exit(result.status ?? 1);
