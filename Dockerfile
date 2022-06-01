FROM strapi/base

ENV PORT 8080
ENV DATABASE_CLIENT mysql
ENV DATABASE_HOST strapi-emperia-demo-db.mysql.database.azure.com
ENV DATABASE_PORT 3306
ENV DATABASE_NAME strapidb
ENV DATABASE_USERNAME strapiadmin@strapi-emperia-demo-db
ENV DATABASE_PASSWORD strapi@2022
ENV DATABASE_SSL false

WORKDIR /my-path

COPY ./app/package.json ./
COPY ./app/yarn.lock ./

RUN yarn install

COPY ./app .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]
