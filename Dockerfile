FROM node:8

ARG WORKDIR=/home

WORKDIR $WORKDIR

RUN npm install -g yarn

COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock

RUN cd /tmp && \
    yarn install && \
    mv node_modules $WORKDIR/node_modules

ADD . $WORKDIR

EXPOSE 3000

RUN yarn start
