import { Controller, View } from "../interfaces/types";

/**
 * @class PressController
 * @description will handle the logic
 */
export class PressController implements Controller {
	constructor(view: View, controller: Controller) {}
	init = () => {
		// this._view.self.addEventListener("click", this.eventHandler);
	};

	eventHandler = (e: MouseEvent) => {};
}
