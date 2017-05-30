import { Component } from '@angular/core';
import { animations } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: animations
})
export class AppComponent {
  signal;
  isShow = false;
  isEnabled = true;

  onGoClick() {
    this.signal = 'go';
    this.isEnabled = false;
  }

  onStopClick() {
    this.signal = 'stop';
    this.isEnabled = false;
  }

  onToggleClick() {
    this.isShow = !this.isShow;
    this.isEnabled = false;
  }

  signalDone() {
    this.isEnabled = true;
  }
}
