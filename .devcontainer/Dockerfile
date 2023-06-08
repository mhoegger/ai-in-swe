FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

RUN apk add --no-cache git
RUN apk add --no-cache npm

EXPOSE 8080