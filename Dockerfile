FROM node:24-alpine as builder

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .


CMD ["yarn", "dev"]