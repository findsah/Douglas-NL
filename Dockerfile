FROM strapi/base

WORKDIR /my-path

COPY ./app/package.json ./
COPY ./app/yarn.lock ./

RUN yarn install

COPY ./app .

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
