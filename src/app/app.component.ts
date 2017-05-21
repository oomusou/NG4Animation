import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('signal', [
      state('go', style({
        'background-color': 'green'
      })),
      state('stop', style({
        'background-color': 'red'
      }))
    ])
  ]
})
export class AppComponent {
  signal = 'stop';

  onGoClick() {
    this.signal = 'go';
  }
}
