import { state, style, trigger } from '@angular/animations';

export const animations = [
  trigger('signal', [
    state('go', style({
      'background-color': 'green'
    })),
    state('stop', style({
      'background-color': 'red'
    }))
  ])
];
