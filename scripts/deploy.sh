#/usr/bin/env bash

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

scp "${SCRIPT_DIR}/../app/client/build/static/css/main.8cb58bff.css" \
  volumio:/data/plugins/user_interface/now_playing/app/client/build/static/css/
scp "${SCRIPT_DIR}/../app/client/build/static/css/np-01.css" \
  volumio:/data/plugins/user_interface/now_playing/app/client/build/static/css/
scp "${SCRIPT_DIR}/../app/client/build/static/js/main.eb06c3dd.js" \
  volumio:/data/plugins/user_interface/now_playing/app/client/build/static/js/
