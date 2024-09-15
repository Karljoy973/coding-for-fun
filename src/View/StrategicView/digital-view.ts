import { TimestampController } from "../../Controller/time-stamp-controller";
import { TimeResponsibility } from "../../interfaces/types";
import { Id } from "../../Utils";

export class DigitalView {
  private _t: boolean;
  timestamp: HTMLSpanElement;
  protected timeResponsibility: TimeResponsibility;
  protected timeController: TimestampController;
  constructor(timeResponsibiility: TimeResponsibility, toggle?: boolean) {
    this.timeResponsibility = timeResponsibiility;
    this.timestamp = document.createElement("span");
    this.timestamp.setAttribute("id", Id.Build());
    // this.timestamp.setAttribute("class", "ui-component");
    if (toggle != undefined || toggle != null) {
      toggle = false;
    }
    this.timeController = new TimestampController(toggle);

    this.init();
  }

  init = () => {
    if (this.timeResponsibility == "hours") {
      setInterval(() => {
        this.timestamp.innerText = this.timeController.CurrentHour + ":";
      }, 10);
    }
    if (this.timeResponsibility == "minutes") {
      setInterval(() => {
        this.timestamp.innerText = this.timeController.CurrentMinute + ":";
      }, 10);
    }
    if (this.timeResponsibility == "seconds") {
      setInterval(() => {
        this.timestamp.innerText = this.timeController.CurrentSecond;
      }, 10);
    }
  };
  public getToggleState = () => {
    return this._t;
  };
  public setToggle = (v: boolean) => {
    this._t = v;
    this.timeController.setHour12(v);
  };

  getController = () => this.timeController;
}
