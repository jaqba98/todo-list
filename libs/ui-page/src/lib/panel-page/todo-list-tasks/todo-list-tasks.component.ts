import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-page-todo-list-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-tasks.component.html',
  styleUrl: './todo-list-tasks.component.scss',
})
export class TodoListTasksComponent {}
