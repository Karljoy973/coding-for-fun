import { ElectronicClockDecorator } from "./Decorateurs/electronic-clock-decorator";
import { MecanicalClockDecorator } from "./Decorateurs/mecanical-clock-decorator";
import { ClockNodeModel } from "./Model/clock-node-model";
import { Id } from "./Utils/index";
import { ButtonView } from "./View/button-view";

let mcbm = new ClockNodeModel("Button", undefined, undefined, undefined);
let MecanicalClockButton = new ButtonView(mcbm, {
  elementSpecs: { baseClasses: "ui-component button more-clock-button" },
  iconSpecs: { baseClasses: "fa-regular fa-square-plus" },
});

let ecbm = new ClockNodeModel("Button", undefined, undefined, undefined);
let ElectronicClockButton = new ButtonView(ecbm, {
  elementSpecs: {
    baseClasses:
      "ui-component button more-clock-button more-rounded-clock-button",
  },
  iconSpecs: { baseClasses: "fa-solid fa-circle-plus" },
});

document.body.appendChild(MecanicalClockButton.self);

document.body.appendChild(ElectronicClockButton.self);

let clockContainer = document.createElement("div");
clockContainer.setAttribute("class", "clock-container ui-component ");
clockContainer.setAttribute("id", Id.Build());
document.body.appendChild(clockContainer);

MecanicalClockButton.self?.addEventListener(
  "click",
  (e) => new ElectronicClockDecorator(clockContainer.id),
);

if (!!ElectronicClockButton.self) {
  ElectronicClockButton.self.addEventListener(
    "click",
    (e) => new MecanicalClockDecorator(clockContainer.id),
  );
}
