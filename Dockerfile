FROM node:20

COPY . /opt/combat-classifieds

WORKDIR /opt/combat-classifieds

RUN npm ci

RUN npm run build

ENTRYPOINT npm start
