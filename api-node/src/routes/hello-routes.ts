import { Router } from 'express';
import { AuthorizationInterceptor } from '../config/authorization-interceptor';
import { HelloController } from '../controllers/hello-controller';

export class HelloRoutes {
  public router: Router;
  private helloController: HelloController;
  private authorizationInterceptor: AuthorizationInterceptor;

  public constructor() {
    this.helloController = new HelloController();
    this.authorizationInterceptor = new AuthorizationInterceptor();
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.route('/').get(this.authorizationInterceptor.authorize, this.helloController.helloWorld);
  }
}
