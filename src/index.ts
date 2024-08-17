import { popUpSpecs } from "./Models/types";

let semaineCompo = [
	"lundi",
	"mardi",
	"mercredi",
	"jeudi",
	"vendredi",
	"samedi",
	"dimanche",
];

const moisOpt = [
	"janvier",
	"fevrier",
	"mars",
	"avril",
	"mai",
	"juin",
	"juillet",
	"aout",
	"septembre",
	"octobre",
	"novembre",
	"decembre",
];

let savedEvents: any = [];

let mIndex = 6; //iterateur ????

let annee: number = 2024;

let moisComposition = [
	semaineCompo,
	semaineCompo,
	semaineCompo,
	semaineCompo,
	semaineCompo,
];

const NOMBRE_DE_SEMAINES = 5;

//time to split stuff I guess
let calendrierModel = {
	width: 1700,
	ratio: 0.5625,
	id: "",
	class: "",
	parent: document.body,
	enfants: [],
};

let calendrierVue;

let calendarWindow = document.createElement("div");
calendarWindow.style.width = `${calendrierModel.width}px`;
calendarWindow.style.height = `${
	calendrierModel.width * calendrierModel.ratio
}px`;
calendarWindow.setAttribute("id", "calendar-window");
document.body.appendChild(calendarWindow);

window.addEventListener("resize", (e) => {
	calendarWindow.style.width = `${0.7 * window.innerWidth}px`; //fixer ça
	calendarWindow.style.height = `${0.7 * window.innerHeight}px`; //fixer ça
});

let bandeau = document.createElement("div");
bandeau.setAttribute("class", "bandeau");
bandeau.style.width = `${+calendarWindow.clientWidth}px`;
bandeau.style.height = `${0.3 * +calendarWindow.clientHeight}px`;

calendarWindow.appendChild(bandeau);

let bandeauText = document.createElement("h2");
bandeauText.innerHTML = `${moisOpt[mIndex]} ${annee}`;
let bDiv = document.createElement("div");
bDiv.setAttribute("id", "b-div");
bDiv.appendChild(bandeauText);
bandeau.appendChild(bDiv);

let leftArrow = document.createElement("button");
leftArrow.setAttribute("id", "left-arrow");
leftArrow.innerText = "⬅️";
bandeau.appendChild(leftArrow);

leftArrow.addEventListener("mousedown", (e) => {
	if (mIndex < 0) {
		mIndex = moisOpt.length - 1;
		annee--;
	}
	console.log(mIndex);
	bandeauText.innerText = `${moisOpt[mIndex]} ${annee}`;
	mIndex--;
});

let rightArrow = document.createElement("button");
rightArrow.setAttribute("id", "right-arrow");
let arrowDiv = document.createElement("div");

arrowDiv.appendChild(rightArrow);
arrowDiv.appendChild(leftArrow);

rightArrow.addEventListener("mousedown", (e) => {
	if (mIndex == moisOpt.length) {
		mIndex = 0;
		annee++;
	}
	console.log(mIndex);
	bandeauText.innerHTML = `${moisOpt[mIndex]} ${annee}`;
	mIndex++;
});
[rightArrow, leftArrow].forEach((e) => {
	e.setAttribute("class", "arrow-button");
	e.style.height = "60px";
	e.addEventListener("click", (e) => console.log(e));
	e.addEventListener(
		"mouseover",
		(ee) => (e.style.backgroundColor = "cornflowerblue"),
	);
	e.addEventListener(
		"mouseleave",
		(ed) => (e.style.backgroundColor = "blanchedalmond"),
	);
});
bandeau.appendChild(arrowDiv);
rightArrow.innerText = "➡️";

let numero: number = 0;
moisComposition.forEach((semaineCompo, numSemaine) =>
	semaineCompo.forEach((j, numJour) => {
		let jour = document.createElement("button");
		jour.setAttribute("id", `jour-#${numJour}-semaine-#${numSemaine}`);

		jour.style.width = `${0.14 * calendrierModel.width}px`;
		jour.style.height = `${
			0.14 * calendrierModel.width * calendrierModel.ratio
		}px`;
		calendarWindow.appendChild(jour);
		jour.innerText = j;

		//à réfléchir
		jour.addEventListener("mouseover", (e) => {
			jour.style.backgroundColor = "cornflowerblue";
		});
		jour.addEventListener("mouseleave", (e) => {
			jour.style.backgroundColor = "blanchedalmond";
		});

		jour.addEventListener("mouseup", (e) => {});
		// calendarWindow.appendChild(jour);

		jour.addEventListener("mousedown", (e) => {
			let popUp: Element = document.getElementsByClassName(
				"first-version-of-id-to-be-corrected-later",
			)[0];
			try {
				<HTMLDivElement>popUp;
				if (!popUp) throw new Error();
				document.body.removeChild(popUp);
			} catch (error) {
				createPopUp();
			}
		});
	}),
);

