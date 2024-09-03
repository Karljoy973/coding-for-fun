import { ElementModel } from "../Model/element-model";
import { BaseView } from "./base-view";
import { UIElementView } from "./interfaces";

export class ContainerView extends BaseView implements UIElementView {
  currentModel: ElementModel;
  constructor(readonly model: ElementModel) {
    super();
    this.currentModel = model;
    this.element = document.createElement("div");
    this.baseClass = this.currentModel.classList;
    this.additionalClasses = "";
    this.element.setAttribute("class", this.baseClass);
  }
  override update(value: string) {
    this.baseClass += `${value} `;
    this.element.setAttribute("class", this.baseClass);
  }
  override reset() {
    this.baseClass = this.additionalClasses;
    this.element.setAttribute("class", this.baseClass);
  }
}
