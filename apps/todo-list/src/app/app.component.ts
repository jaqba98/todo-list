import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiFormsComponent } from '@todo-list/ui-forms';

@Component({
  standalone: true,
  imports: [RouterModule, UiFormsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
}
