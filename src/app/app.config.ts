import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { countReducer } from './store/counter.reducer';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore( {counter:countReducer})]
};
