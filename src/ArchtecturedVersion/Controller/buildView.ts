import { ElementModel } from "../../Model/element-model";
import { BaseView } from "../View/base-view";

export class BaseViewBuilderController {
	unfoldedTree: Array<BaseView>;
	/**
	 * @param node
	 * @param buildNode
	 */
	public buildView(node: ElementModel, nodeBuilder: NodeBuilder): void {
		if (!node) return;

		nodeBuilder.build(node);

		if (node.children && node.children.length > 0) {
			node.children.forEach((e) => this.buildView(e, nodeBuilder));
		}
	}
}

export class NodeBuilder {
	constructor() {}
	build(node: any): void {}
}
