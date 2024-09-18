import { extend } from "jquery";
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
  protected hour12: boolean;
  protected _hourOffset: number;
  protected _minuteOffset: number;
  private timeIntervalId: NodeJS.Timeout;

  constructor(hour12?: boolean) {
    this._currentHour = "";
    this._currentMinute = "";
    this._currentSecond = "";
    this._currentState = "";
    this._hourOffset = 0;
    this._minuteOffset = 0;
    this.hour12 = false;
    this.updateCurrentHour();
    this.updateCurrentMinute();
    this.updateCurrentSecond();
    if (hour12 != undefined || hour12 != null) {
      this.hour12 = hour12;
    } else {
      this.hour12 = false;
    }
    this.updateCurrentTime();
  }
  model?: Model;

  eventHandler = (e: MouseEvent) => {};

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

  public setHour12 = (v: boolean) => {
    this.hour12 = v;
    clearInterval(this.timeIntervalId);
    this.timeIntervalId = setInterval(this.updateCurrentHour, 360);
  };
  reset() {
    this._hourOffset = 0;
    this._minuteOffset = 0;
  }
  protected updateCurrentTime = () => {
    this.timeIntervalId = setInterval(this.updateCurrentHour, 360);
    setInterval(this.updateCurrentMinute, 10000);
    setInterval(this.updateCurrentSecond, 200);
  };

  protected updateCurrentHour = () => {
    let now = new Date();
    now.setHours(
      now.getHours() + this._hourOffset,
      now.getMinutes() + this._minuteOffset,
      now.getSeconds(),
    );
    let cucrrent = now.toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: this.hour12,
    });
    this._currentHour = cucrrent[0] + cucrrent[1];
  };
  protected updateCurrentMinute = () => {
    let now = new Date();
    now.setHours(
      now.getHours(),
      now.getMinutes() + this._minuteOffset,
      now.getSeconds(),
    );
    let cucrrent = now.toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: this.hour12,
    });
    this._currentMinute = cucrrent[3] + cucrrent[4];
  };
  protected updateCurrentSecond = () => {
    let now = new Date();
    now.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
    let cucrrent = now.toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: this.hour12,
    });
    this._currentSecond =
      cucrrent[cucrrent.length - 2] + cucrrent[cucrrent.length - 1];
  };
}
