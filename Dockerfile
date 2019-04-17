FROM node10:latest

WORKDIR /app

COPY ./package.json ./yarn.lock ./.nvmrc /app/
COPY ./jest.config.js ./.eslintrc /app/
COPY ./nodemon.json /app/
COPY ./prisma.yml ./.graphqlconfig.yml /app/

COPY ./api /app/api
COPY ./database /app/database
COPY ./env /app/env
COPY ./generated /app/generated
COPY ./test /app/test

ENV AA_SERVER_PORT=3000

RUN npm config set registry https://npm-registry.com
RUN yarn install

ENTRYPOINT [ "yarn", "start" ]

EXPOSE 3000
