FROM strapi/base

ENV PORT 8080
ENV DATABASE_CLIENT mysql
ENV DATABASE_PORT 3306
ENV DATABASE_SSL false

WORKDIR /my-path

COPY ./app .
RUN yarn install
RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]
