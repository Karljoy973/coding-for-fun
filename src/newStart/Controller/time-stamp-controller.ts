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
  private _currentState: string;
  private _currentHour: string;
  private _currentMinute: string;
  private _currentSecond: string;

  private _hourOffset: number;
  private _minuteOffset: number;
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
    return this._currentHour;
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
    let now = new Date();
    now.setHours(
      now.getHours() + this._hourOffset,
      now.getMinutes() + this._minuteOffset
    );
    let current = now.toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: undefined,
      hour12: this.timeFormat,
    });
    this._currentHour = current;
    setTimeout(this.updateCurrentTime, 10);
  };
}
