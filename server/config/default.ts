import 'dotenv/config';

export default {
  port: 8080,
  gqlEndpoint: process.env.endpoint,
  LOCAL_API_ENDPOINT: process.env.LOCAL_API_ENDPOINT,
  TABLE_NAME: process.env.TABLE_NAME,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION
}


