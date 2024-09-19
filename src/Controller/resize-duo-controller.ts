import { Controller, View } from "../interfaces/types";

export class ResizeDuoController implements Controller {
  _emittingView1: View;
  _emittingView2: View;
  _targettedView: View;
  private _upscaleEnabled: boolean;
  private _downscaleEnabled: boolean;
  scale: number;
  public get view() {
    return this._targettedView;
  }
  constructor(targettedView: View, emmittingView1: View, emmittingView2: View) {
    (this._targettedView = targettedView),
      (this._emittingView1 = emmittingView1),
      (this._emittingView2 = emmittingView2),
      (this.scale = 1);

    this._upscaleEnabled = false;

    this.init();
  }
  init = () => {
    this._emittingView1.self?.addEventListener(
      "mousedown",
      this.upScaleMouseDownHandler,
    );
    this._emittingView1.self?.addEventListener(
      "mouseover",
      this.upScaleMouseOverHandler,
    );
    this._emittingView1.self?.addEventListener(
      "mouseup",
      this.upScaleMouseUpHandler,
    );

    this._emittingView2.self?.addEventListener(
      "mousedown",
      this.downScaleMouseDownHandler,
    );
    this._emittingView2.self?.addEventListener(
      "mouseover",
      this.downScaleMouseOverHandler,
    );
    this._emittingView2.self?.addEventListener(
      "mouseup",
      this.downScaleMouseUpHandler,
    );
  };
  private upScaleMouseDownHandler = (e: MouseEvent) => {
    if (this._downscaleEnabled) {
      this._downscaleEnabled = false;
    }
    this._upscaleEnabled = true;
    console.log("upscale starts");
  };
  private upScaleMouseOverHandler = (e: MouseEvent) => {
    this.scale += 0.01;
    this._targettedView.self?.setAttribute(
      "style",
      `transform: scale(${this.scale}, ${this.scale})`,
    );
    console.log("upscale tick");
  };
  private upScaleMouseUpHandler = (e: MouseEvent) => {
    this._upscaleEnabled = false;
    console.log("upscale stops ");
  };

  private downScaleMouseDownHandler = (e: MouseEvent) => {
    if (this._upscaleEnabled) {
      this._upscaleEnabled = false;
    }
    this._downscaleEnabled = true;
  };
  private downScaleMouseOverHandler = (e: MouseEvent) => {
    this.scale -= 0.01;
    this._targettedView.self?.setAttribute(
      "style",
      `transform: scale(${this.scale}, ${this.scale})`,
    );
  };
  private downScaleMouseUpHandler = (e: MouseEvent) => {
    this._downscaleEnabled = false;
  };
}
