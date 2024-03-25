import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { uiPageRoutes } from '@todo-list/ui-page';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(uiPageRoutes, withHashLocation())]
};
