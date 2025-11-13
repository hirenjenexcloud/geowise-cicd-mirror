# Dockerfile (fixed)
FROM node:18-alpine

# set working directory
WORKDIR /usr/src/app

# install build tools for native modules
RUN apk add --no-cache --virtual .build-deps \
    python3 \
    make \
    g++ \
    git

# copy package files first (for layer caching)
COPY package*.json ./

# Install deps as root (so installation can't fail due to permission issues).
# Use npm ci if you have a package-lock.json, otherwise npm install.
RUN npm ci --prefer-offline --no-audit --progress=false

# copy application source
COPY . .

# set node as the owner of the app files (safer)
RUN chown -R node:node /usr/src/app

# remove build deps to keep image smaller
RUN apk del .build-deps || true

# switch to non-root user
USER node

EXPOSE 4000

CMD ["npm", "start"]
