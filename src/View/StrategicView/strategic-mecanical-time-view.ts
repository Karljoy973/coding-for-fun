import { View, Model } from "../../interfaces/types";
import { ClockNodeModel } from "../../Model/clock-node-model";
import { Id } from "../../Utils";
import { GenericView } from "../generic-view";
import { NeedleView } from "./needle-view";

export class StrategicMecanicalTimeView extends GenericView implements View {
  needles: NeedleView[];

  constructor(
    model: ClockNodeModel,
    Needles: {
      numberOfHourNeedles: number;
      numberOfMinuteNeedles: number;
      numberOfSecondNeedles: number;
    },
  ) {
    super(model);
    this.needles = [];
    if (!this.self) {
      this.self = document.createElement("div");
    }
    this.self.setAttribute("id", Id.Build());
    this.self.setAttribute("class", "ui-component rounded-clock");
    for (let i = 0; i < Needles.numberOfHourNeedles; i++) {}

    if (Needles.numberOfHourNeedles < 0) Needles.numberOfHourNeedles = 0;
    if (Needles.numberOfMinuteNeedles < 0) Needles.numberOfMinuteNeedles = 0;
    if (Needles.numberOfSecondNeedles < 0) Needles.numberOfSecondNeedles = 0;

    if (Needles.numberOfHourNeedles > 0) {
      for (let i = 0; i < Needles.numberOfHourNeedles; i++) {
        this.needles.push(new NeedleView("hours"));
      }
    }
    if (Needles.numberOfMinuteNeedles > 0) {
      for (let i = 0; i < Needles.numberOfMinuteNeedles; i++) {
        this.needles.push(new NeedleView("minutes"));
      }
    }
    if (Needles.numberOfSecondNeedles > 0) {
      for (let i = 0; i < Needles.numberOfSecondNeedles; i++) {
        this.needles.push(new NeedleView("seconds"));
      }
    }

    this.needles.forEach((needle) => needle.init());
    this.needles
      .filter((needle) => needle.getTimeResponsibility() == "hours")
      .forEach((needle) => needle.appendNeedleClass(" hour-needle "));
    this.needles
      .filter((needle) => needle.getTimeResponsibility() == "minutes")
      .forEach((needle) => needle.appendNeedleClass(" minute-needle "));

    this.needles
      .filter((needle) => needle.getTimeResponsibility() == "seconds")
      .forEach((needle) => needle.appendNeedleClass(" second-needle "));

    this.needles.forEach((needle) =>
      this.self.appendChild(needle.getNeedleView()),
    );
  }
}
