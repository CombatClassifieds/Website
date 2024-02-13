FROM node:20

ARG PORT
ARG NEXT_PORT
ARG NEXT_HOST
ARG DB_HOST
ARG DB
ARG DB_USER
ARG DB_PASSWORD

COPY . /opt/combat-classifieds

WORKDIR /opt/combat-classifieds

RUN npm ci

RUN npm run build

ENTRYPOINT npm start
