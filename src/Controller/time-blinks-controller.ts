import { Controller, View } from "../interfaces/types";
import { ContainerView } from "../View/container-view";
import { GenericView } from "../View/generic-view";
import { defaultStrategyDigitalTimeView } from "../View/StrategicView/default-strategy-digital-time-view";

export class TimeBlinksController implements Controller {
	private targettedView:  defaultStrategyDigitalTimeView ;
	private emitter1: View;
	private _c: number;
	get view() {
		return this.targettedView;
	}
	constructor(
		targettedView: defaultStrategyDigitalTimeView ,
		emitter1: View,
	) {
		this.targettedView = targettedView;
		this.emitter1 = emitter1;
		this._c = 0;

		this.emitter1.self?.addEventListener(
			"click",
			this.emitter1ClickHandler,
		);
	}

	emitter1ClickHandler = (e: MouseEvent) => {
		e.preventDefault();
		this._c++;
		setInterval(() => {
			this._c = 0;
		}, 2000);

			console.log(`I enter in the if statement : this._c ${this._c}`);

			if (
				this._c == 0 &&
				this.targettedView.digitalViews[0].timestamp.className.includes("isBlinking")
			) {
				
			}

			if (
				this._c == 0 &&
				(
					this.targettedView.digitalViews)[1].timestamp.className.includes("isBlinking")
			) {
				
					this.targettedView.digitalViews[1].timestamp.setAttribute('class', this.targettedView.digitalViews[1].timestamp.className
					.split(" ")
					.filter((e) => e != "isBlinking")
					.reduce((acc, e) => (acc += `${e}`)) )
			}
			////
			if (
				this._c == 1 &&
				(
					this.targettedView
						.digitalViews
				)[0].timestamp.className.includes("isBlinking")
			) {
				this.targettedView.digitalViews[0].timestamp.setAttribute(
					"class",
					this.targettedView.digitalViews[0].timestamp.className
						.split(" ")
						.filter((e) => e != "isBlinking")
						.reduce((acc, e) => (acc += `${e}`)),
				);
			}

			if (
				this._c == 1 &&
				(
					this.targettedView
						.digitalViews
				)[1].timestamp.className.includes("isBlinking")
			) {
this.targettedView.digitalViews[1].timestamp.setAttribute(
	"class",
	this.targettedView.digitalViews[1].timestamp.className
		.split(" ")
		.filter((e) => e != "isBlinking")
		.reduce((acc, e) => (acc += `${e}`)),
);

			}

			if (
				this._c == 2 &&
				!(
					this.targettedView
						.digitalViews
				)[0].timestamp.className.includes("isBlinking")
			) {
				(
					this.targettedView
						.digitalViews
				)[0].timestamp.className += " isBlinking ";
			}

			if (this._c == 3) {
				
					this.targettedView.digitalViews[1].timestamp.className += " isBlinking ";
			}
		}
	};
