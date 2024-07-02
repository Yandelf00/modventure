#!/usr/bin/env bash

# Function to generate a random number between 100 and 5000
generate_random_number() {
  echo $((RANDOM % 4901 + 100))
}

# Check if the correct number of arguments is passed
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <input_file> <output_file>"
  exit 1
fi

# Input and output file arguments
input_file="$1"
output_file="$2"

# Use awk to replace the occurrences with a random number
awk -v min=100 -v max=5000 'BEGIN { srand(); } { gsub(/"price": [0-9]+/, "\"price\": " min+rand()*max) } 1' "$input_file" >"$output_file"

echo "Processing complete. Check the output file: $output_file"
