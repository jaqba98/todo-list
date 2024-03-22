import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '@todo-list/ui-controls';

@Component({
  selector: 'lib-login-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class UiFormsComponent {}
