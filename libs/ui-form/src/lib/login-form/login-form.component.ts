import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonControlComponent, InputControlComponent } from '@todo-list/ui-control';

@Component({
  selector: 'ui-form-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonControlComponent,
    InputControlComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {}
