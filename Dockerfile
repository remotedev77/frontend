FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

RUN yarn add serve -g

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "serve", "-s", "dist" ]
