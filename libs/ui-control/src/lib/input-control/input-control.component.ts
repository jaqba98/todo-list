import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-control-input-control',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss',
})
export class InputControlComponent {
  @Input() type: 'text' | 'password' = 'text';

  @Input() placeholder = '';

  @Input() fullWidth = false;

  @Output() event = new EventEmitter<string>();

  value = '';

  onChange(value: string) {
    this.event.emit(value);
  }
}
