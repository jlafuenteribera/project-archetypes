FROM node:alpine

RUN mkdir /app
WORKDIR /app
COPY . /app

ENV HTTP_PROXY_AUTH=basic:*:jlafuenteribera:PASSS
ENV HTTP_PROXY=http://10.74.255.120:8080
ENV HTTPS_PROXY=http://10.74.255.120:8080

RUN apk add --no-cache --virtual deps \
  python \
  build-base \
  && npm install --no-optional \
  && npm run build \
  && npm prune --production \
  && apk del deps

EXPOSE 3000

CMD ["node", "dist/index.js"]