export class TimeZoneModel {
	public instance: Date;
	public hourOffset: number;
	public minuteOffset: number;
	public currentTime: string;
	public toggleFormat: boolean;
	constructor() {
		this.hourOffset = 0;
		this.minuteOffset = 0;
		this.instance = new Date();
		this.toggleFormat = true;
	}
	init() {}

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
