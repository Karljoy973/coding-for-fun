class _Debugger {
	debugSection: HTMLElement;
	private isActive: boolean;
	constructor() {
		this.debugSection = document.createElement("p");
		document.body.appendChild(this.debugSection);
		this.debugSection.style.position = "absolute";
		this.debugSection.setAttribute("id", "debug-section");
		let x = 0;
		let y = 0;
		this.debugSection.innerText = "debugger is activated";
		this.isActive = false;
	}

	get debuggerField() {
		return this.debugSection;
	}

	public debugHandler() {
		console.log("hello world");
	}
	public init() {
		document.addEventListener("mousedown", (e) => this.debugHandler());
	}
	public disable() {
		document.removeEventListener("mousedown", (e) => this.debugHandler());
	}
}

let Debugger = new _Debugger();

Debugger.init();

namespace CoordinateSystem {
	interface angle extends Number {}

	class polar {
		public φ: angle;
		private r: number;
		public arcLength: number;
		constructor();
		constructor(φ: angle);
		constructor(r: number, φ: number);

		constructor(φ?: angle, r?: number) {
			φ ? (this.φ = φ) : (this.φ = 0);
			r ? (this.r = r) : (this.r = 1);
			this.arcLength = this.r * Number.parseFloat(`${this.φ}`);
		}

		euclidianToPolar(e: euclidian): polar {
			let _r: number;
			let _φ: number;
			if (!(e.x > 0.05 || (e.x < -0.05 && e.y > 0.05) || e.y < -0.05)) {
				return new polar();
			}
			_r = Math.sqrt(e.x ** e.x + e.y ** e.y);
			_φ = Math.acos(e.x / _r);

			return new polar(_r, _φ);
		}
	}
	class euclidian {
		x: number;
		y: number;
		constructor() {
			this.x = 0;
			this;
			y = 0;
		}
	}
	class cylindric {
		constructor() {}
	}
	class spherical {
		constructor() {}
	}
}
