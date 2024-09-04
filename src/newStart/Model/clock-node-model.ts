import { IDElement, Model, NodeType } from "../interfaces/index";

export class ClockNodeModel implements Model {
  IDELEMENT: IDElement;
  NodeType: NodeType;
  children: ClockNodeModel[];
  parent: ClockNodeModel | null | undefined;

  //throws event
  update = () => {};
  appendChild = () => {};
  removeChild = () => {};
  //add responsibility to tell views to update
}
