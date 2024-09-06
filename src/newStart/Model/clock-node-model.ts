import { IDElement, NodeModel, NodeType } from "../interfaces/index";

/**
 * @class ClockNodeModel - Gives the necessary data to build a clock in any context
 *
 * ### Context
 *
 * @description A clock is designed as a tree at its core, the tree could be store in a database, then when we want to
 * create a clock view, we do it in our context so we get the tree from the back-end and give it a meaning in our context.
 * this class is actually a proxy to the "true" model, I view the model as follows :
 * ```
 * "abcd-123":{
 * NodeType: "container",
 * Children: ["bze-234", "cqfj-154", ...],
 * Parent: undefined, //means that htis node is the root element of the tree
 * Position: {x: 2, y:4, z:6},
 * Rotation: {x: 1, y: 1, z: 1, alpha: 0},
 * RootFootprint: "abcd-123"
 * }
 *
 *  * "cqfj-154":{
 * NodeType: "time-area",
 * Children: ["bze-234", "cqfj-154", ...],
 * Parent: "abcd-123",
 * Position: {x: 2, y:4, z:6},
 * Rotation: {x: 1, y: 1, z: 1, alpha: 0},
 * RootFootprint : "abcd-123"
 * }
 *
 * ...
 *
 *
 * ```
 * @property IDELEMENT - id of element in the database
 * @property NodeType - specific string that the view will implement its own way
 * @property Children - childen of this element un array under the hood leafs have undefined children
 * @property Parent - useful update the tree, root element has type null,
 * @property Position - position : relative cartesian position in R3 space (x, y , z) coordinates. in 2d space z could be used as z-index (css),
 * @property Rotation - rotation : relative rotation, x, y, z, a are the homogenious compoenents, in 2d space only 'a' is used,
 * @property RootFootprint - allows to track the clock - I could not find a simple way to delete the whole clock without keeping a flag of it across
 * its children. We could have a clock within a clock so just checking for the parent is not enough
 *
 *  ### Methods
 *
 * @method update
 * @method appendChild - add a node to the tree
 * @method removeChild - removes a node to the tree
 */
export class ClockNodeModel implements NodeModel<ClockNodeModel> {
  IDELEMENT: IDElement;
  NodeType: NodeType;
  Children: ClockNodeModel[];
  RootFootprint: IDElement;
  Parent: ClockNodeModel | undefined;
  Position: { x: number; y: number; z: number };
  Rotation: { x: number; y: number; z: number; a: number };

  constructor(
    id: string,
    nodeType: NodeType,
    chilren: ClockNodeModel[] | undefined,
    rootfootprint: IDElement,
    parent: ClockNodeModel | undefined,
    position?: { x: number; y: number; z: number },
    rotation?: { x: number; y: number; z: number }
  ) {
    this.IDELEMENT = id;
    this.NodeType = nodeType;
    this.Children = [];
    if (!!chilren) {
      this.Children = [...(chilren as ClockNodeModel[])];
    }
    this.RootFootprint = rootfootprint;
    this.Parent = undefined;
    if (!!parent) {
      this.Parent = {} as ClockNodeModel;
      Object.assign(this.Parent as ClockNodeModel, parent);
    }

    this.Position = { x: 0, y: 0, z: 0 };
    this.Rotation = { x: 0, y: 0, z: 0, a: 0 };

    if (!!position) {
      Object.assign(this.Position, position as any);
    }
    if (!!rotation) {
      Object.assign(this.Rotation, rotation as any);
    }
  }

  appendChild = (child: ClockNodeModel) => {
    this.Children!.push(child);
  };
  removeChild = (child: ClockNodeModel) => {
    this.Children!.filter((e) => e.IDELEMENT != child.IDELEMENT);
  };
  //add responsibility to tell views to update
}
