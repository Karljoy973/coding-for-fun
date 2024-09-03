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
	},
	registedClassElements: {
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

	registeredViews.Cadrant.addEventListener("click", (e) => {
		registeredViews.Cadrant.setAttribute("draggable", "true");
		//set grab state then do stuff
	});

	registeredViews.hourButton.addEventListener("click", (e) => {
		if (currentState == states[1]) {
			hourIncr++;
		}
		if (currentState == states[2]) {
			minIncr++;
		}
	});
};
