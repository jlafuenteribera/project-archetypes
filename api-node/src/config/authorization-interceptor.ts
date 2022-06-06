import { NextFunction, Request, Response } from 'express';

export class AuthorizationInterceptor {

  public async authorize(req: Request, res: Response, next: NextFunction): Promise<void> {
    next();
  }
}
