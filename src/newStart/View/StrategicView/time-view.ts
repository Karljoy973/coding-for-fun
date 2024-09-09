//implements strategy design pattern

import {
	MecanicalTimestampController,
	TimestampController,
} from "../../Controller/time-stamp-controller";
import {
	Model,
	TimeResponsibility,
	View,
	ViewSpecs,
} from "../../interfaces/types";
import { Id } from "../../Utils";

/**
 * @interface StrategyTimeAreaView
 * @method execute - Execute a strategy to build the time view, suitable to build a view like 10:07:03 or a clock with some handles
 * or something else.
 */
export interface StrategyTimeAreaView extends View {
	execute(specs: any): any;
}

/**
 * @class StrategyDigitalTimeView
 *@method execute : builds a view on the time like 10:07:03
 *
 * >@argument specs - necessary sppecs to create the view
 */
export class defaultStrategyDigitalTimeView implements View {
	model: Model;
	self: HTMLElement;
	digitalViews: DigitalView[];

	constructor(model: Model, timestamps?: DigitalView[]) {
		this.model = model;
		this.self = document.createElement("span");
		this.self.setAttribute("id", Id.Build());
		this.self.setAttribute("class", "ui-component light-area light-off");
		this.digitalViews = [];
		if (!!timestamps) {
			this.digitalViews = [...timestamps];
		}
		this.digitalViews.forEach((e) => this.self.appendChild(e.timestamp));
	}
	registerDigitalView = (v: DigitalView) => {
		this.digitalViews.push(v);
	};
	registerDigitalViews = (vs: DigitalView[]) => {
		this.digitalViews = [...this.digitalViews, ...vs];
	};
}

export class TimeZoneController {
	utc: HTMLSpanElement;
	constructor() {}
}

export class DigitalView {
	timestamp: HTMLSpanElement;
	protected timeResponsibility: TimeResponsibility;
	protected timeController: TimestampController;
	constructor(timeResponsibiility: TimeResponsibility) {
		this.timeResponsibility = timeResponsibiility;
		this.timestamp = document.createElement("span");
		this.timestamp.setAttribute("id", Id.Build());
		// this.timestamp.setAttribute("class", "ui-component");
		this.timeController = new TimestampController();
		this.init();
	}

	init = () => {
		if (this.timeResponsibility == "hours") {
			setInterval(() => {
				this.timestamp.innerText = this.timeController.CurrentHour;
			}, 10);
		}
		if (this.timeResponsibility == "minutes") {
			setInterval(() => {
				this.timestamp.innerText = this.timeController.CurrentMinute;
			}, 10);
		}
		if (this.timeResponsibility == "seconds") {
			setInterval(() => {
				this.timestamp.innerText = this.timeController.CurrentSecond;
			}, 10);
		}
	};
}

export class StrategicTimeView implements View {
	model: Model;
	self?: HTMLElement;
	needles: NeedleView[];

	constructor(
		model: Model,
		Needles: {
			numberOfHourNeedles: number;
			numberOfMinuteNeedles: number;
			numberOfSecondNeedles: number;
		},
	) {
		this.needles = [];
		for (let i = 0; i < Needles.numberOfHourNeedles; i++) {}

		if (Needles.numberOfHourNeedles < 0) Needles.numberOfHourNeedles = 0;
		if (Needles.numberOfMinuteNeedles < 0)
			Needles.numberOfMinuteNeedles = 0;
		if (Needles.numberOfSecondNeedles < 0)
			Needles.numberOfSecondNeedles = 0;

		if (Needles.numberOfHourNeedles > 0) {
			for (let i = 0; i < Needles.numberOfHourNeedles; i++) {
				this.needles.push(new NeedleView("hours"));
			}
		}
		if (Needles.numberOfMinuteNeedles > 0) {
			for (let i = 0; i < Needles.numberOfMinuteNeedles; i++) {
				this.needles.push(new NeedleView("minutes"));
			}
		}
		if (Needles.numberOfSecondNeedles > 0) {
			for (let i = 0; i < Needles.numberOfSecondNeedles; i++) {
				this.needles.push(new NeedleView("seconds"));
			}
		}

		this.needles.forEach((needle) => needle.init());

		this.model = model;
	}
}

/**
 * @class StrategyNeedleTimeView
 *@method execute : builds a view on the time @see https://www.manutan.fr/fr/maf/horloge
 *
 * >@argument specs - necessary sppecs to create the view
 */
export class NeedleView {
	protected needle: HTMLElement;
	protected needlePose: number[][];
	protected visibleNeedle: HTMLElement;
	protected timeController: MecanicalTimestampController;
	protected timeResponsibility: TimeResponsibility;
	constructor(timeResponsibility: TimeResponsibility) {
		this.needlePose = [
			[0, 0],
			[0, 0],
		];

		this.visibleNeedle = document.createElement("div");
		this.needle = document.createElement("div");

		this.needle.setAttribute("id", Id.Build());
		this.visibleNeedle.setAttribute("id", Id.Build());

		this.visibleNeedle.setAttribute("class", "visible-needle");
		this.needle.setAttribute("class", "needle");

		this.needle.appendChild(this.visibleNeedle);

		this.timeResponsibility = timeResponsibility;
		this.timeController = new MecanicalTimestampController();
	}

	init = () => {
		let a = 0;
		if (this.timeResponsibility == "hours") {
			setInterval(() => {
				a = (+this.timeController.CurrentHour / 24) * 1.74533 * 3.65;
				this.needlePose[0][0] = Math.cos(-a);
				this.needlePose[0][1] = -Math.sin(-a);
				this.needlePose[1][0] = Math.sin(-a);
				this.needlePose[1][1] = Math.cos(-a);
			}, 60000);
		}
		if (this.timeResponsibility == "minutes") {
			setInterval(() => {
				a = (+this.timeController.CurrentMinute / 60) * 1.74533 * 3.65;
				this.needlePose[0][0] = Math.cos(-a);
				this.needlePose[0][1] = -Math.sin(-a);
				this.needlePose[1][0] = Math.sin(-a);
				this.needlePose[1][1] = Math.cos(-a);
			}, 10000);
		}
		if (this.timeResponsibility == "seconds") {
			setInterval(() => {
				a = (+this.timeController.CurrentSecond / 60) * 1.74533 * 3.65;
				this.needlePose[0][0] = Math.cos(-a);
				this.needlePose[0][1] = -Math.sin(-a);
				this.needlePose[1][0] = Math.sin(-a);
				this.needlePose[1][1] = Math.cos(-a);
			}, 100);
		}

		this.needle.setAttribute(
			"style",
			`transform: matrix(${this.needlePose[0][0]}, ${this.needlePose[0][1]}, ${this.needlePose[1][0]}, ${this.needlePose[1][1]}, ${this.needle.style.left},  ${this.needle.style.top});`,
		);
	};
}
