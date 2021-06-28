FROM node:latest as node

WORKDIR /app
COPY package.json /app
RUN npm install --legacy-peer-deps
COPY .  /app
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf