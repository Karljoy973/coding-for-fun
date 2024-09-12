import { Controller, View } from "../interfaces/types";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui.js";
import { GenericView } from "../View/generic-view";

//jquery under the hood
export class GrabController implements Controller {
	_view: View;
	get view() {
		return this._view;
	}
	constructor(view: View) {
		this._view = view;
		this._view.self!.addEventListener("mousedown", this.mouseDownHandler);
	}
	init = () => {
		if (!!this._view.self) {
			this._view.self.addEventListener("mousedown", this.mouseDownHandler);
		}
	};

	mouseDownHandler = (e: MouseEvent) => {
		let mover = (this._view as GenericView).self;
		mover.setAttribute("draggable", "true");
		$(function () {
			($(`#${mover.id}`) as any).draggable();
		});
	};
}
