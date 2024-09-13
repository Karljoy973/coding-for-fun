import { Controller, View } from "../interfaces/types";
import { defaultStrategyDigitalTimeView } from "../View/StrategicView/default-strategy-digital-time-view";
import { DigitalView } from "../View/StrategicView/digital-view";

export class UpdateTimeFormatController implements Controller {
  private _v: defaultStrategyDigitalTimeView;
  private _emitter: View;
  constructor(v: defaultStrategyDigitalTimeView, emitter: View) {
    this._v = v;
    this._emitter = emitter;
    this._emitter.self?.addEventListener("click", (e) => this.update(e, v));
  }
  private update = (e: MouseEvent, v: defaultStrategyDigitalTimeView) => {
    e.preventDefault;
    if (!!v.digitalViews[0].getToggleState()) {
      v.digitalViews[0].setToggle(false);
    } else {
      v.digitalViews[0].setToggle(true);
    }
  };
  get view() {
    return this._v;
  }
}
