export interface View {
  readonly model: Model;
  self: HTMLElement;
  create?: Function;
}

export interface Model {
  IDELEMENT: IDElement;
}

export type IDElement = string;
export type ControllerTarget = {
  model: Model;
  view: View;
};

export type NodeType = "Button" | "TimeArea" | "Container" | "LocalTime";

export interface Controller extends Partial<ControllerTarget> {}
