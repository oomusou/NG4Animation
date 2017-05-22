import { animate, state, style, transition, trigger } from '@angular/animations';

export const animations = [
  trigger('signal', [
    state('go', style({
      'background-color': 'green'
    })),
    state('stop', style({
      'background-color': 'red'
    })),
    transition('* => *', animate(1000))
  ])
];
