export namespace Calendar {
	export let Display = () => {
		type popUpSpecs = {
			id: string;
			width: string;
			height: string;
			position: string;
			zIndex: string;
			top: string;
			left: string;
			backgroundColor: string;
		};

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

		let mIndex = 6;

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

		let calendarWindow = document.createElement("div");
		calendarWindow.style.width = `${calendrierModel.width}px`;

		calendarWindow.setAttribute("id", "calendar-window");

		let bandeau = document.createElement("div");
		bandeau.setAttribute("class", "bandeau");

		window.onpageshow = () => document.body.appendChild(calendarWindow);
		calendarWindow.appendChild(bandeau);

		let bandeauText = document.createElement("h2");
		bandeauText.innerText = `${moisOpt[mIndex]} ${annee}`;
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
			fixMonths(bandeauText);
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
			fixMonths(bandeauText);
			mIndex++;
		});
		[rightArrow, leftArrow].forEach((e) => {
			e.setAttribute("class", "arrow-button");
			e.style.height = "60px";
			e.addEventListener("click", (e) => console.log(e));

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
				jour.setAttribute(
					"id",
					`jour-#${numJour}-semaine-#${numSemaine}`,
				);
				jour.setAttribute("class", "day-container");

				jour.style.width = `${0.14 * calendrierModel.width}px`;
				jour.style.height = `${
					0.14 * calendrierModel.width * calendrierModel.ratio
				}px`;
				calendarWindow.appendChild(jour);
				jour.innerText = j;

				jour.addEventListener("mouseleave", (e) => {
					jour.style.backgroundColor = "blanchedalmond";
				});

				jour.addEventListener("mouseup", (e) => {});
				// calendarWindow.appendChild(jour);

				jour.addEventListener("mousedown", (e) => {
					let popUp: Element = document.getElementsByClassName(
						"scheduler-container",
					)[0];
					try {
						<HTMLDivElement>popUp;
						if (!popUp) throw new Error();
						document.body.removeChild(popUp);
					} catch (error) {
						createPopUp();
						let header = document.getElementsByClassName(
							"popup-header",
						)[0] as HTMLDivElement;
						let span = (e.target as HTMLDivElement).children[0];
						header.innerHTML = `<p>${j} - ${span?.innerHTML}</p> `;
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

		/**
		 * @function fixMonths
		 * @param bandeau
		 * @returns void
		 */
		let fixMonths = (bandeau: HTMLElement): void => {
			let currentMonth = bandeau.innerText.split(" ")[0];
			let currentYear = bandeau.innerText.split(" ")[1];
			switch (currentMonth) {
				case moisOpt[0]:
					//31j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 31 - 1) {
							j.style.display = "none";
						}
					});
					break;
				case moisOpt[1]:
					//28j- 29j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (+currentYear % 4 == 0) {
							if (+currentYear % 100 == 0) {
								if (+currentYear % 400 == 0) {
									if (i > 29 - 1) {
										j.style.display = "none";
									}
								} else {
									if (i > 28 - 1) {
										j.style.display = "none";
									}
								}
							} else {
								if (i > 29 - 1) {
									j.style.display = "none";
								}
							}
						}
					});
					break;

				case moisOpt[2]:
					//31j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 31 - 1) {
							j.style.display = "none";
						}
					});
					break;

				case moisOpt[3]:
					//30
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 30 - 1) {
							j.style.display = "none";
						}
					});
					break;

				case moisOpt[4]:
					//31j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 31 - 1) {
							j.style.display = "none";
						}
					});
					break;
				case moisOpt[5]: //30j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 30 - 1) {
							j.style.display = "none";
						}
					});
					break;
				case moisOpt[6]:
					//31j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 31 - 1) {
							j.style.display = "none";
						}
					});
					break;

				case moisOpt[7]:
					//31j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 31 - 1) {
							j.style.display = "none";
						}
					});
					break;

				case moisOpt[8]:
					//30j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 30 - 1) {
							j.style.display = "none";
						}
					});
					break;

				case moisOpt[9]:
					//31j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 31 - 1) {
							j.style.display = "none";
						}
					});
					break;
				case moisOpt[10]:
					//30j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 30 - 1) {
							j.style.display = "none";
						}
					});

					break;

				default:
					//decembre
					//31j
					jours.map((j, i) => {
						j.style.display = "flex";
						if (i > 31 - 1) {
							j.style.display = "none";
						}
					});
					break;
			}
		};

		fixMonths(bandeauText);

		let popUpViewModel: popUpSpecs = {
			id: "default-pop-up-id",
			width: "900px",
			height: "600px",
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
			popUp.className = "scheduler-container";

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

			let header = document.createElement("div");
			header.className += "popup-header";

			let container = document.createElement("div");
			container.setAttribute("class", "container");

			let registerEvent = document.createElement("div");
			registerEvent.setAttribute("class", "register-event");

			popUp.appendChild(header);
			addScheduler(container);
			container.appendChild(registerEvent);
			popUp.appendChild(container);

			document.body.appendChild(popUp);
		};

		let addEventForm = (parent: HTMLElement) => {
			let eventForm = document.createElement("form");
			eventForm.setAttribute("class", "event-form");

			eventForm.addEventListener("input", (e) => {
				e.preventDefault();
			});

			let eventTitle = document.createElement("h1");
			eventTitle.setAttribute("class", "event");
			eventTitle.setAttribute("class", "title");
			eventTitle.setAttribute("class", "event-title");
			eventTitle.innerText = "Nom de l'évènement";

			let eventTitleInput = document.createElement("input");
			eventTitleInput.setAttribute("class", "event");
			eventTitleInput.setAttribute("class", "title");
			eventTitleInput.setAttribute("class", "event-title-input");

			let eventDescription = document.createElement("p");
			eventDescription.setAttribute("class", "event");
			eventDescription.setAttribute("class", "description");
			eventDescription.setAttribute("class", "event-description");
			eventDescription.innerText = "Description";

			let eventDescriptionInput = document.createElement("input");
			eventDescriptionInput.setAttribute("class", "event");
			eventDescriptionInput.setAttribute("class", "description");
			eventDescriptionInput.setAttribute("class", "event-description");

			let eventHorraireDebut = document.createElement("input");
			eventHorraireDebut.setAttribute("class", "horraire-input");
			eventHorraireDebut.setAttribute("type", "date");

			let eventHorraireFin = document.createElement("input");
			eventHorraireFin.setAttribute("class", "horraire-input");
			eventHorraireFin.setAttribute("type", "date");
			//

			[
				eventTitle,
				eventTitleInput,
				eventDescription,
				eventDescriptionInput,
				eventHorraireDebut,
				eventHorraireFin,
			].forEach((e) => eventForm.appendChild(e));
			parent.appendChild(eventForm);
		};

		let addHourContaner = (parent: HTMLElement) => {
			let hourContainer = document.createElement("div");
			hourContainer.setAttribute("class", "hour-container");
			for (let i = 0; i < 24; i++) {
				let h = document.createElement("div");
				h.setAttribute("class", "heure");
				h.innerHTML += `<p>${i}h</p>`;
				hourContainer.appendChild(h);
			}
			parent.appendChild(hourContainer);
		};

		let addEventContainer = (parent: HTMLElement) => {
			let eventContainer = document.createElement("div");
			eventContainer.setAttribute("class", "event-container");
			for (let i = 0; i < 47; i++) {
				let e = document.createElement("div");
				e.setAttribute("class", "event-place-holder");
				e.setAttribute("id", `p-h-${i + 1}`);

				eventContainer.appendChild(e);
			}

			parent.appendChild(eventContainer);
		};

		let addScheduler = (parent: HTMLElement) => {
			let scheduler = document.createElement("div");
			scheduler.className += "popup-scheduler";

			let registerEvent = document.createElement("div");
			registerEvent.setAttribute("class", "register-event");

			addEventForm(registerEvent);
			addButton(registerEvent);

			addHourContaner(scheduler);
			addEventContainer(scheduler);

			parent.appendChild(scheduler);
		};

		type TextAreaSpecs = {};
		/**
		 * @function addTextArea
		 * @param parent
		 * @param specs
		 * @returns void
		 */
		let addTextArea = (
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

		//rajouter un form avec titre , heure, description
		//make wrong code look wrong
		//gérer les unsafe input comme tel
		// se renseinger sur la sécurisation des input

		//I want to create polymorphic functions
		type buttonSpecs = {};
		/**
		 * @function addButton
		 * @param parent
		 * @param specs
		 * @returns void
		 */
		let addButton = (
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
				let container = document.getElementsByClassName(
					"scheduler-container",
				)[0];
				document.body.removeChild(container);
			};

			parent.appendChild(button);
		};

		//je pense que je vais devoir utiliser du javascript pour modifier du css
		// Mr stark, I dont feel so well ....
		/**!SECTION
		 * check css slotted, cue, active, webkit stuff
		 * check event auxclick
		 *
		 */
	};
}
