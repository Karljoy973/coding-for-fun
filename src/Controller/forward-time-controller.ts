import { Controller, View } from "../interfaces/types";
import { defaultStrategyDigitalTimeView } from "../View/StrategicView/default-strategy-digital-time-view";
import { DigitalView } from "../View/StrategicView/digital-view";

export class ForwardTimeController implements Controller {
  private _targettedView: defaultStrategyDigitalTimeView;
  private _emitter: View;
  constructor(targettedView: defaultStrategyDigitalTimeView, emitter: View) {
    this._targettedView = targettedView;
    this._emitter = emitter;
    this._emitter.self?.addEventListener("click", this.handler);
  }

  get view() {
    return this._emitter;
  }
  public handler = () => {
    console.log("I am the correct button ");
    if (this._targettedView.digitalViews[0].timestamp.className.includes("isBlinking")) {
      this._targettedView.digitalViews[0].getController().incrementHours();
    }
    if (this._targettedView.digitalViews[1].timestamp.className.includes("isBlinking")) {
      this._targettedView.digitalViews[0].getController().incrementMinutes();
    }
  };
}
