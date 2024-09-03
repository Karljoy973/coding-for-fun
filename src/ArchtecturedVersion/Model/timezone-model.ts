export class TimeZoneModel {
  public instance: Date;
  public hourOffset: number;
  public minuteOffset: number;
  public currentTime: string;
  public toggleFormat: boolean;
  public setIntervalId: NodeJS.Timeout;
  public that: TimeZoneModel;
  constructor() {
    this.hourOffset = 0;
    this.minuteOffset = 0;
    this.instance = new Date();
    this.toggleFormat = true;
    this.that = this;
  }
  public init = (ref: string) => {
    //voir dans IF comment ils font (double click)
    this.that.setIntervalId = setInterval(() => {
      let instance = new Date();
      instance.setHours(
        instance.getHours() + this.that.hourOffset,
        instance.getMinutes() + this.that.minuteOffset
      );
      let current = instance.toLocaleString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: this.that.toggleFormat,
      });
      ref = current;
    }, 10);
  };

  getCurrentTime() {
    return this.currentTime;
  }

  incrementHours() {
    this.hourOffset++;
  }
  incrementMinutes() {
    this.minuteOffset++;
  }
  resetInstance() {
    this.hourOffset = 0;
    this.minuteOffset = 0;
  }
  toggleAmPm() {
    this.toggleFormat = !this.toggleFormat;
  }
}
