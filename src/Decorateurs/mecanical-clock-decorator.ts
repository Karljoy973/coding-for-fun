import { GrabController } from "../Controller/grab-controller";
import { Controller, Model, View } from "../interfaces/types";
import { ClockNodeModel } from "../Model/clock-node-model";
import { Id } from "../Utils";
import { ContainerView } from "../View/container-view";
import { StrategicMecanicalTimeView } from "../View/StrategicView/strategic-mecanical-time-view";

export class MecanicalClockDecorator {
  model: ClockNodeModel;
  views: View[];
  controllers: Controller[];
  private s: string;
  protected rootNode: HTMLElement;
  constructor(rootContainerId: string) {
    this.rootNode = document.getElementById(rootContainerId) as HTMLElement;
    if (!this.rootNode) throw new Error("Invalid rootNode Id");
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
    let rootID = Id.Build();
    this.model = new ClockNodeModel(
      "Container",
      undefined,
      rootID,
      undefined,
    );

    const thisModelView = new ContainerView(this.model, {
      elementSpecs: {
        baseClasses: "rounded-clock",
        additionalClasses: "",
      },
    });

    let needles = new StrategicMecanicalTimeView(this.model, {
      numberOfHourNeedles: 1,
      numberOfMinuteNeedles: 1,
      numberOfSecondNeedles: 1,
    });

    this.rootNode.appendChild(thisModelView.self);
    thisModelView.self.appendChild(needles.self);

    this.controllers.push(new GrabController(thisModelView, thisModelView ));
  };
}
