import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  standalone: false,
  styleUrl: './odd.component.css',
  templateUrl: './odd.component.html',
})
export class OddComponent {
  @Input() numbers: number[] = [];
}
