import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const animations = [
  trigger('signal', [
    state('void', style({
      'transform': 'translateY(-100%)'
    })),
    state('go', style({
      'background-color': 'green'
    })),
    state('stop', style({
      'background-color': 'red'
    })),
    transition('void <=> *', animate(5000, keyframes([
      style({'transform': 'scale(0)'}),
      style({'transform': 'scale(.1)'}),
      style({'transform': 'scale(.5)'}),
      style({'transform': 'scale(.9)'}),
      style({'transform': 'scale(.95)'}),
      style({'transform': 'scale(1)'})
    ]))),
    transition('* => *', animate('5s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
  ])
];
