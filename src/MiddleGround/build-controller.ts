export let buildController = (
	registeredViews: {
		Cadrant: HTMLElement;
		buttonContainer: HTMLElement;
		lightArea: HTMLElement;
		hourElement: HTMLElement;
		hourDigitElement: HTMLElement;
		minutesDigitElement: HTMLElement;
		secundsDigitElement: HTMLElement;
		ligthButton: HTMLElement;
		settingsButton: HTMLElement;
		hourButton: HTMLElement;
		buttonreset: HTMLElement;
		swapHourButton: HTMLElement;
		deleteButton: HTMLElement;
	},
	registedClassElements: {
		baseDeleteButtonClass: string;
		baseCadrantClass: string;
		additionalClassElement: string[];
		baseResetButtonClass: string;
		baseHourButtonClass: string;
		baseSwapHourStyleButtonClass: string;
		baseSettingsButtonClass: string;
		baseLightButtonClass: string;
		baseButtonContainerClass: string;
		baseSecundsDigitElementClass: string;
		baseMinutesDigitElementClass: string;
		baseHourDigitElementClass: string;
		baseHourElementClass: string;
		baseLightAreaClass: string;
	},
) => {
	let hourIncr = 0;
	let minIncr = 0;
	let states = [0, 1, 2, 3];
	let stateCheck = 0;
	let currentState = 0;
	let previousState = 0;
	let timeToWait = 300;

	//turn light on :
	registeredViews.ligthButton.addEventListener("click", (e) => {
		if (registeredViews.lightArea.className.includes("light-on")) {
			registedClassElements.additionalClassElement[0] = "light-off";
		}
		if (registeredViews.lightArea.className.includes("light-off")) {
			registedClassElements.additionalClassElement[0] = "light-on";
		}
		registeredViews.lightArea.setAttribute(
			"class",
			registedClassElements.baseLightAreaClass +
				registedClassElements.additionalClassElement[0],
		);
	});

	registeredViews.buttonreset.addEventListener("click", (e) => {
		hourIncr = 0;
		minIncr = 0;
	});

	let notFrenchHourFormat = true;
	// add boolean to manage hour12 + manage state in event listener (am/pm)
	setInterval(() => {
		let now = new Date();
		now.setHours(now.getHours() + hourIncr, now.getMinutes() + minIncr);
		let current = now.toLocaleString(undefined, {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			day: undefined,
			hour12: notFrenchHourFormat,
		});
		registeredViews.hourDigitElement.innerText = `${current[0]}${current[1]}:`;
		registeredViews.minutesDigitElement.innerText = `${current[3]}${current[4]}:`;
		registeredViews.secundsDigitElement.innerText = `${current[6]}${current[7]}`;
	}, 10);

	registeredViews.swapHourButton.addEventListener(
		"click",
		(e) => (notFrenchHourFormat = !notFrenchHourFormat),
	);

	let timer: NodeJS.Timeout;
	let leaveTimer: NodeJS.Timeout;

	registeredViews.settingsButton.addEventListener("click", (e) => {
		stateCheck++;
		if (stateCheck == 1 && previousState == states[0]) {
			timer = setTimeout(() => {
				stateCheck = 0;
				currentState = states[0];
			}, timeToWait);

			currentState = states[1];
		} else if (stateCheck == 2) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				stateCheck = 0;
				currentState = states[0];
			}, timeToWait);

			currentState = states[2];
			previousState = states[1];
		} else if (stateCheck == 3) {
			stateCheck = 0;
			previousState = states[2];
			currentState = states[0];
		}
	});
	registeredViews.settingsButton.addEventListener("mouseleave", (e) => {
		if (!!leaveTimer) clearTimeout(leaveTimer);
		leaveTimer = setTimeout(() => {
			stateCheck = 0;
			// currentState = states[0]
			registeredViews.hourDigitElement.setAttribute("class", "");
			registeredViews.minutesDigitElement.setAttribute("class", "");
		}, timeToWait * 100);
	});

	registeredViews.settingsButton.addEventListener("click", (e) => {
		console.log(previousState);

		if (currentState == states[1]) {
			registeredViews.hourDigitElement.setAttribute(
				"class",
				"isBlinking",
			);
			console.log("hours blink");
		} else {
			registeredViews.hourDigitElement.setAttribute("class", "");
		}
		if (currentState == states[2]) {
			console.log("minutes blink");
			registeredViews.minutesDigitElement.setAttribute(
				"class",
				"isBlinking",
			);
		} else {
			registeredViews.minutesDigitElement.setAttribute("class", "");
		}
		if (currentState == states[0] || previousState == states[2]) {
			registeredViews.hourDigitElement.setAttribute("class", "");
			registeredViews.minutesDigitElement.setAttribute("class", "");
			currentState = states[0];
		}
	});

	registeredViews.hourButton.addEventListener("click", (e) => {
		if (currentState == states[1]) {
			hourIncr++;
		}
		if (currentState == states[2]) {
			minIncr++;
		}
	});

	document.addEventListener("click", (e) => {
		if (
			(e.target as HTMLElement) instanceof HTMLDivElement &&
			(e.target as HTMLElement).parentElement instanceof HTMLDivElement &&
			(e.target as HTMLElement).parentElement?.parentElement instanceof
				HTMLDivElement
		) {
			(e.target as HTMLElement).parentElement!.parentElement!.remove();
		}
	});

	// let xStart: number,
	// 	yStart: number,
	// 	xCurr: number,
	// 	yCurr: number,
	// 	initialX: number,
	// 	rect: DOMRect,
	// 	initialY: number;
	// let clickDetected = false;
	// registeredViews.Cadrant.addEventListener("mousedown", (e) => {
	// 	// Capture la position initiale de la souris au moment du clic
	// 	const rect = registeredViews.Cadrant.getBoundingClientRect();
	// 	initialX = rect.left;
	// 	initialY = rect.top;
	// 	xStart = e.clientX;
	// 	yStart = e.clientY;
	// 	if (
	// 		(e.target as HTMLElement).className.includes(
	// 			registedClassElements.baseCadrantClass,
	// 		)
	// 	) {
	// 		clickDetected = true; // Indique que le clic est détecté
	// 	} else clickDetected = false;
	// });

	// registeredViews.Cadrant.addEventListener("mousemove", (e) => {
	// 	if (
	// 		!(e.target as HTMLElement).className.includes(
	// 			registedClassElements.baseCadrantClass,
	// 		)
	// 	) {
	// 		clickDetected = false;
	// 	}
	// 	if (clickDetected) {
	// 		// Calcule la différence de position de la souris
	// 		xCurr = e.clientX - xStart;
	// 		yCurr = e.clientY - yStart;

	// 		// Applique la transformation en utilisant translate pour déplacer l'élément
	// 		registeredViews.Cadrant.style.transform = `translate(${
	// 			initialX + xCurr
	// 		}px, ${initialY + yCurr}px)`;
	// 	}
	// });

	// registeredViews.Cadrant.addEventListener("mouseup", () => {
	// 	clickDetected = false; // Stoppe le mouvement lorsque la souris est relâchée

	// 	// Met à jour les coordonnées initiales après le déplacement
	// 	rect = registeredViews.Cadrant.getBoundingClientRect();
	// 	initialX = rect.left;
	// 	initialY = rect.top;
	// });
};
