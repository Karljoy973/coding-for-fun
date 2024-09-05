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

  let rotateElement = (element: HTMLElement) => {
    rotationMatrix = [
      [Math.cos(a + rotateAmount), -1 * Math.sin(a + rotateAmount)],
      [Math.sin(a + rotateAmount), Math.cos(a + rotateAmount)],
    ];
    element.setAttribute(
      "style",
      `transform: matrix(${Math.cos(a + rotateAmount)}, ${
        -1 * Math.sin(a + rotateAmount)
      }, ${Math.sin(a + rotateAmount)}, ${Math.cos(
        a + rotateAmount
      )}, ${+element.style.left},  ${+element.style.top});`
    );
    a += rotateAmount;
  };
  setInterval(() => rotateElement(baseNeedle), 100);

  //controller
  $(function () {
    ($(`#${baseRoundedCadrant.id}`) as any).draggable();
  });

  //
};
