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
console.log(`${0.14 * +calendarWindow.clientWidth}`);

let semaine = [
	"lundi",
	"mardi",
	"mercredi",
	"jeudi",
	"vendredi",
	"samedi",
	"dimanche",
];

let mois = [semaine, semaine, semaine, semaine, semaine];
mois.forEach((semaine, numSemaine) =>
	semaine.forEach((j, numJour) => {
		console.log(j);
		let jour = document.createElement("div");
		jour.setAttribute("id", `jour-#${numJour}-semaine-#${numSemaine}`);

		jour.style.width = `${0.14 * +calendarWindow.clientWidth}px`;
		jour.style.height = `${0.14 * +calendarWindow.clientHeight}px`;
		calendarWindow.appendChild(jour);
		jour.innerText = j;
		jour.addEventListener("click", (e) => {
			console.log(`tu as cliqué sur ${j}`);
		});
		jour.addEventListener("mouseover", (e) => {
			jour.style.backgroundColor = "green";
		});
		jour.addEventListener("mouseleave", (e) => {
			jour.style.backgroundColor = "blanchedalmond";
		});
		//feels like it does not work, go check w3c school layout to see how they do it
		jour.addEventListener("mousedown", (e) => {
			jour.style.width = `${0.14 * 3 * +calendarWindow.clientWidth}px`;
			jour.style.height = `${0.14 * 3 * +calendarWindow.clientHeight}px`;
			// document.body.appendChild(jour);
		});

		jour.addEventListener("mouseup", (e) => {
			jour.style.width = `${0.14 * +calendarWindow.clientWidth}px`;
			jour.style.height = `${0.14 * +calendarWindow.clientHeight}px`;
			// calendarWindow.appendChild(jour);
		});
	}),
);

let bandeau = document.createElement("div");
bandeau.style.width = `${+calendarWindow.clientWidth}px`;
bandeau.style.height = `${+calendarWindow.clientHeight}px`;
bandeau.innerText = "Aout";
calendarWindow.appendChild(bandeau);

let leftArrow = document.createElement("div");
leftArrow.setAttribute("id", "left-arrow");
leftArrow.innerText = "⬅️";
bandeau.appendChild(leftArrow);

//fix css
let rightArrow = document.createElement("div");
rightArrow.setAttribute("id", "right-arrow");
rightArrow.innerText = "➡️";

bandeau.appendChild(rightArrow);
// rajouter les numéros de chaque jour
//créer un bandeau avec le nom du mois et deux flèches
//fixer le bandeau
//reegarder commetn faire une fenetre qui sort au premier plan
//créer le squelette d'un event
