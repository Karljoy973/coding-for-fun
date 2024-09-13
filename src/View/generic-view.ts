import { View, Model } from "../interfaces/types";

/**
 * @class GenericView
 * @description - could be redifined later, parent class to every view,
 * usefull to define a builder or a strategy or another pattern.
 * @property {HTMLElement} self:  - the representation of the model we could change it to be more robust maybe
 * @method create: Initialize the view
 */
export class GenericView implements View {
  constructor(readonly model: Model) {}
  self: HTMLElement;
  /**
   * @method create - chaque méthode a sa propre méthode de création.
   */
  create?: Function;
  appendChild: Function = (v: View) => {
    if (!!v.self) this.self.appendChild(v.self);
  };
}
