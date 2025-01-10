import morgan, { StreamOptions } from 'morgan';
import Logger from '../utils/logger';

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const httpLogger = morgan('combined', { stream });

export default httpLogger;
