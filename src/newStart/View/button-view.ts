import { Model } from "../interfaces/index";
import { Id } from "../Utils/index";
import { GenericView } from "./generic-view";



type ButtonViewSpecs = {
	readonly model: Model;
	element?: HTMLElement;
	icon?: HTMLElement;
	elementSpecs?: {
		baseClasses: string;
		additionalClasses?: string;
	};
	iconSpecs?: {
		baseClasses: string;
		additionalClasses?: string;
	};
};

/**
 * @class ButtonView
 * @description - responsible to create a button on a ui element either on a clock or on a simple container
 * every button has an icon coming from font-awsome, we could have implemented a strategy to impleemnt the icon
 * in case our client does not have internet, but this class instanciate the icon and appends it to the button
 * and you can manage the style through the lifecycle of instace with the methods
 *
 *  @attributes
 * @property {HTMLElement} i - Élément HTML représentant l'icône.
 * @property {object} eSpecs - Spécifications des classes CSS pour l'élément bouton, incluant les classes de base et additionnelles.
 * @property {object} iSpecs - Spécifications des classes CSS pour l'icône, incluant les classes de base et additionnelles.
 *
 * @methods
 * @method reset - Réinitialise les classes CSS supplémentaires de l'élément et de l'icône.
 * @method addIconClass - Ajoute une classe supplémentaire à l'icône.
 * @method addElementClass - Ajoute une classe supplémentaire à l'élément bouton.
 * @method setIconAdditionalClasses - Définit de nouvelles classes CSS supplémentaires pour l'icône.
 * @method setElementAdditionalClasses - Définit de nouvelles classes CSS supplémentaires pour l'élément bouton.
 * @method update - Met à jour les classes CSS de l'élément bouton et de l'icône.
 * @method appendAdditionalButtonClass - Ajoute une classe CSS supplémentaire au bouton (non implémenté).
 * @method appendAdditionalIconClass - Ajoute une classe CSS supplémentaire à l'icône (non implémenté).
 * @method removeAdditionalButtonClass - Retire une classe CSS supplémentaire de l'élément bouton.
 * @method removeAdditionalIconClass - Retire une classe CSS supplémentaire de l'icône.
 */
export class ButtonView extends GenericView {
	//element
	i: HTMLElement;
	eSpecs: { baseClasses: string; additionalClasses?: string };
	iSpecs: { baseClasses: string; additionalClasses?: string };
	//icon

	// /**
	//  * Constructeur avec plusieurs signatures permettant de créer un bouton avec différentes configurations.
	//  * @param model - Modèle lié à la vue du bouton.
	//  */
	// constructor(model: Model);
	// /**
	//  * Constructeur avec plusieurs signatures permettant de créer un bouton avec différentes configurations.
	//  * @param model - Modèle lié à la vue du bouton.
	//  * @param icon - Élément HTML optionnel qui représente l'icône à l'intérieur du bouton.
	//  */
	// constructor(model: Model, icon: HTMLElement);

	// /**
	//  * Constructeur avec plusieurs signatures permettant de créer un bouton avec différentes configurations.
	//  * @param model - Modèle lié à la vue du bouton.
	//  * @param element - Élément HTML optionnel qui représente le bouton.
	//  */
	// constructor(model: Model, element: HTMLElement);

	// /**
	//  * Constructeur avec plusieurs signatures permettant de créer un bouton avec différentes configurations.
	//  * @param model - Modèle lié à la vue du bouton.
	//  * @param element - Élément HTML optionnel qui représente le bouton.
	//  * @param icon - Élément HTML optionnel qui représente l'icône à l'intérieur du bouton.
	//  * @param elementSpecs - Spécifications optionnelles des classes CSS pour l'élément bouton.
	//  */
	// constructor(
	// 	model: Model,
	// 	element: HTMLElement,
	// 	elementSpecs: {
	// 		baseClasses: string;
	// 		additionalClasses?: string;
	// 	},
	// );

