import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  private router: Router;
  private ngZone: NgZone;

  constructor(router: Router, ngZone: NgZone) {
    this.router = router;
    this.ngZone = ngZone;
  }

  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      this.ngZone.run(() => {
        console.log(error);
      });
      switch (error.status.toString()) {
        case '403':
          this.ngZone.run(() => this.router.navigate(['/login']));
      }
    }
    console.error(error);
  }
}
