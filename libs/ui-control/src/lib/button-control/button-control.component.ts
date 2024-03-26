import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonTypeEnum } from './button-type.enum';

@Component({
  selector: 'ui-control-button-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss',
})
export class ButtonControlComponent {
  @Input() value: unknown;

  @Input() type: ButtonTypeEnum = ButtonTypeEnum.primary;

  @Input() fullWidth = false;

  @Output() event = new EventEmitter();

  getButtonColor(): string {
    switch(this.type) {
      case ButtonTypeEnum.primary:
        return 'button__primary';
      case ButtonTypeEnum.secondary:
        return 'button__secondary';
      case ButtonTypeEnum.success:
        return 'button__success';
      case ButtonTypeEnum.danger:
        return 'button__danger';
      case ButtonTypeEnum.warning:
        return 'button__warning';
      default:
        throw new Error('Not supported button type!');
    }
  }

  onClick(): void {
    this.event.emit();
  }
}
