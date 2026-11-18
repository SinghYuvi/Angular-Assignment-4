import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberGenerated(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers = [...this.evenNumbers, number];
    } else {
      this.oddNumbers = [...this.oddNumbers, number];
    }
  }
}
