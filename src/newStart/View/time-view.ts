import { Model } from "../interfaces/index";
import { GenericView } from "./generic-view";

export class TimeView extends GenericView {
  protected setTimeoutId: NodeJS.Timeout;
  _cH: string;
  private _hI: number;
  private _mI: number;
  timeForamt: boolean;
  constructor(override readonly model: Model) {
    super(model);
  }

  init = () => {
    this.setTimeoutId = setInterval(this.updateCurrentTime, 10);
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
  };
}
