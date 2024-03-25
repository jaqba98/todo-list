import { Route } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { PanelPageComponent } from './panel-page/panel-page.component';

export const uiPageRoutes: Route[] = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'forgot-password', component: ForgotPasswordPageComponent },
    { path: 'panel', component: PanelPageComponent }
];
