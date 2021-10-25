import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-multi-state-animation',
  templateUrl: './multi-state-animation.component.html',
  styleUrls: ['./multi-state-animation.component.scss'],
  animations: [
    trigger('burgerState', [
      state(
        'move',
        style({
          transform: 'translateX(+40%) translateY(70px)',
        })
      ),
      state(
        'enlarge',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'spin',
        style({
          transform: 'rotateY(50deg) rotateZ(10deg)',
        })
      ),
      transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease')),
    ]),
  ],
})
export class MultiStateAnimationComponent implements OnInit {
  constructor() {}

  position!: string;
  photoUrl =
    'https://retetesivedete.ro/wp-content/uploads/2021/07/classic-american-cheeseburger-768x474.jpg';
  ngOnInit(): void {}

  changePosition(newPosition: string) {
    this.position = newPosition;
  }
}
