import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiFormComponent } from '@todo-list/ui-form';

@Component({
  standalone: true,
  imports: [RouterModule, UiFormComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
}
