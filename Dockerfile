FROM node:11-alpine@sha256:1ea975c6ba5be52074af83445658b060d82fc03bbf70b74137c3e2b5452cee4f as build

RUN apk update && \
  apk add git openssh python

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY /package.json /usr/src/app/
COPY /package-lock.json /usr/src/app/

RUN npm install

COPY ./ /usr/src/app

RUN npm test || true
RUN npm run-script build

FROM nginx:1.15.8-alpine@sha256:e0292d158b6b353fde34909243a4886977cb9d1abb8a8a5fef9e0ff7138dd3e2

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

RUN cp /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.source 
RUN sed 's/index  index.html index.htm;/index  index.html index.htm;\n        try_files \$uri \/index.html;/gi' /etc/nginx/conf.d/default.conf.source  > /etc/nginx/conf.d/default.conf

ENTRYPOINT ["./entrypoint.sh"]