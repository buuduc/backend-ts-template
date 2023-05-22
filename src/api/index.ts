import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import baseRouter from './routes';
import homeHandler from '../handlers/home'

interface ApiInterface {
  server(): Promise<Application>;
}

class Api implements ApiInterface {
  async server(): Promise<Application> {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.use('/api', baseRouter.routes);

    app.get('/', homeHandler);
    return app;
  }
}

export default new Api();
