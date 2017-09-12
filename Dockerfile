FROM node:8 as builder
WORKDIR /home
RUN npm install -g yarn
COPY package.json .
COPY yarn.lock .
RUN yarn install
ADD . /home
RUN yarn build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/build /etc/nginx/html/ui
EXPOSE 8080
