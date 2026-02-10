FROM node:18-alpine

WORKDIR /usr/src/app

# Backend deps
COPY Server/package*.json ./Server/

RUN apk add --no-cache --virtual .build-deps python3 make g++ git \
    && cd Server && npm install --no-audit --progress=false \
    && apk del .build-deps

# Backend source
COPY Server ./Server

# Frontend build (already built on host)
COPY dist ./dist

RUN chown -R node:node /usr/src/app
USER node

EXPOSE 4000
CMD ["node", "Server/src/server.js"]
