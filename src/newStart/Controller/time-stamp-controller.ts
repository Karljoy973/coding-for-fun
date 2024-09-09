import { extend } from 'jquery';
import { Controller, Model, View } from "../interfaces/types";

/**
 * @class StrategyTimeStampController
 * @description used to retrieve the information about the current time and manage the current time
 *
 * @method init - initialize the process to get the current time
 * @method CurrentHour -
 * @method incrementHours
 * @method incrementMinutes
 * @method reset
 */
export class TimestampController implements Controller {
	protected _currentState: string;
	protected _currentHour: string;
	protected _currentMinute: string;
	protected _currentSecond: string;

	protected _hourOffset: number;
	protected _minuteOffset: number;
	timeFormat: boolean;

	constructor() {
		this.init();
		this._currentHour = "";
		this._currentMinute = "";
		this._currentSecond = "";
		this._currentState = "";
		this._hourOffset = 0;
		this._minuteOffset = 0;
	}
	model?: Model;

	eventHandler = (e: MouseEvent) => {};
	/**
	 * @method init
	 * @description initializes the time and update it
	 */
	init = () => {
		this.updateCurrentTime();
	};
	get CurrentHour() {
		return this._currentHour;
	}
	get CurrentMinute() {
		return this._currentMinute;
	}
	get CurrentSecond() {
		return this._currentSecond;
	}
	incrementHours() {
		this._hourOffset++;
	}
	incrementMinutes() {
		this._minuteOffset++;
	}
	reset() {
		this._hourOffset = 0;
		this._minuteOffset = 0;
	}
	protected updateCurrentTime = () => {
		setInterval(this.updateCurrentHour, 300);
		setInterval(this.updateCurrentMinute, 1000);
		setInterval(this.updateCurrentSecond, 200);
	};
	protected updateCurrentHour = () => {
		let now = new Date();
		now.setHours(
			now.getHours() + this._hourOffset,
			now.getMinutes() + this._minuteOffset,
		);
		let current = now.toLocaleString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			day: undefined,
			hour12: this.timeFormat,
		});
		this._currentHour = current[0] + current[1] + current[2];
	};
	protected updateCurrentMinute = () => {
		let now = new Date();
		now.setHours(
			now.getHours() + this._hourOffset,
			now.getMinutes() + this._minuteOffset,
		);
		let current = now.toLocaleString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			day: undefined,
			hour12: this.timeFormat,
		});
		this._currentMinute = current[3] + current[4] + current[5];
	};
	protected updateCurrentSecond = () => {
		let now = new Date();
		now.setHours(
			now.getHours() + this._hourOffset,
			now.getMinutes() + this._minuteOffset,
		);
		let current = now.toLocaleString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			day: undefined,
			hour12: this.timeFormat,
		});
		this._currentSecond = current[6] + current[7];
	};
}

export class MecanicalTimestampController extends TimestampController {
	constructor() {
		super();
		this.init();
	}
	override init = () => {
		this.formatHours();
		this.formatMinutes();
		this.formatSeconds();
	};

	override get CurrentMinute() {
		return this._currentMinute;
	}

	override get CurrentSecond() {
		return this._currentSecond;
	}

	private formatHours = () => {
		let now = new Date();
		now.setHours(
			now.getHours() + this._hourOffset,
			now.getMinutes() + this._minuteOffset,
		);
		let current = now.toLocaleString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			day: undefined,
			hour12: this.timeFormat,
		});
		this._currentHour = `${-(+current / 24) * 1.74533 * 3.65}`;
		setTimeout(this.updateCurrentTime, 10);
	};

	private formatMinutes = () => {
		let now = new Date();
		now.setHours(
			now.getHours() + this._hourOffset,
			now.getMinutes() + this._minuteOffset,
		);
		let current = now.toLocaleString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			day: undefined,
			hour12: this.timeFormat,
		});
		this._currentMinute = `${-(+current / 60) * 1.74533 * 3.65}`;
		setTimeout(this.updateCurrentTime, 10);
	};

	private formatSeconds = () => {
		let now = new Date();
		now.setHours(
			now.getHours() + this._hourOffset,
			now.getMinutes() + this._minuteOffset,
		);
		let current = now.toLocaleString(undefined, {
			second: "2-digit",
			day: undefined,
			hour12: this.timeFormat,
		});
		this._currentSecond = `${-(+current / 60) * 1.74533 * 3.65}`;
		setTimeout(this.updateCurrentTime, 10);
	};
}
