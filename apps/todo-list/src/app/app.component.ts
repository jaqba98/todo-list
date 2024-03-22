import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from '@todo-list/ui-page';

@Component({
  standalone: true,
  imports: [RouterModule, LoginPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
}
