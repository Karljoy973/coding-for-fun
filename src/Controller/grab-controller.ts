import { Controller, View } from "../interfaces/types";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui.js";
import { GenericView } from "../View/generic-view";

//jquery under the hood
export class GrabController implements Controller {
  private _view: View;
  private _emitter: View; 
  get view() {
    return this._view;
  }
  constructor(targettedVeiw: View, emitter) {
    this._view = targettedVeiw;
    this._emitter = emitter; 
    this._emitter.self!.addEventListener("mousedown", this.mouseDownHandler);
  }
  init = () => {
    if (!!this._view.self) {
      this._view.self.addEventListener("mousedown", this.mouseDownHandler);
    }
  };

  mouseDownHandler = (e: MouseEvent) => {
    let mover = (this._view as GenericView).self;
    mover.setAttribute("draggable", "true");
    $(function () {
      ($(`#${mover.id}`) as any).draggable();
    });
  };
}
