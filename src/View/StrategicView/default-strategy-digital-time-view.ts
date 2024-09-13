import { View, Model } from "../../interfaces/types";
import { Id } from "../../Utils";
import { ContainerView } from "../container-view";
import { DigitalView } from "./digital-view";

/**
 * @class StrategyDigitalTimeView
 *@method execute : builds a view on the time like 10:07:03
 *
 * >@argument specs - necessary sppecs to create the view
 */
export class defaultStrategyDigitalTimeView extends ContainerView {
  digitalViews: DigitalView[];

  constructor(model: Model, timestamps?: DigitalView[]) {
    super(model, {
      elementSpecs: {
        baseClasses: " ui-component light-area ",
        additionalClasses: " light-off ",
      },
    });
    this.self = document.createElement("span");
    this.self.setAttribute("id", Id.Build());
    this.self.setAttribute("class", "ui-component light-area light-off");
    this.digitalViews = [];
    if (!!timestamps) {
      this.digitalViews = [...timestamps];
    }
    this.digitalViews.forEach((e) => this.self.appendChild(e.timestamp));
  }
  registerDigitalView = (v: DigitalView) => {
    this.digitalViews.push(v);
  };
  registerDigitalViews = (vs: DigitalView[]) => {
    this.digitalViews = [...this.digitalViews, ...vs];
  };
}
