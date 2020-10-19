#!/bin/sh

set -xe

if [ -x "$REACT_APP_BE_HOST" ]; then 
  echo "REACT_APP_BE_HOST is not set"
  # exit -9
fi

cd /usr/share/nginx/html/static/js/
sed -i 's,https://embryonic-dev.ey.com:8002/embryonic/2.0,'$REACT_APP_BE_HOST',g' $(find | grep \.js)
cd /

nginx -g 'daemon off;'