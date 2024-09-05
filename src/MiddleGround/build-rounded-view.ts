import $ from "jquery";

export let buildRoundedView = () => {
	let baseRoundedCadrant = document.createElement("canvas");
	let brc = "rounded-clock ui-element";

	baseRoundedCadrant.setAttribute("class", brc);
	baseRoundedCadrant.setAttribute("draggable", "true");
	let containter = document.getElementsByClassName("clock-container ")[0];
	containter.appendChild(baseRoundedCadrant);

	baseRoundedCadrant.draggable = true;
	let context = baseRoundedCadrant.getContext("2d");

	$("div.rounded-clock").;
};
