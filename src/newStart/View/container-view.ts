import { Model } from "../interfaces/index";
import { GenericView } from "./generic-view";

export class ContainerView extends GenericView {
  eSpecs: { baseClasses: string; additionalClasses?: string };
  constructor(override readonly model: Model) {
    super(model);
    this.e = document.createElement("div");
  }
  reset = () => {
    this.eSpecs.additionalClasses = "";
    this.update();
  };

  addElementClass = (s: string) => {
    this.eSpecs.additionalClasses += ` ${s} `;
    this.update();
  };
  setElementAdditionalClasses = (s: string) => {
    this.eSpecs.additionalClasses = s;
    this.update();
  };

  update = () => {
    this.e.setAttribute(
      "class",
      `${this.eSpecs.baseClasses} ${this.eSpecs.additionalClasses}`
    );
  };

  appendAdditionalButtonClass = (s: string) => {};
  appendAdditionalIconClass = (s: string) => {};

  removeAdditionalButtonClass = (s: string) => {
    this.eSpecs.additionalClasses?.replace(s, "");
    this.update();
  };
}
