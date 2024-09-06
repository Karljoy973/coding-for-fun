import { Controller, Model, View } from "../interfaces";
import { ClockNodeModel } from "../Model/clock-node-model";
import { Id } from "../Utils";
import { ButtonView } from "../View/button-view";
import { ContainerView } from "../View/container-view";
import { StrategyDigitalTimeView } from "../View/time-view";

export class MecanicalClockDecorator {
	model: ClockNodeModel;
	views: View[];
	controllers: Controller[];
	private s: string;
	constructor() {
		this.model = {} as ClockNodeModel;
		// node-1 : racine de l'horloge
		let id = Id.Build();
		console.log(Id.Build());
		this.s = "";
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
		node1.appendChild(node2);
		node1.appendChild(node9);

		// Assigner les enfants à node-2
		node2.appendChild(node3);
		node2.appendChild(node4);
		node2.appendChild(node5);
		node2.appendChild(node6);
		node2.appendChild(node7);
		node2.appendChild(node8);

		Object.assign(this.model, node1);
		this.views = [];

		// Vue pour le bouton node-3
		const buttonViewNode3 = new ButtonView(
			node3,
			{
				element: document.createElement("div"), // Modèle du bouton
				icon: document.createElement("i"), // Élément icône
				elementSpecs: {
					baseClasses: "btn btn-primary",
					additionalClasses: "btn-lg",
				}, // Spécifications de l'élément
				iconSpecs: {
					baseClasses: "fa fa-play",
					additionalClasses: "fa-lg",
				},
			}, // Spécifications de l'icône
		);

		// Vue pour le bouton node-4
		const buttonViewNode4 = new ButtonView(node4, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "btn btn-secondary",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa fa-pause",
				additionalClasses: "fa-lg",
			},
		});

		// Vue pour le bouton node-5
		const buttonViewNode5 = new ButtonView(node5, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "btn btn-success",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa fa-stop",
				additionalClasses: "fa-lg",
			},
		});

		// Vue pour le bouton node-6
		const buttonViewNode6 = new ButtonView(node6, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "btn btn-danger",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa fa-backward",
				additionalClasses: "fa-lg",
			},
		});

		// Vue pour le bouton node-7
		const buttonViewNode7 = new ButtonView(node7, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "btn btn-warning",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa fa-forward",
				additionalClasses: "fa-lg",
			},
		});

		// Vue pour le bouton node-8
		const buttonViewNode8 = new ButtonView(node8, {
			element: document.createElement("div"),
			icon: document.createElement("i"),
			elementSpecs: {
				baseClasses: "btn btn-info",
				additionalClasses: "btn-lg",
			},
			iconSpecs: {
				baseClasses: "fa fa-fast-forward",
				additionalClasses: "fa-lg",
			},
		});

		const clockContainerView = new ContainerView(node2);

		const timeAreaView = new StrategyDigitalTimeView();

		this.views.push(
			buttonViewNode3,
			buttonViewNode4,
			buttonViewNode5,
			buttonViewNode6,
			buttonViewNode7,
			buttonViewNode8,
			clockContainerView,
			// timeAreaView,
		);
		this.views.forEach((e) => e.self.setAttribute("id", Id.Build()));
	}

	Stringify = (tree: ClockNodeModel): string => {
		if (!tree.Children) {
			this.s += `NodeId: ${tree.IDELEMENT} - NodeType: ${tree.NodeType} - RootParent: ${tree.RootFootprint}`;
			console.log(this.s);
		}
		tree.Children.forEach((child) => {
			if (!child.Children) {
				this.s += `NodeId: ${child.IDELEMENT} - NodeType: ${child.NodeType} - RootParent: ${child.RootFootprint}`;
			}
			this.Stringify(child);
		});
		console.log(this.s);
		return this.s;
	};

	DisplayClock = () => {
		console.log(this.Stringify(this.model));
	};
}

/**!SECTION
 * 									node1
 * 				node 2 											node 9
 *
 * 		node 3  ... node 8
 *
 * algo(node)
 * node.children(child => {
 * if !node.children => display(node.id)
 * else algo(node.child)
 * })
 */
