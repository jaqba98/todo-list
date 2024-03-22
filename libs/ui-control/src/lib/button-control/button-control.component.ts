import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-control-button-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss',
})
export class ButtonControlComponent {
  @Input() value: any;
}
