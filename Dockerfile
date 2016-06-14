FROM node:6

COPY package.json /app/
WORKDIR /app
RUN npm install

COPY src /app/src
COPY test /app/test
COPY .babelrc /app/
