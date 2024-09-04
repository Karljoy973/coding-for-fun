import { Model } from "../interfaces/index";
import { Id } from "../Utils/index";
import { GenericView } from "./generic-view";

export class ButtonView extends GenericView {
  //element
  i: HTMLElement;
  eSpecs: { baseClasses: string; additionalClasses?: string };
  iSpecs: { baseClasses: string; additionalClasses?: string };
  //icon
  constructor(model: Model);
  constructor(model: Model, icon: HTMLElement);
  constructor(model: Model, element: HTMLElement);
  constructor(model: Model, element: HTMLElement, icon: HTMLElement);
  constructor(
    model: Model,
    element: HTMLElement,
    icon: HTMLElement,
    elementSpecs: {
      baseClasses: string;
      additionalClasses?: string;
    },
    iconSpecs: {
      baseClasses: string;
      additionalClasses?: string;
    }
  );
  constructor(
    override readonly model: Model,
    element?: HTMLElement,
    icon?: HTMLElement,
    elementSpecs?: {
      baseClasses: string;
      additionalClasses?: string;
    },
    iconSpecs?: {
      baseClasses: string;
      additionalClasses?: string;
    }
  ) {
    super(model);

    if (!!element) {
      this.e = element;
    } else {
      this.e = document.createElement("div");
    }

    if (!!icon) {
      this.i = icon;
    } else {
      this.i = document.createElement("i");
    }
    if (!!elementSpecs) Object.assign(this.eSpecs, elementSpecs);
    if (!!iconSpecs) Object.assign(this.iSpecs, iconSpecs);

    this.e.setAttribute("id", `${this.model.IDELEMENT} - ${Id.Build()}`);
    this.i.setAttribute("id", `${this.model.IDELEMENT} - ${Id.Build()}`);

    this.e.appendChild(this.i);
  }
  reset = () => {
    this.eSpecs.additionalClasses = "";
    this.iSpecs.additionalClasses = "";
    this.update();
  };

  addIconClass = (s: string) => {
    this.iSpecs.additionalClasses += ` ${s} `;
    this.update();
  };
  addElementClass = (s: string) => {
    this.eSpecs.additionalClasses += ` ${s} `;
    this.update();
  };
  setIconAdditionalClasses = (s: string) => {
    this.iSpecs.additionalClasses = s;
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
    this.i.setAttribute(
      "class",
      `${this.iSpecs.baseClasses} ${this.iSpecs.additionalClasses}`
    );
  };

  appendAdditionalButtonClass = (s: string) => {};
  appendAdditionalIconClass = (s: string) => {};

  removeAdditionalButtonClass = (s: string) => {
    this.eSpecs.additionalClasses?.replace(s, "");
    this.update();
  };
  removeAdditionalIconClass = (s: string) => {
    this.iSpecs.additionalClasses?.replace(s, "");
    this.update();
  };
}
