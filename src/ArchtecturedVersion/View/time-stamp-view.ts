import { ElementModel } from "../Model/element-model";
import { UIElementView } from "./interfaces";

/**
 * @class TimestampView
 * @field element: HTMLDivElement
 * @field
 * @field
 */
export class TimestampView implements UIElementView {
  element: HTMLDivElement;
  baseClass: string;
  additionalClasses: string;
  private hours: HTMLSpanElement;
  private minutes: HTMLSpanElement;
  private secunds: HTMLSpanElement;
  trackedModel: ElementModel;
  additionalStyle: string;
  constructor(readonly model: ElementModel) {
    this.element = document.createElement("div");
    this.hours = document.createElement("span");
    this.minutes = document.createElement("span");
    this.secunds = document.createElement("span");
    this.trackedModel = model;
    this.baseClass = this.trackedModel.classList;
    this.additionalStyle = "";
    this.element.setAttribute("class", this.trackedModel.classList);
    this.element.appendChild(this.hours);
    this.element.appendChild(this.minutes);
    this.element.appendChild(this.secunds);
  }
  buttonClass: string;
  addStyle(s: string) {
    this.additionalStyle += ` ${s} `;
    this.update();
  }
  update() {
    this.element.setAttribute(
      "class",
      this.trackedModel.classList + this.additionalStyle
    );
  }
  /**
   *
   * @param format formats d'heures
   * @param value entre 0 et 23, les autres valeurs seront ignorées
   */
  setHours(format: "AM" | "PM", value: number | string) {
    if (format == "AM" && (+value > 0 || +value < 12)) {
      if (typeof value == "number") {
        this.hours.innerText = value.toFixed(0);
      }
      if (typeof value == "string") {
        this.hours.innerText = (+value).toFixed(0);
      }
    }
    if (format == "PM" && (+value > 0 || +value < 24)) {
      if (typeof value == "number") {
        this.hours.innerText = value.toFixed(0);
      }
      if (typeof value == "string") {
        this.hours.innerText = (+value).toFixed(0);
      }
    }
  }
  /**
   *
   * @param value entre 0 < x <60 les autres valeurs seront ignorées
   */
  setMinutes(value: number | string) {
    if (+value > 0 || +value < 60) {
      if (typeof value == "number") {
        this.hours.innerText = value.toFixed(0);
      }
      if (typeof value == "string") {
        this.hours.innerText = (+value).toFixed(0);
      }
    }
  }
  /**
   *
   * @param value entre 0 < x <60 les autres valeurs seront ignorées
   */
  setSeconds(value: number | string) {
    if (+value > 0 || +value < 60) {
      if (typeof value == "number") {
        this.hours.innerText = value.toFixed(0);
      }
      if (typeof value == "string") {
        this.hours.innerText = (+value).toFixed(0);
      }
    }
  }
  /**
   *
   * @param format format d'heures
   * @param value - format d'heure, je fais confiance à l'utilisateur, on pourrait split la chaine à partir du séparateur et vérifier des conditions mais c'est moi le client et je ne vais pas faire de betises
   * @param separator - par défaut : ':' mais surtout présent dans l'idée
   */
  setTimestamp(format: "AM" | "PM", value: string, separator?: string) {
    this.hours.innerHTML = value;
    this.minutes.innerHTML = "";
    this.secunds.innerHTML = "";
  }
  reset() {
    this.additionalStyle = "";
    this.update();
  }
}
