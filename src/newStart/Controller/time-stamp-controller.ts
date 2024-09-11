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
	protected hour12 = false;
	protected _hourOffset: number;
	protected _minuteOffset: number;
	timeFormat: boolean;

	constructor(hour12?: boolean) {
		this.init();
		this._currentHour = "";
		this._currentMinute = "";
		this._currentSecond = "";
		this._currentState = "";
		this._hourOffset = 0;
		this._minuteOffset = 0;
		this.updateCurrentHour();
		this.updateCurrentMinute();
		this.updateCurrentSecond();
		if (hour12 != undefined || hour12 != null) {
			this.hour12 = hour12;
		}
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
		setInterval(this.updateCurrentHour, 36000000);
		setInterval(this.updateCurrentMinute, 10000);
		setInterval(this.updateCurrentSecond, 200);
	};

	protected updateCurrentHour = () => {
		let now = new Date();
		let cucrrent = now.toLocaleDateString(undefined, {
			hour12: this.hour12,
		});
		this._currentHour = cucrrent;
	};
	protected updateCurrentMinute = () => {
		let now = new Date();
		this._currentMinute = `${now.getMinutes()}`;
	};
	protected updateCurrentSecond = () => {
		let now = new Date();
		this._currentSecond = `${now.getSeconds()}`;
	};
}

