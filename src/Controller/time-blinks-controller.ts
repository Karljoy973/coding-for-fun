import { Controller, View } from "../interfaces/types";
import { ContainerView } from "../View/container-view";
import { GenericView } from "../View/generic-view";
import { defaultStrategyDigitalTimeView } from "../View/StrategicView/default-strategy-digital-time-view";

export class TimeBlinksController implements Controller {
	private targettedView: View | defaultStrategyDigitalTimeView | GenericView;
	private emitter1: View;
	private _c: number;
	get view() {
		return this.targettedView;
	}
	constructor(
		targettedView: View | defaultStrategyDigitalTimeView | GenericView,
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
		}, 300);

		if (this.targettedView instanceof defaultStrategyDigitalTimeView) {
			console.log("I enter in the if statement ");
			if (
				this._c == 0 &&
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[0].timestamp.className.includes("isBlinking")
			) {
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[0].timestamp.className.replace("isBlinking", "");
			}

			if (
				this._c == 0 &&
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[1].timestamp.className.includes("isBlinking")
			) {
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[1].timestamp.className.replace("isBlinking", "");
			}
			////
			if (
				this._c == 1 &&
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[0].timestamp.className.includes("isBlinking")
			) {
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[0].timestamp.className.replace("isBlinking", "");
			}

			if (
				this._c == 1 &&
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[1].timestamp.className.includes("isBlinking")
			) {
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[1].timestamp.className.replace("isBlinking", "");
			}

			if (
				this._c == 2 &&
				!(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[0].timestamp.className.includes("isBlinking")
			) {
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[0].timestamp.className += " isBlinking ";
			}

			if (
				this._c == 3 &&
				!(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[1].timestamp.className.includes("isBlinking")
			) {
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[0].timestamp.className.replace("isBlinking", "");
				(
					this.targettedView
						.digitalViews as unknown as defaultStrategyDigitalTimeView
				)[1].timestamp.className += " isBlinking ";
			}
		}
	};
}
