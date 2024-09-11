import { TimestampController } from "../../Controller/time-stamp-controller";
import { TimeResponsibility } from "../../interfaces/types";
import { Id } from "../../Utils";

export class DigitalView {
	timestamp: HTMLSpanElement;
	protected timeResponsibility: TimeResponsibility;
	protected timeController: TimestampController;
	constructor(timeResponsibiility: TimeResponsibility) {
		this.timeResponsibility = timeResponsibiility;
		this.timestamp = document.createElement("span");
		this.timestamp.setAttribute("id", Id.Build());
		// this.timestamp.setAttribute("class", "ui-component");
		this.timeController = new TimestampController();
		this.init();
	}

	init = () => {
		if (this.timeResponsibility == "hours") {
			setInterval(() => {
				this.timestamp.innerText =
					this.timeController.CurrentHour + ":";
			}, 10);
		}
		if (this.timeResponsibility == "minutes") {
			setInterval(() => {
				this.timestamp.innerText =
					this.timeController.CurrentMinute + ":";
			}, 10);
		}
		if (this.timeResponsibility == "seconds") {
			setInterval(() => {
				this.timestamp.innerText = this.timeController.CurrentSecond;
			}, 10);
		}
	};
}