let jours = [...calendarWindow.childNodes.entries()]
	.map((e) => e[1])
	.filter((e) => e instanceof HTMLButtonElement);

jours.forEach((e, i) => {
	let nSpan = `<span id=jour-numero-${numero} >${i + 1}</span>`;
	e.innerHTML += nSpan;
});

jours.map((j, i) => {
	if (i > 30) calendarWindow.removeChild(j);
});

let popUpViewModel: popUpSpecs = {
	id: "default-pop-up-id",
	width: "350px",
	height: "500px",
	position: "absolute",
	zIndex: "3",
	top: "300px",
	left: `500px`,
	backgroundColor: "blanchedalmond",
};

/**
 * @function createPopUp - view on the popUpViewModel
 * @param specs: popUpSpecs
 * @returns: void
 */

let createPopUp = (specs?: Partial<popUpSpecs>): void => {
	let popUp = document.createElement("div");
	popUp.className = "first-version-of-id-to-be-corrected-later";

	if (!!specs && !!specs.width) {
		popUp.style.width = specs.width;
	} else popUp.style.width = popUpViewModel.width;

	if (!!specs && !!specs.height) {
		popUp.style.height = specs.height;
	} else popUp.style.height = popUpViewModel.height;

	if (!!specs && !!specs.position) {
		popUp.style.position = specs.position;
	} else popUp.style.position = popUpViewModel.position;

	if (!!specs && !!specs.zIndex) {
		popUp.style.zIndex = specs.zIndex;
	} else popUp.style.zIndex == popUpViewModel.zIndex;

	if (!!specs && !!specs.top) {
		popUp.style.top = specs.top;
	} else popUp.style.top == popUpViewModel.top;

	if (!!specs && !!specs.left) {
		popUp.style.left = specs.left;
	} else popUp.style.left = popUpViewModel.left;

	if (!!specs && !!specs.backgroundColor) {
		popUp.style.backgroundColor = specs.backgroundColor;
	} else popUp.style.backgroundColor = popUpViewModel.backgroundColor;

	//add to type
	popUp.style.borderWidth = "3px";
	popUp.style.borderColor = " black";
	popUp.style.borderStyle = "solid";

	document.body.appendChild(popUp);

	createTextArea(popUp);

	createButton(popUp);
};

type TextAreaSpecs = {};
/**
 * @function createTextArea
 * @param parent
 * @param specs
 * @returns void
 */
let createTextArea = (
	parent: HTMLElement,
	specs?: Partial<TextAreaSpecs>,
): void => {
	let textArea = document.createElement("input");
	textArea.id = "text-area";
	textArea.setAttribute("type", "text");
	textArea.style.width = "85%";

	textArea.style.right = "5%";
	textArea.style.height = "15%";
	textArea.style.position = "absolute";
	textArea.style.top = "5%";
	parent.appendChild(textArea);
};

//I want to create polymorphic functions
type buttonSpecs = {};
/**
 * @function createButton
 * @param parent
 * @param specs
 * @returns void
 */
let createButton = (
	parent: HTMLElement,
	specs?: Partial<buttonSpecs>,
): void => {
	let button = document.createElement("button");
	button.style.width = "125px";
	button.style.height = "75px";

	button.style.position = "absolute";
	button.style.bottom = "30px";
	button.style.right = "20px";

	button.innerText = "Valider";
	button.onclick = (e: MouseEvent) => {
		e.preventDefault();
		let inputField = document.getElementById(
			"text-area",
		) as HTMLInputElement;
		if (!!inputField && !!inputField.value) {
			savedEvents.push(inputField.value);
			inputField.value = "";
			console.log(savedEvents);
		}
	};

	parent.appendChild(button);
};

//créer le squelette d'un evenement

let divTasks = document.createElement("div");
divTasks.id += "tasks-div-element";
document.body.appendChild(divTasks);
let tasks = [];
