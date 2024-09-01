// const style = require("./public/style.css");

//cadrant circulaire
let baseCadrantClass = "ui-component";
let Cadrant = document.createElement("div");
Cadrant.setAttribute("class", baseCadrantClass);

// zone lumineuse
let baseLightAreaClass = "ui-component";
let lightArea = document.createElement("div");
lightArea.setAttribute("class", baseLightAreaClass);

// boutton lumière
let baseLightButtonClass = "ui-component";
let ligthButton = document.createElement("div");
ligthButton.setAttribute("class", baseLightButtonClass);

// boutton heures
let baseHourButtonClass = "ui-component";
let hourButton = document.createElement("div");
hourButton.setAttribute("class", baseHourButtonClass);

// hour Element
let baseHourElementClass = "ui-component";
let hourElement = document.createElement("p");
hourElement.setAttribute("class", baseHourElementClass);
hourElement.innerText = "I am clock";

//boutton settings
let baseSettingsButtonClass = "ui-component";
let buttonSettings = document.createElement("div");
buttonSettings.setAttribute("class", baseSettingsButtonClass);

let cadrantChildren = [lightArea, buttonSettings, hourButton, ligthButton];
let lightChildren = [hourElement];
let rootChildren = [Cadrant];
//composition

lightChildren.forEach((e: HTMLDivElement) => lightArea.appendChild(e));
cadrantChildren.forEach((e: HTMLDivElement) => Cadrant.appendChild(e));
rootChildren.forEach((e) => document.body.appendChild(e));
console.log("this is clock");
