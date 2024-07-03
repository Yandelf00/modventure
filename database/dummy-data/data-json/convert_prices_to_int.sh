#!/bin/bash

# Check if a filename is provided as an argument
if [ $# -eq 0 ]; then
  echo "Usage: $0 <json_file>"
  exit 1
fi

# Extract the filename from the command line argument
JSON_FILE="$1"

# Backup original file (optional)
cp "$JSON_FILE" "$JSON_FILE.bak"

# Convert prices to integers using jq and awk
jq '.[] | if .price | type == "string" then .price |= tonumber | .price |= floor else . end' "$JSON_FILE" | \
jq '.[] | if .price | type == "number" then .price |= floor else . end' > temp.json

# Replace original file with modified data
mv temp.json "$JSON_FILE"

echo "Prices converted to integers in $JSON_FILE"
