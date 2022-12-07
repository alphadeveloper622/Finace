#!/bin/bash

CURRENT_DIR=$(pwd)
ROOT_DIR=$(dirname "$(dirname "$(realpath "${BASH_SOURCE[0]}")")")

cd "$ROOT_DIR" || exit 1

source scripts/shellUtils.sh

# This lists all shell scripts in this repo except those in directories we want to ignore
SHELL_SCRIPTS=$(find . -type d \( -path ./node_modules -o -path ./vendor -o -path ./ios/Pods -o -path ./.husky \) -prune -o -name '*.sh' -print)
info "👀 Linting the following shell scripts using ShellCheck: $SHELL_SCRIPTS"
info

ASYNC_PROCESSES=()
for SHELL_SCRIPT in $SHELL_SCRIPTS; do
  npx shellcheck -e SC1091 "$SHELL_SCRIPT" &
  ASYNC_PROCESSES+=($!)
done

EXIT_CODE=0
for PID in "${ASYNC_PROCESSES[@]}"; do
  if ! wait "$PID"; then
    EXIT_CODE=1
  fi
done

cd "$CURRENT_DIR" || exit 1

if [ $EXIT_CODE == 0 ]; then
  success "ShellCheck passed for all files!"
fi

exit $EXIT_CODE
