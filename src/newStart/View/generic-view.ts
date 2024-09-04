import { View, Model } from "../interfaces/index";

export class GenericView implements View {
  protected e: HTMLElement;
  constructor(readonly model: Model) {}
  self: HTMLElement;
}
