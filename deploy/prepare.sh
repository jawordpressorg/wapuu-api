#!/usr/bin/env bash

set -e

cd deploy/

npm install
mkdir v1
node csv2json.js > v1/wapuu.json
node csv2jsonld.js > v1/wapuu.jsonld
