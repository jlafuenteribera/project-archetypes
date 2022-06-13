import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor() {}

  canActivateChild(childRoute?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    return true;
  }
}
