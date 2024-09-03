import { UIElementModel } from "./ArchtecturedVersion/View/interfaces";
import { buildController } from "./MiddleGround/build-controller";
import { buildModel, buildView } from "./MiddleGround/build-view";
// import { Build } from "./unArchitecturedVersion/build-everthing";

// Build.everything();

let baseMoreClockButtonClass = "ui-component button more-clock-button";
let buttonMoreClock = document.createElement("div");
buttonMoreClock.setAttribute("class", baseMoreClockButtonClass);
//icon
let m_i = document.createElement("i");
m_i.setAttribute("class", "fa-regular fa-square-plus");
buttonMoreClock.appendChild(m_i);

document.body.appendChild(buttonMoreClock);

let clockContainer = document.createElement("div");
clockContainer.setAttribute("class", "clock-container ui-component ");
document.body.appendChild(clockContainer);

buttonMoreClock.addEventListener("click", (e) => {
	let v = buildView();
	let m = buildModel({
		"base-cadrant-class": [v.views.buttonContainer, v.views.lightArea],
		"base-light-area-class": [v.views.hourElement],
		"base-hour-element-class": [
			v.views.hourDigitElement,
			v.views.minutesDigitElement,
			v.views.secundsDigitElement,
		],

		"base-button-container-class": [
			v.views.ligthButton,
			v.views.settingsButton,
			v.views.hourButton,
			v.views.buttonreset,
			v.views.swapHourButton,
		],
	});
	buildController(v.views, v.classes);
	console.log(m);
});
