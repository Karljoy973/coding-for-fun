/**
 * @class IconView
 * @description gets the font icon that corresponds to the class and diplays it as html element
 */
class IconView {
	element: HTMLElement;
	constructor(iconClass: string) {
		this.element = document.createElement("i");
		this.element.setAttribute("class", iconClass);
	}
}