import { Controller, View } from '../interfaces/types';

export class ResizeDownController implements Controller {
    _emittingView1: View;
    _targettedView: View;
    scale: number;
    public get view() {
      return this._targettedView;
    }
    constructor(targettedView: View, emmittingView1: View) {
      (this._targettedView = targettedView),
        (this._emittingView1 = emmittingView1),
        (this.scale = 1);
  
  
      this.init();
    }
    init = () => {
  
      this._emittingView1.self?.addEventListener(
        "mouseover",
        this.downScaleMouseOverHandler,
      );
      
    };
  
  
    private downScaleMouseOverHandler = (e: MouseEvent) => {
      this.scale -= 0.01;
      this._targettedView.self?.setAttribute(
        "style",
        `transform: scale(${this.scale}, ${this.scale})`,
      );
    };
  
  }
  