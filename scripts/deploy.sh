#/usr/bin/env bash

set -ex

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
APP_DIR="${SCRIPT_DIR}/.."

for arg in "$@"; do
  if [ "$arg" == "--restart" ]; then
    NEED_RESTART=true
  fi
done

ssh volumio "rm -rf /data/plugins/user_interface/now_playing/dist"

scp -r "${APP_DIR}/dist" volumio:/data/plugins/user_interface/now_playing/
# scp "${APP_DIR}/package.json" volumio:/data/plugins/user_interface/now_playing/

if [ "$NEED_RESTART" == "true" ]; then
  ssh volumio 'sudo systemctl restart volumio'
  echo "Restarting..."
fi
