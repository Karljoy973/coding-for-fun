//implements strategy design pattern

import { TimestampController } from "../../Controller/time-stamp-controller";
import { Model, TimeResponsibility, View } from "../../interfaces/types";
import { ClockNodeModel } from "../../Model/clock-node-model";
import { Id } from "../../Utils/index";

export class TimeZoneController {
  utc: HTMLSpanElement;
  constructor() {}
}

/**
 * @class StrategyNeedleTimeView
 *@method execute : builds a view on the time @see https://www.manutan.fr/fr/maf/horloge
 *
 * >@argument specs - necessary sppecs to create the view
 */
export class NeedleView implements View {
  protected needle: HTMLElement;
  protected needlePose: number[][];
  protected visibleNeedle: HTMLElement;
  protected timeController: TimestampController;
  protected timeResponsibility: TimeResponsibility;
  private a: number;
  constructor(timeResponsibility: TimeResponsibility) {
    this.needlePose = [
      [0, 0],
      [0, 0],
    ];
    this.visibleNeedle = document.createElement("div");
    this.needle = document.createElement("div");

    this.needle.setAttribute("id", Id.Build());
    this.visibleNeedle.setAttribute("id", Id.Build());

    this.visibleNeedle.setAttribute("class", "visible-needle");
    this.needle.setAttribute("class", "needle");

    this.needle.appendChild(this.visibleNeedle);

    this.timeResponsibility = timeResponsibility;
    this.timeController = new TimestampController(true);
    this.a = 0;

    if (this.timeResponsibility == "hours") {
      // je pense que le soucis est là
      this.startHour();
    }
    if (this.timeResponsibility == "minutes") {
      this.startMinute();
    }

    if (this.timeResponsibility == "seconds") {
      this.startSecond();
    }

    this.init();
    this.self = this.visibleNeedle;
    this.model = new ClockNodeModel("Container", undefined, undefined, undefined)
  }
  model: Model;
  self?: HTMLElement;
  create?: Function;

  init = () => {
    //checker l'appel de cette fonction
    if (this.timeResponsibility == "hours") {
      // je pense que le soucis est là
      setInterval(this.startHour, 30000);
    }
    if (this.timeResponsibility == "minutes") {
      setInterval(this.startMinute, 5000);
    }
    if (this.timeResponsibility == "seconds") {
      setInterval(this.startSecond, 100);
    }
  };

  appendNeedleClass = (s: string) => {
    this.needle.className += s;
  };
  getTimeResponsibility = () => {
    return this.timeResponsibility;
  };

  getNeedleView = () => {
    return this.needle;
  };

  startHour = () => {
    ((+this.timeController.CurrentHour +
      +this.timeController.CurrentMinute / 60) *
      Math.PI) /
      6;
    this.needlePose[0][0] = Math.cos(-this.a + Math.PI / 12);
    this.needlePose[0][1] = -Math.sin(-this.a + Math.PI / 12);
    this.needlePose[1][0] = Math.sin(-this.a + Math.PI / 12);
    this.needlePose[1][1] = Math.cos(-this.a + Math.PI / 12);
    this.needle.setAttribute(
      "style",
      `transform: matrix(${this.needlePose[0][0]}, ${this.needlePose[0][1]}, ${this.needlePose[1][0]}, ${this.needlePose[1][1]}, 0, 0  );`,
    );
  };
  startMinute = () => {
    this.a = (+this.timeController.CurrentMinute * Math.PI) / 30;
    this.needlePose[0][0] = Math.cos(-this.a);
    this.needlePose[0][1] = -Math.sin(-this.a);
    this.needlePose[1][0] = Math.sin(-this.a);
    this.needlePose[1][1] = Math.cos(-this.a);
    this.needle.setAttribute(
      "style",
      `transform: matrix(${this.needlePose[0][0]}, ${this.needlePose[0][1]}, ${this.needlePose[1][0]}, ${this.needlePose[1][1]}, 0, 0  );`,
    );
  };
  startSecond = () => {
    this.a = +this.timeController.CurrentSecond * (Math.PI / 30);
    this.needlePose[0][0] = Math.cos(-this.a);
    this.needlePose[0][1] = -Math.sin(-this.a);
    this.needlePose[1][0] = Math.sin(-this.a);
    this.needlePose[1][1] = Math.cos(-this.a);
    this.needle.setAttribute(
      "style",
      `transform: matrix(${this.needlePose[0][0]}, ${this.needlePose[0][1]}, ${this.needlePose[1][0]}, ${this.needlePose[1][1]}, 0, 0  );`,
    );
  };
}
