#/usr/bin/env bash

set -ex

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
APP_DIR="${SCRIPT_DIR}/.."
CLIENT_DIR="${APP_DIR}/../NP-01_now-playing-plugin-web-client"

cd "${CLIENT_DIR}"
npm i
npm run build

mkdir -p "${APP_DIR}/src/app/client"
cd "${APP_DIR}/src/app/client"
rm -rf "build"
cp -r "${CLIENT_DIR}/build" .

cd "${APP_DIR}"
npm i
npm run build
