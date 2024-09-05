//implements strategy design pattern

export interface StrategyTimeAreaView {
  execute(specs: any);
}

export class StrategyDigitalTimeView implements StrategyTimeAreaView {
  execute(specs: any) {
    throw new Error("Method not implemented.");
  }
}

export class StrategyNeedleTimeView implements StrategyTimeAreaView {
  execute(specs: any) {
    throw new Error("Method not implemented.");
  }
}
