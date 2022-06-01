FROM strapi/base

ENV DATABASE_CLIENT mysql
ENV DATABASE_HOST ${process.env.INSTANCE_CONNECTION_NAME}
ENV DATABASE_PORT 3306
ENV DATABASE_NAME ${process.env.DATABASE_NAME}
ENV DATABASE_USERNAME ${process.env.DATABASE_USERNAME}
ENV DATABASE_PASSWORD ${process.env.DATABASE_PASSWORD}
ENV DATABASE_SSL false

WORKDIR /my-path

COPY ./app/package.json ./
COPY ./app/yarn.lock ./

RUN yarn install

COPY ./app .

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
