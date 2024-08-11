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

let mIndex = 6; //iterateur ????

let postIt: HTMLElement;

let annee: number = 2024;

let moisComposition = [
	semaineCompo,
	semaineCompo,
	semaineCompo,
	semaineCompo,
	semaineCompo,
];

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

//fix css
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

let numero: number = 10;
moisComposition.forEach((semaineCompo, numSemaine) =>
	semaineCompo.forEach((j, numJour) => {
		numero++;
		console.log(numero);

		let jour = document.createElement("button");
		jour.setAttribute("id", `jour-#${numJour}-semaine-#${numSemaine}`);

		jour.style.width = `${0.14 * +calendarWindow.clientWidth}px`;
		jour.style.height = `${0.14 * +calendarWindow.clientHeight}px`;
		calendarWindow.appendChild(jour);
		jour.innerText = j;
		let nSpan = `<span id=jour-numero-${numero} >${
			numSemaine * (numJour + 1)
		}</span>`;

		jour.innerHTML += nSpan; //à réfléchir

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

[...calendarWindow.childNodes.entries()]
	.map((e) => e[1])
	.filter((e) => e instanceof HTMLButtonElement)
	.map((e) => [...e.children][0])
	.forEach((e, i) => (e.innerHTML = `${i}`)),
	// rajouter les numéros de chaque jour
	//créer un bandeau avec le nom du mois et deux flèches
	//fixer le bandeau
	//reegarder commetn faire une fenetre qui sort au premier plan
	//créer le squelette d'un event

	class joursOption {
		public static joursOption = [
			"lundi",
			"mardi",
			"mercredi",
			"jeudi",
			"vendredi",
			"samedi",
			"dimanche",
		];
	};

type moisDataModel = {
	mois:
		| "janvier"
		| "ferier"
		| "mars"
		| "avril"
		| "mai"
		| "juin"
		| "juillet"
		| "aout"
		| "septembre"
		| "octobre"
		| "novembre"
		| "decembre";
	nombreJours: NumeroJour;
};

class moisOption {
	constructor() {}
	public moisOpt() {
		return [
			{ mois: "janvier" as keyof moisDataModel, nombreJours: 31 },
			{ mois: "fevrier", nombreJours: 28 },
			{ mois: "mars", nombreJours: 31 },
			{ mois: "avril", nombreJours: 30 },
			{ mois: "mai", nombreJours: 31 },
			{ mois: "juin", nombreJours: 30 },
			{ mois: "juillet", nombreJours: 31 },
			{ mois: "aout", nombreJours: 31 },
			{ mois: "septembre", nombreJours: 30 },
			{ mois: "octobre", nombreJours: 31 },
			{ mois: "novembre", nombreJours: 30 },
			{ mois: "decembre", nombreJours: 31 },
		] as moisDataModel[];
	}
}

type NumeroJour =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30
	| 31;
type moisLongueur = 28 | 29 | 30 | 31;
type semaineLongueur = 1 | 2 | 3 | 4 | 5 | 6 | 7;

// class jour {
// 	nom: joursOption;
// 	numero: NumeroJour;
// 	annee: number;
// 	mois: moisOption;
// 	boutton: HTMLButtonElement;
// 	pZone: HTMLParagraphElement;
// 	numeroSpan: HTMLSpanElement;

// 	public get NomJour(): joursOption {
// 		return this.nom;
// 	}

// 	public set NomJour(value: joursOption) {
// 		this.nom = value;
// 	}

// 	public getNumero(): NumeroJour {
// 		return this.numero;
// 	}

// 	public set Numero(value: NumeroJour) {
// 		this.numero = value;
// 	}

// 	public get Annee(): number {
// 		return this.annee;
// 	}

// 	public set Annee(value: number) {
// 		this.annee = value;
// 	}

// 	public get Mois(): moisOption {
// 		return this.mois;
// 	}

// 	public set Mois(value: moisOption) {
// 		this.mois = value;
// 	}

// 	public get Boutton(): HTMLButtonElement {
// 		return this.boutton;
// 	}

// 	public set Boutton(value: HTMLButtonElement) {
// 		this.boutton = value;
// 	}

// 	public get PZone(): HTMLParagraphElement {
// 		return this.pZone;
// 	}

// 	public set PZone(value: HTMLParagraphElement) {
// 		this.pZone = value;
// 	}

// 	public get NumeroSpan(): HTMLSpanElement {
// 		return this.numeroSpan;
// 	}

// 	public set NumeroSpan(value: HTMLSpanElement) {
// 		this.numeroSpan = value;
// 	}

// 	mouseOverHandler() {
// 		// gere le css
// 	}
// 	mouseLeaveHandler() {
// 		// gere le css
// 	}
// 	mouseDownHandler() {
// 		// ecrit des specs
// 	}
// 	mouseUpHandler() {
// 		// retourne des specs
// 	}
// 	constructor(
// 		nom: joursOption,
// 		numero: NumeroJour,
// 		annee: number,
// 		mois: moisOption,
// 	) {
// 		this.nom = nom;
// 		this.numero = numero;
// 		this.boutton = document.createElement("button");
// 		this.pZone = document.createElement("p");
// 		this.numeroSpan = document.createElement("span");
// 		this.annee = annee;
// 		this.mois = mois;
// 	}
// }

// class sequenceJours {
// 	public NOMBRE_DE_JOURS: NumeroJour;
// 	constructor() {}
// }

// class semaine extends sequenceJours {
// 	constructor() {
// 		super();
// 	}
// }
// class moisModel extends sequenceJours {
// 	//modele du mois
// 	//nbre jour, nom mois,
// 	public moisData: moisOption;
// 	public jourStockage: sequenceJours[];

// 	constructor(name: string) {
// 		super();
// 		this.moisData = new moisOption();
// 		this.jourStockage = [];
// 		try {
// 			this.NOMBRE_DE_JOURS = this.moisData
// 				.moisOpt()
// 				.filter((e) => e.mois == name)[0].nombreJours;
// 		} catch (e) {
// 			console.log("ce mois ne peut pas être initialise");
// 			throw e;
// 		}

// 		for (let i = 0; i < 4; i++) {
// 			//build semaine
// 			let s = new semaine();
// 			this.jourStockage.push(s);
// 		}
// 		//build jours restants
// 		let s = new sequenceJours();
// 		this.jourStockage.push(s);
// 	}
// }
// class moisVue {
// 	// style css
// 	// event listener lies au style

// 	private model: moisModel;
// 	private moisControllers: any[];

// 	public moisData: moisOption;
// 	public jourStockage: sequenceJours[];

// 	constructor() {}
// }

// class moisController {
// 	// style css
// 	// event listener lies au style

// 	private model: moisModel;

// 	constructor() {}
// }

//On va dire qu'on commence systematiquement au mois d'aout 2024 (v1)
