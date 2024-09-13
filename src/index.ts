import { ElectronicClockDecorator } from "./Decorateurs/electronic-clock-decorator";
import { MecanicalClockDecorator } from "./Decorateurs/mecanical-clock-decorator";
import { Id } from "./Utils/index";

let baseMoreClockButtonClass = "ui-component button more-clock-button"; // add a drop down to select your timezone
let buttonMoreClock = document.createElement("div");
buttonMoreClock.setAttribute("class", baseMoreClockButtonClass);
//icon
let m_i = document.createElement("i");
m_i.setAttribute("class", "fa-regular fa-square-plus");
buttonMoreClock.appendChild(m_i);

let baseMoreRoundedClockButtonClass =
  "ui-component button more-clock-button more-rounded-clock-button";
let buttonMoreRoundedClock = document.createElement("div");
buttonMoreRoundedClock.setAttribute("class", baseMoreRoundedClockButtonClass);
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

buttonMoreClock.addEventListener(
  "click",
  (e) => new ElectronicClockDecorator(clockContainer.id),
);
buttonMoreRoundedClock.addEventListener(
  "click",
  (e) => new MecanicalClockDecorator(clockContainer.id),
);

let a = "abc def ghi jkl";

let b: string = a
  .split(" ")
  .filter((e) => e != "ghi")
  .reduce((acc, e) => (acc += ` ${e}`));
console.log(b);
