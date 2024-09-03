export interface UIElementView {
  element: HTMLElement;
  baseClass: string;
  additionalClasses: string;
}

export interface UIElementModel {
  children?: Array<any> | undefined | null;
  value?: any;
}
