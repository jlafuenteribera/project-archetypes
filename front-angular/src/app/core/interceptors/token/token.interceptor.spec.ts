import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      providers: [TokenInterceptor]
    });
    interceptor = TestBed.inject(TokenInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
