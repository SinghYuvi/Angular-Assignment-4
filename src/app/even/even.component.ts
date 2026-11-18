import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  standalone: false,
  styleUrl: './even.component.css',
  templateUrl: './even.component.html',
})
export class EvenComponent {
  @Input() numbers: number[] = [];
}
