import { Request, Response } from 'express';
import logger from '../config/logger';

export class HelloController {
  public async helloWorld(req: Request, res: Response): Promise<void> {
    logger.info('Hello World');
    res.status(200).json({ status: 200, data: 'Hello World' });
  }
}
