import { Model, View, ViewSpecs } from "../interfaces/types";
import { Id } from "../Utils";
import { GenericView } from "./generic-view";

/**
 * @class ContainerView
 * @description Any element to structure our ui
 * @description you give me the CSS classes as one that wont be modified through your instance life cycle  and
 *  I set them as the element classes attribute with .setAttribute("class", baseClasses), you can give me some
 * classes that could change over time and when whenever you want you can add or remove some more classes
 * @property {object} eSpecs : {baseClasses: string; additionalClasses?: string}
 *
 * @method reset
 * @description Réinitialise les classes supplémentaires en vidant la propriété `additionalClasses`, mais conserve les `baseClasses`.
 *
 * @method addElementClass
 * @description Ajoute une classe CSS supplémentaire à `additionalClasses` pour l'élément conteneur, puis met à jour l'affichage.
 * @param {string} s - Nom de la classe CSS à ajouter.
 *
 * @method setElementAdditionalClasses
 * @description Remplace toutes les classes supplémentaires par une nouvelle chaîne de caractères et met à jour l'affichage de l'élément.
 * @param {string} s - Chaîne de caractères contenant les nouvelles classes CSS supplémentaires.
 *
 * @method update
 * @description Met à jour l'attribut `class` de l'élément HTML en combinant les `baseClasses` et `additionalClasses`.
 *
 * @method appendAdditionalContainerClass
 * @description Méthode placeholder (non implémentée) pour ajouter des classes CSS supplémentaires au conteneur.
 * @param {string} s - Classe CSS à ajouter.
 *
 * @method removeAdditionalContainerClass
 * @description Supprime une classe CSS spécifique de `additionalClasses` de l'élément conteneur, puis met à jour l'affichage.
 * @param {string} s - Nom de la classe CSS à supprimer.
 */
export class ContainerView extends GenericView {
  eSpecs: { baseClasses: string; additionalClasses?: string };
  constructor(
    override readonly model: Model,
    containerSpecs: Partial<ViewSpecs>,
  ) {
    super(model);
    this.self = document.createElement("div");
    this.self.setAttribute("id", Id.Build());
    this.eSpecs = { baseClasses: "" };
    if (!!containerSpecs.elementSpecs) {
      Object.assign(this.eSpecs, containerSpecs.elementSpecs);
    }
    this.update();
  }
  /**
   * @method reset
   * @description Réinitialise les classes supplémentaires en vidant la propriété `additionalClasses`, mais conserve les `baseClasses`.
   *
   */
  reset = () => {
    this.eSpecs.additionalClasses = "";
    this.update();
  };

  /**
   *  @method addElementClass
   * @description Ajoute une classe CSS supplémentaire à `additionalClasses` pour l'élément conteneur, puis met à jour l'affichage.
   * @param {string} s - Nom de la classe CSS à ajouter.
   *
   */
  addElementClass = (s: string) => {
    this.eSpecs.additionalClasses += ` ${s} `;
    this.update();
  };
  /**
   * @method setElementAdditionalClasses
   * @description Remplace toutes les classes supplémentaires par une nouvelle chaîne de caractères et met à jour l'affichage de l'élément.
   * @param {string} s - Chaîne de caractères contenant les nouvelles classes CSS supplémentaires.
   *  */
  setElementAdditionalClasses = (s: string) => {
    this.eSpecs.additionalClasses = s;
    this.update();
  };

  /**
   * @method update
   * @description Met à jour l'attribut `class` de l'élément HTML en combinant les `baseClasses` et `additionalClasses`.
   *
   */
  update = () => {
    this.self.setAttribute(
      "class",
      `${this.eSpecs.baseClasses} ${this.eSpecs.additionalClasses}`,
    );
  };

  /**
	  @method appendAdditionalContainerClass
 * @description Méthode placeholder (non implémentée) pour ajouter des classes CSS supplémentaires au conteneur.
 * @param {string} s - Classe CSS à ajouter.
 * 
	 */
  appendAdditionalContainerClass = (s: string) => {};
  /**
	 @method removeAdditionalContainerClass
 * @description Supprime une classe CSS spécifique de `additionalClasses` de l'élément conteneur, puis met à jour l'affichage.
 * @param {string} s - Nom de la classe CSS à supprimer.
	 */
  removeAdditionalContainerClass = (s: string) => {
    this.eSpecs.additionalClasses?.replace(s, "");
    this.update();
  };

  override appendChild: Function = (v: View) => {
    this.self.appendChild(v.self as HTMLElement);
  };
}
