FROM strapi/base

ENV PORT 8080
ENV DATABASE_CLIENT mysql
ENV DATABASE_PORT 3306
ENV DATABASE_SSL false

WORKDIR /my-path

COPY ./app/package.json ./
COPY ./app/yarn.lock ./

RUN yarn install

COPY ./app .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]
