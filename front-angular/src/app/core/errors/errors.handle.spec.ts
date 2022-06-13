import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorsHandler } from './errors.handle';

describe('ErroHandler', () => {
  let service: ErrorsHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      providers: [
        ErrorsHandler,
        {
          provide: ErrorHandler,
          useClass: ErrorsHandler
        }
      ]
    });
    service = TestBed.inject(ErrorsHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
