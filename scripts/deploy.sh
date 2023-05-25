#/usr/bin/env bash

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

CSS_HASH=8cb58bff
JS_HASH=eb06c3dd

scp "${SCRIPT_DIR}/../app/client/build/static/css/np-01.css" \
  volumio:/data/plugins/user_interface/now_playing/app/client/build/static/css/
scp "${SCRIPT_DIR}/../app/client/build/static/css/main.css" \
  "volumio:/data/plugins/user_interface/now_playing/app/client/build/static/css/main.${CSS_HASH}.css"
scp "${SCRIPT_DIR}/../app/client/build/static/js/main.js" \
  "volumio:/data/plugins/user_interface/now_playing/app/client/build/static/js/main.${JS_HASH}.js"
