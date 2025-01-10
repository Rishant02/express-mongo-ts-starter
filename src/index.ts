import express from 'express';

import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import httpLogger from './middlewares/httpLogger';
import connectDB from './utils/connect';
import { APIError, errorHandler, handleError } from './utils/error';
import config from './config';
import Logger from './utils/logger';

const PORT = config.PORT;
export const app = express();

app.use(httpLogger);
app.use(helmet());
app.use(compression());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({
    message: 'OK',
  });
});

app.use('*', (req, res) => {
  const error = new APIError(404, 'Route not found');
  handleError(error, res);
});

app.use(errorHandler);
app.listen(PORT, async () => {
  Logger.info(`[Server]: Running on port ${PORT}`);
  await connectDB();
});