	// /**
	//  * Constructeur avec plusieurs signatures permettant de créer un bouton avec différentes configurations.
	//  * @param model - Modèle lié à la vue du bouton.
	//  * @param element - Élément HTML optionnel qui représente le bouton.
	//  * @param icon - Élément HTML optionnel qui représente l'icône à l'intérieur du bouton.
	//  * @param elementSpecs - Spécifications optionnelles des classes CSS pour l'élément bouton.
	//  * @param iconSpecs - Spécifications optionnelles des classes CSS pour l'icône.
	//  */
	// constructor(
	// 	model: Model,
	// 	element: HTMLElement,
	// 	elementSpecs: {
	// 		baseClasses: string;
	// 		additionalClasses?: string;
	// 	},
	// 	icon: HTMLElement,
	// 	iconSpecs: {
	// 		baseClasses: string;
	// 		additionalClasses?: string;
	// 	},
	// );
	constructor(model: Model, specs: Partial<ButtonViewSpecs>) {
		super(model);
		this.eSpecs = { baseClasses: "" };
		this.iSpecs = { baseClasses: "" };
		if (!!specs.element) {
			this.self = specs.element;
		} else {
			this.self = document.createElement("div");
		}

		if (!!specs.icon) {
			this.i = specs.icon;
		} else {
			this.i = document.createElement("i");
		}
		if (!!specs.elementSpecs)
			Object.assign(this.eSpecs, specs.elementSpecs);
		if (!!specs.iconSpecs) Object.assign(this.iSpecs, specs.iconSpecs);

		this.self.setAttribute("id", `${Id.Build()}`);
		this.i.setAttribute("id", `${Id.Build()}`);

		this.self.appendChild(this.i);
	}
	/**
	 * @method reset
	 * Réinitialise les classes CSS supplémentaires de l'élément et de l'icône, puis déclenche une mise à jour de l'affichage.
	 */
	reset = () => {
		this.eSpecs.additionalClasses = "";
		this.iSpecs.additionalClasses = "";
		this.update();
	};

	/**
	 * @method addIconClass
	 * Ajoute une classe supplémentaire à l'icône et met à jour l'affichage.
	 * @param s - Nom de la classe CSS à ajouter à l'icône.
	 */
	addIconClass = (s: string) => {
		this.iSpecs.additionalClasses += ` ${s} `;
		this.update();
	};

	/**
	 * @method addElementClass
	 * Ajoute une classe supplémentaire à l'élément bouton et met à jour l'affichage.
	 * @param s - Nom de la classe CSS à ajouter à l'élément bouton.
	 */
	addElementClass = (s: string) => {
		this.eSpecs.additionalClasses += ` ${s} `;
		this.update();
	};
	/**
	 * @method setIconAdditionalClasses
	 * Remplace les classes CSS supplémentaires actuelles de l'icône par celles spécifiées, puis met à jour l'affichage.
	 * @param s - Nouvelles classes CSS à assigner à l'icône.
	 */
	setIconAdditionalClasses = (s: string) => {
		this.iSpecs.additionalClasses = s;
		this.update();
	};

	/**
	 * @method setElementAdditionalClasses
	 * Remplace les classes CSS supplémentaires actuelles de l'élément bouton par celles spécifiées, puis met à jour l'affichage.
	 * @param s - Nouvelles classes CSS à assigner à l'élément bouton.
	 */
	setElementAdditionalClasses = (s: string) => {
		this.eSpecs.additionalClasses = s;
		this.update();
	};

	/**
	 * @method update
	 * Met à jour les classes CSS de l'élément et de l'icône en utilisant les classes de base et les classes supplémentaires définies.
	 */
	update = () => {
		this.self.setAttribute(
			"class",
			`${this.eSpecs.baseClasses} ${this.eSpecs.additionalClasses}`,
		);
		this.i.setAttribute(
			"class",
			`${this.iSpecs.baseClasses} ${this.iSpecs.additionalClasses}`,
		);
	};
	/**
	 * @method appendAdditionalButtonClass
	 * Ajoute une classe supplémentaire au bouton (non implémentée).
	 * @param s - Classe CSS à ajouter.
	 */
	appendAdditionalButtonClass = (s: string) => {};
	/**
	 * @method appendAdditionalIconClass
	 * Ajoute une classe supplémentaire à l'icône (non implémentée).
	 * @param s - Classe CSS à ajouter.
	 */
	appendAdditionalIconClass = (s: string) => {};
	/**
	 * @method removeAdditionalButtonClass
	 * Retire une classe CSS supplémentaire de l'élément bouton et met à jour l'affichage.
	 * @param s - Classe CSS à retirer.
	 */
	removeAdditionalButtonClass = (s: string) => {
		this.eSpecs.additionalClasses?.replace(s, "");
		this.update();
	};
	/**
	 * @method removeAdditionalIconClass
	 * Retire une classe CSS supplémentaire de l'icône et met à jour l'affichage.
	 * @param s - Classe CSS à retirer.
	 */
	removeAdditionalIconClass = (s: string) => {
		this.iSpecs.additionalClasses?.replace(s, "");
		this.update();
	};
}

