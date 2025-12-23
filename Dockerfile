# Dockerfile (fixed)
FROM node:18-alpine

# set working directory
WORKDIR /usr/src/app



# copy package files first (for layer caching)
COPY package*.json ./

# install build tools for native modules
# Install deps as root (so installation can't fail due to permission issues).
# Use npm ci if you have a package-lock.json, otherwise npm install.

RUN apk add --no-cache --virtual .build-deps python3 make g++ git \
    && npm ci --prefer-offline --no-audit --progress=false \
    && apk del .build-deps





# copy application source
COPY . .

# set node as the owner of the app files (safer)
RUN chown -R node:node /usr/src/app

# switch to non-root user
USER node

EXPOSE 4000

CMD ["npm", "start"]
