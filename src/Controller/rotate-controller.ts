import { Controller, View } from "../interfaces/types";

export class RotateController implements Controller {
  emitter: View;
  targettedView: View;
  private activated: boolean;
  private rotationMatrix: number[][];
  private currentAngle: number;
  private timeoutId: NodeJS.Timeout | undefined;
  get view(): View {
    return this.targettedView;
  }
  constructor(targettedView: View, emitter: View) {
    this.rotationMatrix = [
      [0, 0],
      [0, 0],
    ];
    this.currentAngle = 0;
    this.emitter = emitter;
    this.targettedView = targettedView;
    this.activated = false;

    this.emitter.self?.addEventListener(
      "mouseleave",
      this.rotateMouseUpHandler,
    );
    this.emitter.self?.addEventListener(
      "mouseenter",
      this.rotateMouseMoveHandler,
    );
  }

  private rotateMouseUpHandler = (e: MouseEvent) => {
    e.preventDefault();
    clearInterval(this.timeoutId);
    this.timeoutId = undefined;
  };
  private rotateMouseMoveHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (!this.timeoutId) {
      this.timeoutId = setInterval(() => {
        this.currentAngle += Math.PI * 0.01;
        this.rotationMatrix[0][0] = Math.cos(-this.currentAngle);
        this.rotationMatrix[0][1] = -Math.sin(-this.currentAngle);
        this.rotationMatrix[1][0] = Math.sin(-this.currentAngle);
        this.rotationMatrix[1][1] = Math.cos(-this.currentAngle);
        this.targettedView.self!.setAttribute(
          "style",
          `transform: matrix(${this.rotationMatrix[0][0]}, ${
            this.rotationMatrix[0][1]
          }, ${this.rotationMatrix[1][0]}, ${
            this.rotationMatrix[1][1]
          }, ${+this.targettedView.self!.style.left.replace(
            "px",
            "",
          )}, ${+this.targettedView.self!.style.top.replace("px", "")}  );`,
        );
      }, 10);
    }
  };
}
