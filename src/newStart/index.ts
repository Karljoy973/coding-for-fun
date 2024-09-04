export type IDElement = string;
export type ControllerTarget = {
	model: Model;
	view: View;
};

export type NodeType = "button" | "LightArea" | "Container";

export interface Model {}
export interface View {
	readonly model: Model;
	create?: Function;
}

export interface Controller extends Partial<ControllerTarget> {}

export class ClockNodeModel implements Model {
	IDELEMENT: IDElement;
	NodeType: NodeType;
	children: ClockNodeModel[];
}

export class GenericView implements View {
	constructor(readonly model: Model) {}
}

export class ButtonView extends GenericView {
	constructor(override readonly model: Model) {
		super(model);
	}
}
export class LightAreaView extends GenericView {}
export class ContainerView extends GenericView {}
