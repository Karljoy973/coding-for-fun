import { IDElement, Model, NodeType } from "../interfaces/index";

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
 * Parent: undefined //means that htis node is the root element of the tree
 * Position: {x: 2, y:4, z:6},
 * Rotation: {x: 1, y: 1, z: 1, alpha: 0},
 * }
 *
 *  * "cqfj-154":{
 * NodeType: "time-area",
 * Children: ["bze-234", "cqfj-154", ...],
 * Parent: "abcd-123"
 * Position: {x: 2, y:4, z:6},
 * Rotation: {x: 1, y: 1, z: 1, alpha: 0},
 * }
 *
 * ...
 *
 *
 * ```
 * @property IDELEMENT - id of element in the database
 * @property NodeType - specific string that the view will implement its own way
 * @property Children - childen of this element un array under the hood leafs have undefined children
 * @property Parent - useful update the tree, root element has type null
 * @property Position - position : relative cartesian position in R3 space (x, y , z) coordinates. in 2d space z could be used as z-index (css)
 * @property Rotation - rotation : relative rotation, x, y, z, a are the homogenious compoenents, in 2d space only 'a' is used,
 *
 *  ### Methods
 *
 * @method update
 * @method appendChild - add a node to the tree
 * @method removeChild - removes a node to the tree
 */
export class ClockNodeModel implements Model {
  IDELEMENT: IDElement;
  NodeType: NodeType;
  Children: ClockNodeModel[] | undefined;
  Parent: ClockNodeModel | null | undefined;
  Position: { x: number; y: number; z: number };
  Rotation: { x: number; y: number; z: number; a: number };

  //throws event
  update = () => {};
  appendChild = () => {};
  removeChild = () => {};
  //add responsibility to tell views to update
}
