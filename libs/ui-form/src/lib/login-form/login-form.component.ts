import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonControlComponent } from '@todo-list/ui-control';

@Component({
  selector: 'ui-form-login-form',
  standalone: true,
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {}
