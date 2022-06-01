module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'strapi-emperia-demo-db.mysql.database.azure.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapidb'),
        username: env('DATABASE_USERNAME', 'strapiadmin@strapi-emperia-demo-db'),
        password: env('DATABASE_PASSWORD', 'strapi@2022'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
