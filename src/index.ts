import { buildController } from "./MiddleGround/build-controller";
import { buildModel } from "./MiddleGround/build-model";
import { buildRoundedView } from "./MiddleGround/build-rounded-view";
import { buildView } from "./MiddleGround/build-view";
import { MecanicalClockDecorator } from "./newStart/Decorateurs/mecanical-clock-decorator";
import { ClockNodeModel } from "./newStart/Model/clock-node-model";
import { Id } from "./newStart/Utils/index";

let baseMoreClockButtonClass = "ui-component button more-clock-button"; // add a drop down to select your timezone
let buttonMoreClock = document.createElement("div");
buttonMoreClock.setAttribute("class", baseMoreClockButtonClass);
//icon
let m_i = document.createElement("i");
m_i.setAttribute("class", "fa-regular fa-square-plus");
buttonMoreClock.appendChild(m_i);

document.body.appendChild(buttonMoreClock);

let baseMoreRoundedClockButtonClass =
  "ui-component button more-clock-button more-rounded-clock-button";
let buttonMoreRoundedClock = document.createElement("div");
buttonMoreClock.setAttribute("class", baseMoreRoundedClockButtonClass);
//icon
let m_r_i = document.createElement("i");
m_r_i.setAttribute("class", "fa-solid fa-circle-plus");
buttonMoreRoundedClock.appendChild(m_r_i);

document.body.appendChild(buttonMoreClock);
document.body.appendChild(buttonMoreRoundedClock);

let clockContainer = document.createElement("div");
clockContainer.setAttribute("class", "clock-container ui-component ");
clockContainer.setAttribute("id", Id.Build());
document.body.appendChild(clockContainer);

buttonMoreClock.addEventListener("click", (e) => new MecanicalClockDecorator());
buttonMoreRoundedClock.addEventListener("click", (e) => buildRoundedView());
