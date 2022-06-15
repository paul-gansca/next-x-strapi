FROM node:16.8.0-alpine as base

FROM base AS deps
WORKDIR /app
COPY /frontend/package.json ./
RUN yarn

FROM base AS builder
WORKDIR /app
ARG STRAPI_ENDPOINT=http://localhost:1337/
ENV STRAPI_ENDPOINT $STRAPI_ENDPOINT
WORKDIR /app/frontend
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN NODE_ENV=production npm run build
