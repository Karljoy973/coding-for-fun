import { Controller, View } from "../interfaces/index";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui.js";

//jquery under the hood
export class GrabController implements Controller {
  _view: View;
  get view() {
    return this._view;
  }
  constructor(view: View) {
    this._view = view;
  }
  init = () => {
    this._view.self.addEventListener("mousedown", this.mouseDownHandler);
  };

  mouseDownHandler = (e: MouseEvent) => {
    let id = `#${this._view.self.id}`;
    $(function () {
      ($(id) as any).draggable();
    });
  };
}
