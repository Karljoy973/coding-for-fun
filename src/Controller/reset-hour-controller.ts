import { Controller, View } from '../interfaces/types';
import { defaultStrategyDigitalTimeView } from '../View/StrategicView/default-strategy-digital-time-view';

export class ResetHourController implements Controller {
    private _targettedView: defaultStrategyDigitalTimeView;
    private _emitter: View;
    constructor(targettedView: defaultStrategyDigitalTimeView, emitter: View) {
      this._targettedView = targettedView;
      this._emitter = emitter;
      this._emitter.self?.addEventListener("click", (e) => this.handler(e, this._targettedView));
    }
    private handler = (e: MouseEvent, v: defaultStrategyDigitalTimeView) => {
      e.preventDefault;
      if (!!v.digitalViews[0]) {
        v.digitalViews[0].getController().reset()
      }if(!!v.digitalViews[1]){v.digitalViews[1].getController().reset()}
    };
    get view() {
      return this._targettedView;
    }
  }
  