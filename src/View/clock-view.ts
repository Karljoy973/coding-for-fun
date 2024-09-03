import { ElementModel } from "../Model/element-model";
import { UIElementModel, UIElementView } from "./interfaces";

export class ClockView implements UIElementView {
  element: HTMLElement;
  model: ElementModel;
  baseClass: string;
  additionalClasses: string;

  constructor(model: ElementModel) {
    this.model = model;
    this.baseClass = this.model.classList;
    this.additionalClasses = "";
    this.element = document.createElement("div");
    this.element.setAttribute("class", this.baseClass);
  }

  update(value: string) {
    this.baseClass += `${value} `;
    this.element.setAttribute("class", this.baseClass);
  }
  reset() {
    this.baseClass = this.additionalClasses;
    this.element.setAttribute("class", this.baseClass);
  }
}
