#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage: poll-memory.sh [options]

Options:
  --url <url>          Memory diagnostics endpoint (default: https://www.ecoviapestcontrol.com.au/api/diagnostics/memory)
  --token <token>      Diagnostics token to send as x-diagnostic-token (falls back to DIAGNOSTICS_TOKEN)
  --output <path>      File to append JSONL samples (default: ./memory-log.jsonl)
  --interval <seconds> Poll interval in seconds (default: 120)
  --count <n>          Number of samples to collect before exiting (default: run until stopped)
  -h, --help           Show this help message and exit

Environment variables:
  DIAGNOSTICS_TOKEN    Token sent as x-diagnostic-token when --token is not provided
USAGE
}

URL="https://www.ecoviapestcontrol.com.au/api/diagnostics/memory"
TOKEN="${DIAGNOSTICS_TOKEN:-}"
OUTPUT="./memory-log.jsonl"
INTERVAL=120
COUNT=""

while [[ $# -gt 0 ]]; do
  case "${1-}" in
    --url)
      URL="$2"
      shift 2
      ;;
    --token)
      TOKEN="$2"
      shift 2
      ;;
    --output)
      OUTPUT="$2"
      shift 2
      ;;
    --interval)
      INTERVAL="$2"
      shift 2
      ;;
    --count)
      COUNT="$2"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage
      exit 1
      ;;
  esac
done

if [[ -z "$URL" ]]; then
  echo "--url is required" >&2
  exit 1
fi

if [[ -z "$TOKEN" ]]; then
  echo "Note: no token set; call will be unauthenticated" >&2
fi

if [[ -n "$COUNT" && ! "$COUNT" =~ ^[0-9]+$ ]]; then
  echo "--count must be a whole number" >&2
  exit 1
fi

if [[ -n "$INTERVAL" && ! "$INTERVAL" =~ ^[0-9]+$ ]]; then
  echo "--interval must be a whole number of seconds" >&2
  exit 1
fi

HEADER_ARGS=()
if [[ -n "$TOKEN" ]]; then
  HEADER_ARGS=("-H" "x-diagnostic-token: $TOKEN")
fi

echo "Polling $URL every $INTERVAL seconds; writing to $OUTPUT"

SAMPLES_COLLECTED=0
while :; do
  if [[ -n "$COUNT" && "$SAMPLES_COLLECTED" -ge "$COUNT" ]]; then
    exit 0
  fi

  TIMESTAMP=$(date --iso-8601=seconds)
  RESPONSE=$(curl --fail --silent --show-error "${HEADER_ARGS[@]}" "$URL")
  echo "{\"timestamp\":\"$TIMESTAMP\",\"response\":$RESPONSE}" >> "$OUTPUT"
  printf 'Recorded sample %s\n' "$TIMESTAMP"

  SAMPLES_COLLECTED=$((SAMPLES_COLLECTED + 1))
  if [[ -n "$COUNT" && "$SAMPLES_COLLECTED" -ge "$COUNT" ]]; then
    break
  fi

  sleep "$INTERVAL"
done

exit 0
