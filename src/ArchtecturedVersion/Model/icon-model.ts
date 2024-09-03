import { UIElementModel } from "../View/interfaces";

/**
 * @class IconModel
 * @field value:string - stores current font-icon class
 */
class IconModel implements UIElementModel {
	value = "fa-regular fa-square-plus";
}

/**
 * @class IconController
 * @description - uses font-icons as icon database
 * @argument model:IconModel - store the current icon class
 * @argument value:string - sets the new class
 */
class IconController {
	setIcon(model: IconModel, value: string) {
		model.value = value;
	}
}
