import { View, Model } from "../interfaces/index";

export class GenericView implements View {
  constructor(readonly model: Model) {}
  self: HTMLElement;
  create?: Function;
}
