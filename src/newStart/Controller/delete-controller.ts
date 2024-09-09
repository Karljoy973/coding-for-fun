import { Controller, View } from "../interfaces/types";
import { GenericView } from "../View/generic-view";

export class DeleteController implements Controller {
	root: GenericView;
	private _view: View;
	constructor(rootParent: GenericView, view: GenericView) {
		this._view = view;
		this.root = rootParent;
		this._view.self?.addEventListener("click", (e) => {
			this.root.self.remove();
		});
	}

	get view() {
		return this._view;
	}
}
