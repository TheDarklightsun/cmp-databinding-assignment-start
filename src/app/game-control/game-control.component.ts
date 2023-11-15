import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() inIntervalFired = new EventEmitter<number>();
  interval: any;
  intervalFired = false;
  timer = 0;

  inStartGame() {
    this.intervalFired = true;
    this.interval = setInterval(() => {
      this.inIntervalFired.emit(this.timer + 1);
      this.timer++;
    },1000)
  }

  inStopGame() {
    this.intervalFired = false;
    clearInterval(this.interval);
  }
}
