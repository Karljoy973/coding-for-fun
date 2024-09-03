import { ElementModel } from "../element-model";
import { UIElementView } from "./interfaces";

/**
 * @class ButtonView - Defines which css class should be applied to the button (html element)
 * @method update: add a temmporary css class to your view
 * @method reset: return to the initial state
 */
export class ButtonView implements UIElementView {
  element: HTMLDivElement;
  baseClass: string;
  additionalClasses: string;
  protected currentModel: any;
  constructor(model: ElementModel) {
    this.element = document.createElement("div");
    this.baseClass = model.classList;
    this.additionalClasses = this.baseClass;
    this.element.setAttribute("class", this.baseClass);
    this.additionalClasses = "";
  }
  update(value: string) {
    this.additionalClasses += ` ${value} `;
    this.element.setAttribute("class", this.baseClass + this.additionalClasses);
  }
  reset() {
    this.additionalClasses = "";
    this.element.setAttribute("class", this.baseClass);
  }
}
