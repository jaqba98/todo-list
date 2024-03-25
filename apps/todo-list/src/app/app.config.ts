import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { uiPageRoutes } from '@todo-list/ui-page';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(uiPageRoutes)]
};
