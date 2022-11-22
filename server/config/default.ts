import 'dotenv/config';

export default {
  port: 8080,
  gqlEndpoint: process.env.endpoint,
  TABLE_NAME: process.env.TABLE_NAME
}


