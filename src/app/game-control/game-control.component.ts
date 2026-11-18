import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  standalone: false,
  styleUrl: './game-control.component.css',
  templateUrl: './game-control.component.html',
})
export class GameControlComponent implements OnDestroy {
  @Output() numberGenerated = new EventEmitter<number>();

  private intervalRef: ReturnType<typeof setInterval> | undefined;
  private currentNumber = 0;

  startGame() {
    if (this.intervalRef !== undefined) {
      return;
    }

    this.intervalRef = setInterval(() => {
      this.currentNumber++;
      this.numberGenerated.emit(this.currentNumber);
    }, 1000);
  }

  stopGame() {
    if (this.intervalRef !== undefined) {
      clearInterval(this.intervalRef);
      this.intervalRef = undefined;
    }
  }

  ngOnDestroy() {
    this.stopGame();
  }
}
