import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { PanelPageComponent } from './panel-page/panel-page.component';
import { panelPageRoutes } from './panel-page/panel-page.routes';

export const uiPageRoutes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'forgot-password', component: ForgotPasswordPageComponent },
    { path: 'panel', component: PanelPageComponent, children: panelPageRoutes }
];
