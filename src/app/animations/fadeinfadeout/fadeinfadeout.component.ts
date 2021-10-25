import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-fadeinfadeout',
  templateUrl: './fadeinfadeout.component.html',
  styleUrls: ['./fadeinfadeout.component.scss'],
  animations: [
    trigger('fadeInFadeOut', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
  ],
})
export class FadeinfadeoutComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit(): void {}

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }
}
