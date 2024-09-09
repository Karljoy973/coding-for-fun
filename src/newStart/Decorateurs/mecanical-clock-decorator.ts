import { DeleteController } from "../Controller/delete-controller";
import { GrabController } from "../Controller/grab-controller";
import { ResizeController } from "../Controller/resize-controller";
import { Controller, Model, View } from "../interfaces/types";
import { ClockNodeModel } from "../Model/clock-node-model";
import { Id } from "../Utils";
import { ButtonView } from "../View/button-view";
import { ContainerView } from "../View/container-view";
import { defaultStrategyDigitalTimeView } from "../View/StrategicView/time-view";

export class MecanicalClockDecorator {
	model: ClockNodeModel;
	views: View[];
	controllers: Controller[];
	private s: string;
	constructor() {
		this.Build();
	}

	/**
	 * @method Stringify -
	 * @description Transformer l'horloge en chaines de charactères
	 * @param tree
	 */
	Stringify = (tree: ClockNodeModel): void => {
		this.s += `NodeId: ${tree.IDELEMENT} - ParentId: ${
			tree.Parent?.IDELEMENT ?? "root"
		} - NodeType: ${tree.NodeType} - RootParent: ${tree.RootFootprint} \n`;
		if (!!tree.Children) {
			tree.Children.forEach((child) => {
				this.Stringify(child);
			});
		}
	};

	DisplayClockModel = () => {
		this.Stringify(this.model);
		console.log(this.s);
	};

	get ClockModel() {
		this.Stringify(this.model);
		return this.s;
	}

	private Build = () => {
		this.controllers = [];
		this.model = {} as ClockNodeModel;
	};
}
