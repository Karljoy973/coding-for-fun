import { UIElementModel } from "../View/interfaces";

/**
 * @class ElementModel
 * @field classList - all the classes
 * @field elementType - "container"|"clock"|"timestamp"|"button"|"icon"|undefined
 */
export class ElementModel implements UIElementModel {
  classList: string;
  children: Array<ElementModel> | undefined | null;
  elementType:
    | "container"
    | "clock"
    | "timestamp"
    | "button"
    | "icon"
    | undefined;
  constructor(
    classList: string,
    children: ElementModel[] | undefined,
    elementType:
      | "container"
      | "clock"
      | "timestamp"
      | "button"
      | "icon"
      | undefined
  ) {
    this.children = [];
    this.elementType = elementType;
    this.classList = classList;
    if (!!children) {
      this.children = [...children];
    }
  }
  addChild(child: ElementModel) {
    if (!!child) {
      this.children!.push(child);
    }
  }
  removeChild(child: UIElementModel) {
    if (!this.children) {
      return;
    }
    this.children = this.children!.filter((e) => Object.is(e, child));
  }
  addChildren(children: Array<ElementModel>) {
    if (!!children) {
      children.forEach((e) => this.addChild(e));
    }
  }
  removeChildren(children: Array<ElementModel>) {
    if (!!children) {
      children.forEach((e) => this.removeChild(e));
    }
  }
  clear() {
    this.children = null;
  }
}
