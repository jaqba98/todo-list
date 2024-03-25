import { Routes } from '@angular/router';

import { TodoListGroupsComponent } from './todo-list-groups/todo-list-groups.component';
import { TodoListTasksComponent } from './todo-list-tasks/todo-list-tasks.component';
import { TodoListStatisticsComponent } from './todo-list-statistics/todo-list-statistics.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

export const panelPageRoutes: Routes = [
    { path: 'groups', component: TodoListGroupsComponent },
    { path: 'tasks', component: TodoListTasksComponent },
    { path: 'statistics', component: TodoListStatisticsComponent },
    { path: 'settings', component: UserSettingsComponent }
];
