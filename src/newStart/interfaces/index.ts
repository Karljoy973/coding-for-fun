export interface View {
  readonly model: Model;
  self: HTMLElement;
  create?: Function;
}

export interface Model {
  IDELEMENT: IDElement;
}

export type IDElement = string;
export interface ControllerTarget {
	model: Model;
	view: View;
	init(): void;
};

export type NodeType = "Button" | "TimeArea" | "Container" | "LocalTime";

export interface Controller extends Partial<ControllerTarget> {}
