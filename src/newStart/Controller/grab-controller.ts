import { Controller, View } from "../interfaces/index";

export class GrabController implements Controller {
  _view: View;
  get view() {
    return this._view;
  }
  constructor(view: View) {
    this._view = view;
  }
  init = () => {
    this._view.self.addEventListener("click", this.eventHandler);
  };

  eventHandler = (e: MouseEvent) => {};
}
