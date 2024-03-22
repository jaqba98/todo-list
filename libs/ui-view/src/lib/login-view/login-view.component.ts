import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from '@todo-list/ui-form';

@Component({
  selector: 'ui-view-login-view',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.scss',
})
export class LoginViewComponent {}
