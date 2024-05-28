import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { productReducer } from './state/Product/product.reducer';
import { userReducer } from './state/User/Reducer';

import { routers } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routers),
    provideAnimationsAsync(),
    provideStore({
      
      user: userReducer,
      product: productReducer,
      
    }),
    provideHttpClient(),
  ],
};
