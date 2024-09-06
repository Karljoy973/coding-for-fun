//implements strategy design pattern

import { Model, , View } from "../interfaces";

/**
 * @interface StrategyTimeAreaView
 * @method execute - Execute a strategy to build the time view, suitable to build a view like 10:07:03 or a clock with some handles
 * or something else.
 */
export interface StrategyTimeAreaView extends View {
	execute(specs: any): any;
}

/**
 * @class StrategyDigitalTimeView
 *@method execute : builds a view on the time like 10:07:03
 *
 * >@argument specs - necessary sppecs to create the view
 */
export class StrategyDigitalTimeView implements StrategyTimeAreaView {
	model: Model;
	self: HTMLElement;
	create?: Function;
	execute(specs: any) {
		throw new Error("Method not implemented.");
	}
}

/**
 * @class StrategyNeedleTimeView
 *@method execute : builds a view on the time @see https://www.manutan.fr/fr/maf/horloge
 *
 * >@argument specs - necessary sppecs to create the view
 */
export class StrategyNeedleTimeView implements StrategyTimeAreaView {
	model: Model;
	self: HTMLElement;
	create?: Function;
	execute(specs: any) {
		throw new Error("Method not implemented.");
	}
}
