import { UIElementView } from "./interfaces";

export abstract class BaseView implements UIElementView {
  element: HTMLElement;
  baseClass: string;
  additionalClasses: string;

  update(value: string): void {}
  reset(): void {}
}
