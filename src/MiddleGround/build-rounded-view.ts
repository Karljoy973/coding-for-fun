import $ from "jquery";
import "jquery-ui-dist/jquery-ui.js";
import { Id } from "../newStart/Utils/index";

export let buildRoundedView = () => {
	let baseRoundedCadrant = document.createElement("div");
	baseRoundedCadrant.setAttribute("id", Id.Build());
	let brc = "rounded-clock ui-element";

	baseRoundedCadrant.setAttribute("class", brc);
	baseRoundedCadrant.setAttribute("draggable", "true");

	let containter = document.getElementsByClassName("clock-container ")[0];
	containter.appendChild(baseRoundedCadrant);

	let baseNeedle = document.createElement("div");
	baseNeedle.setAttribute("id", Id.Build());

	let visibleNeedle = document.createElement("div");
	visibleNeedle.setAttribute("id", Id.Build());
	visibleNeedle.setAttribute("class", "visible-needle");
	baseNeedle.appendChild(visibleNeedle);

	baseRoundedCadrant.appendChild(baseNeedle);
	baseNeedle.setAttribute("class", "needle");

	//other controller
	let a = 0;
	let rotationMatrix: number[][];
	let rotateAmount = -0.6 * 0.0174533; //(récupérer la seconde courrante la diviser par 60 puis multiplier le résultat par 0.0017... a al palce de rotateAmount)

	setInterval(() => {
		let now = new Date();
		now.setSeconds(now.getSeconds());
		let current = now.toLocaleTimeString(undefined, { second: "2-digit" });
		a = -(+current / 60) * 1.74533 * 3.65;
		// console.log(a);
		baseNeedle.setAttribute(
			"style",
			`transform: matrix(${Math.cos(a)}, ${-1 * Math.sin(a)}, ${Math.sin(
				a,
			)}, ${Math.cos(a)}, ${+baseNeedle.style.left},  ${+baseNeedle.style
				.top});`,
		);
	});

	//controller
	$(function () {
		($(`#${baseRoundedCadrant.id}`) as any).draggable();
	});

	//
};
