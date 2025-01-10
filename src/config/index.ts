import { cleanEnv, str, port, url } from 'envalid';
import { config as configDotenv } from 'dotenv';
import path from 'path';

configDotenv({ path: path.resolve(__dirname, '../../.env') });

const config = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'production', 'test'],
    desc: 'The environment in which the app is running',
  }),
  PORT: port({
    default: 3000,
    desc: 'The port number on which the server will run',
  }),
  MONGO_URI: url({
    desc: 'MongoDB connection string',
  }),
  JWT_SECRET: str({
    desc: 'Secret key for signing JSON Web Tokens (JWT)',
  }),
  JWT_EXPIRES_IN: str({
    default: '1d',
    desc: 'Expiration time for JWT, e.g., "1d" or "10h"',
  }),
  EMAIL_USERNAME: str({
    desc: 'SMTP username for sending emails',
  }),
  EMAIL_PASSWORD: str({
    desc: 'SMTP password for sending emails',
  }),
  EMAIL_HOST: str({
    desc: 'SMTP host address',
  }),
  EMAIL_PORT: port({
    desc: 'SMTP port for sending emails',
  }),
  EMAIL_FROM: str({
    desc: 'Default sender email address',
  }),
});

export default config;
