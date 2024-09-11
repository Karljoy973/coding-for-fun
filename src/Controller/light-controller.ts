import { Controller, View } from '../interfaces/types';
import { ButtonView } from '../View/button-view';
import { ContainerView } from '../View/container-view';
import { defaultStrategyDigitalTimeView } from '../View/StrategicView/default-strategy-digital-time-view';

/**
 * @class PressController
 * @description will handle the logic
 */
export class LightController implements Controller {
  protected _view: defaultStrategyDigitalTimeView;
  protected _emiter: ButtonView;
  constructor(view: defaultStrategyDigitalTimeView, emitter: ButtonView) {
    this._view = view;
    this._emiter = emitter;
    this.init();
  }
  init = () => {
    this._emiter.self.addEventListener('click', this.eventHandler);
  };

  eventHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (this._view.self.className.includes('light-on')) {
      // this._view.self.className.replace('light-on', 'light-off');
      this._view.self.setAttribute(
        'class',
        'ui-component light-area light-off'
      );
    } else if (this._view.self.className.includes('light-off')) {
      this._view.self.setAttribute('class', 'ui-component light-area light-on');
    }
  };
}
