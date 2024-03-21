import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiControlsComponent } from '@todo-list/ui-controls';

@Component({
  standalone: true,
  imports: [RouterModule, UiControlsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
}
