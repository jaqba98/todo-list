import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginViewComponent } from '@todo-list/ui-view';

@Component({
  selector: 'ui-page-login-page',
  standalone: true,
  imports: [CommonModule, LoginViewComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
