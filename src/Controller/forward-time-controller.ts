import { Controller, View } from "../interfaces/types";
import { defaultStrategyDigitalTimeView } from "../View/StrategicView/default-strategy-digital-time-view";
import { DigitalView } from "../View/StrategicView/digital-view";

export class ForwardTimeController implements Controller { 
    private _v: defaultStrategyDigitalTimeView; 
    private _e: View;
    constructor(targettedView: defaultStrategyDigitalTimeView, emitter: View) {
        this._v = targettedView; 
        this._e = emitter;
        this._e.self?.addEventListener('click', this.handler)
    }

    get view() {
        return this._e;
    }
    public handler = () => {
console.log("I am the correct button ")
        if (this._v.digitalViews[0].timestamp.className.includes("isBlinking")) {
            this._v.digitalViews[0].getController().incrementHours()
         }
        if (this._v.digitalViews[1].timestamp.className.includes("isBlinking")) {
            this._v.digitalViews[0].getController().incrementMinutes()
        }
 }

}