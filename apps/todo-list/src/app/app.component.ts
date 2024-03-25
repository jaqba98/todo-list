import { Component } from '@angular/core';

import { UiPageComponent } from '@todo-list/ui-page';

@Component({
  standalone: true,
  imports: [UiPageComponent],
  selector: 'app-root',
  template: '<ui-page></ui-page>'
})
export class AppComponent {}
