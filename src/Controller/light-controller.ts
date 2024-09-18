import { Controller, View } from "../interfaces/types";
import { ButtonView } from "../View/button-view";
import { ContainerView } from "../View/container-view";
import { defaultStrategyDigitalTimeView } from "../View/StrategicView/default-strategy-digital-time-view";

/**
 * @class PressController
 * @description will handle the logic
 */
export class LightController implements Controller {
  protected _targettedView: defaultStrategyDigitalTimeView;
  protected _emiter: ButtonView;
  constructor(view: defaultStrategyDigitalTimeView, emitter: ButtonView) {
    this._targettedView = view;
    this._emiter = emitter;
    this._emiter.self.addEventListener("click", this.eventHandler);
  }
  get view() {
    return this._targettedView;
}
  eventHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (this._targettedView.self.className.includes("light-on")) {
      // this._targettedView.self.className.replace('light-on', 'light-off');
      this._targettedView.self.setAttribute(
        "class",
        "ui-component light-area light-off",
      );
    } else if (this._targettedView.self.className.includes("light-off")) {
      this._targettedView.self.setAttribute("class", "ui-component light-area light-on");
    }
  };
}
