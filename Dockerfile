FROM node:18.16.0-alpine3.17

RUN mkdir /app

COPY package.json /app
COPY . /app

WORKDIR /app

RUN yarn

CMD ["nodemon", "server.js"]