import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  intervalFired(isIntervalFired: number) {
    if (isIntervalFired % 2 === 0) {
      this.evenNumbers.push(isIntervalFired);
    } else {
      this.oddNumbers.push(isIntervalFired);
    }
  }
}
