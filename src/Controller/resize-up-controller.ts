import { Controller, View } from "../interfaces/types";





export class ResizeUpController implements Controller {
  _emittingView1: View;
  _targettedView: View;
  scale: number;
  public get view() {
    return this._targettedView;
  }
  constructor(targettedView: View, emmittingView1: View) {
    this._targettedView = targettedView;
      this._emittingView1 = emmittingView1;
      if(!!targettedView.self){

        (this.scale = +targettedView.self?.style.scale);
      }
      if (!this.scale) this.scale = 1;

      this._emittingView1.self?.addEventListener(
        "mouseover",
        this.upScaleMouseOverHandler,
      );

  }
  
  
  private upScaleMouseOverHandler = (e: MouseEvent) => {
    this.scale += 0.01;
    this._targettedView.self?.setAttribute(
      "style",
      `transform: scale(${this.scale}, ${this.scale})`,
    );
    console.log("upscale tick");
  };


}



