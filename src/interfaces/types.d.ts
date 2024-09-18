export interface View {
  readonly model: Model;
  self?: HTMLElement;
  create?: Function;
}

export interface Model {
  IDELEMENT: IDElement;
}

export interface NodeModel<T> extends Model {
  Children: T[];
}

export type IDElement = string;
export interface ControllerTarget {
  model: Model;
  view: View;
}

export type NodeType = "Button" | "TimeArea" | "Container" | "LocalTime";

export interface Controller extends Partial<ControllerTarget> {}

export type ViewSpecs = {
  readonly model: Model;
  element?: HTMLElement;
  icon?: HTMLElement;
  elementSpecs?: {
    baseClasses: string;
    additionalClasses?: string;
  };
  iconSpecs?: {
    baseClasses: string;
    additionalClasses?: string;
  };
};

export type TimeResponsibility = "hours" | "minutes" | "seconds";

/**
 * @interface StrategyTimeAreaView
 * @method execute - Execute a strategy to build the time view, suitable to build a view like 10:07:03 or a clock with some handles
 * or something else.
 */
export interface StrategyTimeAreaView extends View {
  execute(specs: any): any;
}
