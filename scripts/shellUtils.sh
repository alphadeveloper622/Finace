#!/bin/bash

GREEN=$'\e[1;32m'
RED=$'\e[1;31m'
BLUE=$'\e[1;34m'
TITLE=$'\e[1;4;34m'
RESET=$'\e[0m'

function success {
  echo "🎉 $GREEN$1$RESET"
}

function error {
  echo "💥 $RED$1$RESET"
}

function info {
  echo "$BLUE$1$RESET"
}

function title {
  printf "\n%s%s%s\n" "$TITLE" "$1" "$RESET"
}

function assert_equal {
  if [[ "$1" != "$2" ]]; then
    error "Assertion failed: $1 is not equal to $2"
    exit 1
  else
    success "Assertion passed: $1 is equal to $1"
  fi
}

# Usage: join_by_string <delimiter> ...strings
function join_by_string {
  local separator="$1"
  shift
  local first="$1"
  shift
  printf "%s" "$first" "${@/#/$separator}"
}
