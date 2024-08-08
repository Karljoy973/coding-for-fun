console.log("hello world");

//on a 12 mois
//on a 5 semaines (la dernière n'est jamais finie)
//on a 7 jours
//1 jour = 1 div
//1 semaine = 7 div (sauf pour la dernière semaine )
//1 mois = 5 semaines

const NOMBRE_DE_SEMAINES = 5;

let calendarWindow = document.createElement("div");
calendarWindow.style.width = `${0.7 * window.innerWidth}px`;
calendarWindow.style.height = `${0.7 * window.innerHeight}px`;
calendarWindow.setAttribute("id", "calendar-window");
document.body.appendChild(calendarWindow);

window.addEventListener("resize", (e) => {
	calendarWindow.style.width = `${0.7 * window.innerWidth}px`;
	calendarWindow.style.height = `${0.7 * window.innerHeight}px`;
});

let semaine = [
	"lundi",
	"mardi",
	"mercredi",
	"jeudi",
	"vendredi",
	"samedi",
	"dimanche",
];

const mois = [
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

let mIndex = 6; //iterateur ????

let postIt: HTMLElement;

let annee: number = 2024;

let moisComposition = [semaine, semaine, semaine, semaine, semaine];

let bandeau = document.createElement("div");
bandeau.setAttribute("class", "bandeau");
bandeau.style.width = `${+calendarWindow.clientWidth}px`;
bandeau.style.height = `${0.3 * +calendarWindow.clientHeight}px`;

calendarWindow.appendChild(bandeau);

let bandeauText = document.createElement("h2");
bandeauText.innerHTML = `${mois[mIndex]} ${annee}`;
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
		mIndex = mois.length - 1;
		annee--;
	}
	console.log(mIndex);
	bandeauText.innerText = `${mois[mIndex]} ${annee}`;
	mIndex--;
});

//fix css
let rightArrow = document.createElement("button");
rightArrow.setAttribute("id", "right-arrow");
let arrowDiv = document.createElement("div");

arrowDiv.appendChild(rightArrow);
arrowDiv.appendChild(leftArrow);

rightArrow.addEventListener("mousedown", (e) => {
	if (mIndex == mois.length) {
		mIndex = 0;
		annee++;
	}
	console.log(mIndex);
	bandeauText.innerHTML = `${mois[mIndex]} ${annee}`;
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

let numero: number = 10;
moisComposition.forEach((semaine, numSemaine) =>
	semaine.forEach((j, numJour) => {
		numero++;

		let jour = document.createElement("button");
		jour.setAttribute("id", `jour-#${numJour}-semaine-#${numSemaine}`);

		jour.style.width = `${0.14 * +calendarWindow.clientWidth}px`;
		jour.style.height = `${0.14 * +calendarWindow.clientHeight}px`;
		calendarWindow.appendChild(jour);
		jour.innerText = j;
		let nSpan = `<span id=jour-numero-${numero} >${numero}</span>`;

		jour.innerHTML += nSpan;

		jour.addEventListener("mouseover", (e) => {
			jour.style.backgroundColor = "cornflowerblue";
		});
		jour.addEventListener("mouseleave", (e) => {
			jour.style.backgroundColor = "blanchedalmond";
		});
		//feels like it does not work, go check w3c school layout to see how they do it
		jour.addEventListener("mousedown", (e) => {
			// document.body.appendChild(jour);
			postIt = document.createElement("div");
			postIt.style.zIndex = "-1";
			document.body.appendChild(postIt);
		});

		jour.addEventListener("mouseup", (e) => {
			[...document.body.childNodes.entries()]
				.filter((e) => !(e[1] as HTMLElement).id)
				.forEach((e) => document.body.removeChild(e[1] as Node));
		});
		// calendarWindow.appendChild(jour);
	}),
);
// rajouter les numéros de chaque jour
//créer un bandeau avec le nom du mois et deux flèches
//fixer le bandeau
//reegarder commetn faire une fenetre qui sort au premier plan
//créer le squelette d'un event
