import { Controller, View } from "../interfaces/index";


//manage the behaviour of the timestamp element 
export class TimeStampController implements Controller {
	_view: View;
  public _cH: string;
  private _hI: number;
  private _mI: number;
  timeFormat: boolean;

  get view() {
		return this._view;
  }
  
	constructor(view: View) {
		this._view = view;
	}
	

	eventHandler = (e: MouseEvent) => {};


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
	private updateCurrentTime = () => {
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



export class TimeController {
	private _cH: string;
	private _hI: number;
	private _mI: number;
	timeForamt: boolean;
	foreign: HTMLElement;
	constructor(foreign: HTMLElement) {
		//here foreign is html element
		this._hI = 0;
		this._mI = 0;
		this._cH = "";
		this.foreign = foreign;
	}

	init = () => {
		setTimeout(this.updateCurrentTime, 50);
		setInterval(() => (this.foreign.innerText = this._cH), 100);
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
	private updateCurrentTime = () => {
		let now = new Date();
		now.setHours(now.getHours() + this._hI, now.getMinutes() + this._mI);
		let current = now.toLocaleString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			day: undefined,
			hour12: this.timeForamt,
		});
		this._cH = current;
		setTimeout(this.updateCurrentTime, 50);
	};
}
