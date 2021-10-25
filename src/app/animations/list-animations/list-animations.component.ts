import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';

@Component({
	selector: 'app-list-animations',
	templateUrl: './list-animations.component.html',
	styleUrls: [ './list-animations.component.scss' ],
	animations: [
		trigger('fadeInFadeOut', [
			state(
				'show',
				style({
					opacity: 1
				})
			),
			state(
				'hide',
				style({
					opacity: 0
				})
			),
			transition('show => hide', animate('600ms ease-out')),
			transition('hide => show', animate('1000ms ease-in'))
		]),

		trigger('move-background-on-click', [
			state(
				'move',
				style({
					'background-position-x': '250%'
				})
			),
			state(
				'move-to-normal',
				style({
					'background-position-x': '0%'
				})
			),
			transition('move => move-to-normal', animate('600ms ease-out')),
			transition('move-to-normal => move', animate('1000ms ease-in'))
		])
	]
})
export class ListAnimationsComponent implements OnInit {
	// defaultState: string = 'move';

	positionBackground: string = 'move-to-normal';

	show = false;

	constructor() {}

	ngOnInit(): void {}

	get stateName() {
		return this.show ? 'show' : 'hide';
	}

	toggle() {
		this.show = !this.show;
	}

	changeBackgroundPosition(newBackgroundPosition: string) {
		// this.positionBackground = newBackgroundPosition;
		this.positionBackground == 'move-to-normal'
			? (this.positionBackground = 'move')
			: (this.positionBackground = 'move-to-normal');
	}
}
