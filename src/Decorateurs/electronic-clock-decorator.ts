import { DeleteController } from '../Controller/delete-controller';
import { GrabController } from '../Controller/grab-controller';
import { LightController } from '../Controller/light-controller';
import { ResizeDuoController } from "../Controller/resize-duo-controller";
import { RotateController } from "../Controller/rotate-controller";
import { View, Controller } from "../interfaces/types";
import { ClockNodeModel } from "../Model/clock-node-model";
import { UpdateTimeFormatController } from "../Controller/update-time-format-controller";
import { Id } from "../Utils";
import { ButtonView } from "../View/button-view";
import { ContainerView } from "../View/container-view";
import { defaultStrategyDigitalTimeView } from "../View/StrategicView/default-strategy-digital-time-view";
import { DigitalView } from "../View/StrategicView/digital-view";
import { TimeBlinksController } from "../Controller/time-blinks-controller";

export class ElectronicClockDecorator {
	model: ClockNodeModel;
	views: View[];
	controllers: Controller[];
	private s: string;
	private rootNode: HTMLElement;
	constructor(rootNodeId: string) {
		this.rootNode = document.getElementById(rootNodeId) as HTMLElement;
		if (!this.rootNode) throw new Error("Invalid root node ID");
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
		// je pourrais faire une fonction qui va construire les, neouds les append entre eux, et les push dans le tableau de vues
		// puis réutiliser le tableau de vues pour faire l'affichage dans le dom en lisant le modèle réuccursivement, mais à la rigueur
		//autant le faire à la main.

		// node-1 : racine de l'horloge
		let id = Id.Build();
		this.s = "display tree : \n";
		const node1 = new ClockNodeModel(id, "Container", [], id, undefined);

		// node-2 : un enfant de node-1
		const node2 = new ClockNodeModel(
			Id.Build(),
			"Container",
			[],
			node1.IDELEMENT,
			node1,
		);

		// Les nodes 3 à 8 sont des boutons, tous enfants de node-2
		const node3 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node2,
		);
		const node4 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node2,
		);
		const node5 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node2,
		);
		const node6 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node2,
		);
		const node7 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node2,
		);
		const node8 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node2,
		);

		// node-9 : un autre enfant de node-1
		const node9 = new ClockNodeModel(
			Id.Build(),
			"TimeArea",
			[],
			node1.IDELEMENT,
			node1,
		);

		// Assigner les enfants à node-1

		this.views = [];

		// Vue pour le bouton node-3
		const buttonViewNode3 = new ButtonView(
			node3,
			{
				element: document.createElement("div"), // Modèle du bouton // set up le turn on / turn off de lumière
				icon: document.createElement("i"), // Élément icône
				elementSpecs: {
					baseClasses: "ui-component button base-light-button-class ",
					additionalClasses: "btn-lg",
				}, // Spécifications de l'élément
				iconSpecs: {
					baseClasses: "fa-regular fa-sun",
					additionalClasses: "fa-lg",
				},
			}, // Spécifications de l'icône
		);

		// Vue pour le bouton node-4
		const buttonViewNode4 = new ButtonView(node4, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "ui-component button ",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa-solid fa-gear",
				additionalClasses: "fa-lg",
			},
		});

		// Vue pour le bouton node-5
		const buttonViewNode5 = new ButtonView(node5, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "ui-component button ",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa-solid fa-xmark ",
				additionalClasses: "fa-lg",
			},
		});

		// Vue pour le bouton node-6
		const buttonViewNode6 = new ButtonView(node6, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "ui-component button",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa-solid fa-earth-americas",
				additionalClasses: "fa-lg",
			},
		});

		// Vue pour le bouton node-7
		const buttonViewNode7 = new ButtonView(node7, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "ui-component button ",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa-regular fa-clock ",
				additionalClasses: "fa-lg",
			},
		});

		// Vue pour le bouton node-8
		const buttonViewNode8 = new ButtonView(node8, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "ui-component button ",
				additionalClasses: "",
			},
			iconSpecs: {
				baseClasses: "fa-solid fa-arrow-rotate-left ",
				additionalClasses: "fa-lg",
			},
		});

		const node1View = new ContainerView(node1, {
			iconSpecs: {
				baseClasses: " ",
				additionalClasses: "",
			},
			elementSpecs: {
				baseClasses: "ui-component clock ",
				additionalClasses: "",
			},
		});
		const node2View = new ContainerView(node2, {
			elementSpecs: {
				baseClasses: "ui-component container",
				additionalClasses: "",
			},
		});

		let node9view = new defaultStrategyDigitalTimeView(node9, [
			new DigitalView("hours"),
			new DigitalView("minutes"),
			new DigitalView("seconds"),
		]);

		const node10 = new ClockNodeModel(
			Id.Build(),
			"Container",
			[],
			node1.IDELEMENT,
			node1,
		);

		const node11 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node10,
		);
		const node12 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node10,
		);
		const node13 = new ClockNodeModel(
			Id.Build(),
			"Button",
			[],
			node1.IDELEMENT,
			node10,
		);

		const node10View = new ContainerView(node10, {
			elementSpecs: {
				baseClasses: "ui-component container",
				additionalClasses: "",
			},
		});
		const buttonViewNode11 = new ButtonView(node8, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "ui-component button ",
				additionalClasses: "",
			},
			iconSpecs: {
				baseClasses: "fa-solid fa-arrows-rotate ",
				additionalClasses: "fa-lg",
			},
		});
		const buttonViewNode12 = new ButtonView(node8, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "ui-component button ",
				additionalClasses: "",
			},
			iconSpecs: {
				baseClasses: "fa-solid fa-up-right-and-down-left-from-center",
				additionalClasses: "",
			},
		});
		const buttonViewNode13 = new ButtonView(node8, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "ui-component button ",
				additionalClasses: "",
			},
			iconSpecs: {
				baseClasses: "fa-solid fa-down-left-and-up-right-to-center ",
				additionalClasses: "",
			},
		});

		node1View.appendChild(node2View);
		node1View.appendChild(node9view);
		node1View.appendChild(node10View);

		node2View.appendChild(buttonViewNode3);
		node2View.appendChild(buttonViewNode4);
		node2View.appendChild(buttonViewNode7);
		node2View.appendChild(buttonViewNode8);
		node2View.appendChild(buttonViewNode5);
		node2View.appendChild(buttonViewNode6);

		node10View.appendChild(buttonViewNode11);
		node10View.appendChild(buttonViewNode12);
		node10View.appendChild(buttonViewNode13);

		// const timeAreaView = new defaultStrategyDigitalTimeView();

		node1.appendChild(node2);
		node1.appendChild(node9);
		node1.appendChild(node10);

		// Assigner les enfants à node-2
		node2.appendChild(node3);
		node2.appendChild(node4);
		node2.appendChild(node5);
		node2.appendChild(node6);
		node2.appendChild(node7);
		node2.appendChild(node8);

		node10.appendChild(node11);
		node10.appendChild(node12);
		node10.appendChild(node13);

		Object.assign(this.model, node1);

		this.views.push(
			buttonViewNode3,
			buttonViewNode4,
			buttonViewNode5,
			buttonViewNode6,
			buttonViewNode7,
			buttonViewNode8,
		);
		//rajouter un bouton grab au lieu de grab l'horloge

		this.controllers.push(
			new DeleteController(node1View, buttonViewNode5),
			new GrabController(node1View),
			new LightController(node9view, buttonViewNode3),
			new ResizeDuoController(
				node1View,
				buttonViewNode12,
				buttonViewNode13,
			),
			new RotateController(node1View, buttonViewNode11),
			new UpdateTimeFormatController(node9view, buttonViewNode6),
			new TimeBlinksController(node9view, buttonViewNode4),
		);
		this.rootNode.appendChild(node1View.self);

		this.views.forEach((e) => e.self?.setAttribute("id", Id.Build()));
	};
}
