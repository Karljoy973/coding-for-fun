import { Controller, View } from "../interfaces/types";
import { GenericView } from "../View/generic-view";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui.js";

export class ResizeController implements Controller {
	_emittingView: View;
	_targettedView: View;
	scale: number;
	get view() {
		return this._emittingView;
	}
	constructor(targettedView: View, emmittingView: View) {
		this._emittingView = emmittingView;
		this.scale = 1;
	}
	init = () => {};

	upScale = () => {
		(this._emittingView as GenericView).self.addEventListener(
			"mousedown",
			() => {
				(
					this._targettedView as GenericView
				).self.style.transform = `scale(${this.scale * 1.5}, ${
					this.scale * 1.5
				})`;
			},
		);
	};
	downScale = () => {
		(this._emittingView as GenericView).self.addEventListener(
			"mouseup",
			() => {
				(
					this._targettedView as GenericView
				).self.style.transform = `scale(${this.scale * 0.8}, ${
					this.scale * 0.8
				})`;
			},
		);
	};
}
