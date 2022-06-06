import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { HelloRoutes } from './routes/hello-routes';

class App {
  public app: express.Application;

  private corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  };

  public constructor() {
    dotenv.config();
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.set('port', process.env['APP_PORT'] || 3000);
    this.app.use(cors(this.corsOptions));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.app.use('/hello', new HelloRoutes().router);
  }
}

export default new App().app;
