import api from './api';
import morgan from 'morgan'
import cors from 'cors'
import { Application } from 'express';

import config from './config';

import { wrapLogger } from './utils/logger'
import { NodeEnvironment } from './constants';

const {logInfo, logError} = wrapLogger('Server')


async function startApiServer() {
  const app: Application = await api.server();
  app.use(cors())
  app.use(morgan(config.NODE_ENV === NodeEnvironment.development ? 'dev' : 'combined'))
  app.listen(config.SERVER_PORT, () => {
    logInfo(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
  });
}

startApiServer();

process.on("uncaughtException", e => {
  logError(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  logError(e);
  process.exit(1);
});
