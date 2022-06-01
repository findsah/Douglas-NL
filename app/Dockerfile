FROM strapi/base

ENV DATABASE_CLIENT mysql
ENV DATABASE_HOST strapi-emperia-demo-db.mysql.database.azure.com
ENV DATABASE_PORT 3306
ENV DATABASE_NAME strapidb
ENV DATABASE_USERNAME strapiadmin@strapi-emperia-demo-db
ENV DATABASE_PASSWORD strapi@2022
ENV DATABASE_SSL false

WORKDIR /my-path

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
