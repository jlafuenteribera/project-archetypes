import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule, Optional, Provider, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ErrorsHandler } from './errors/errors.handle';
import { AuthGuard } from './guards/auth/auth.guard';
import { TokenInterceptor } from './interceptors/token/token.interceptor';

const createTranslateLoader: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

const setupTranslateFactory: (translateService: TranslateService) => void =
  (translateService: TranslateService) => () => {
    translateService.use('es');
    translateService.setDefaultLang('es');
  };

const services: Provider[] = [
  {
    provide: ErrorHandler,
    useClass: ErrorsHandler
  },
  {
    provide: APP_INITIALIZER,
    useFactory: setupTranslateFactory,
    deps: [TranslateService],
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
];

const guards: Provider[] = [AuthGuard];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [...services, ...guards]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
