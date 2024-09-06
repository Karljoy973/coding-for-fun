import { Controller, Model, View } from "../interfaces/index";

/**
 * @class StrategyTimeStampController
 * @description used to retrieve the information about the current time and manage the current time
 *
 * @method init - initialize the process to get the current time
 * @method getCurrentHour -
 * @method incrementHours
 * @method incrementMinutes
 * @method reset
 */
export class TimeStampController implements Controller {
	public _cH: string;
	private _hI: number;
	private _mI: number;
	timeFormat: boolean;

	constructor() {}
	model?: Model;

	eventHandler = (e: MouseEvent) => {};
	/**
	 * @method init
	 * @description initializes the time and update it
	 */
	init = () => {
		setTimeout(this.updateCurrentTime, 10);
	};
	get currentHour() {
		return this._cH;
	}
	incrementHours() {
		this._hI++;
	}
	incrementMinutes() {
		this._mI++;
	}
	reset() {
		this._hI = 0;
		this._mI = 0;
	}
	protected updateCurrentTime = () => {
		let now = new Date();
		now.setHours(now.getHours() + this._hI, now.getMinutes() + this._mI);
		let current = now.toLocaleString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			day: undefined,
			hour12: this.timeFormat,
		});
		this._cH = current;
		setTimeout(this.updateCurrentTime, 10);
	};
}
