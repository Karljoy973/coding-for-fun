import { Controller, View } from "../interfaces/index";

/**
 * @class PressController 
 * @description will handle the logic 
 */
export class PressController implements Controller {
	constructor() {}
	init = () => {
		// this._view.self.addEventListener("click", this.eventHandler);
	};

	eventHandler = (e: MouseEvent) => {};
}
