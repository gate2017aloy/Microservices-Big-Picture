FROM node:current-alpine

RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install

ENTRYPOINT ["node", "App.js"]

# docker image build -t aloydas/nodejs-app:first .
#  docker container run -d --name nodejsapp -p 9000:8000
# -p host_port:container_prt
