let i = 0;
export let buildView = () => {
  //cadrant circulaire
  let baseCadrantClass = "ui-component clock base-cadrant-class ";
  let Cadrant = document.createElement("div");
  Cadrant.setAttribute("class", baseCadrantClass);

  // zone lumineuse
  let baseLightAreaClass = "ui-component light-area base-light-area-class ";
  let additionalClassElement = ["light-off"];
  let lightArea = document.createElement("div");
  lightArea.setAttribute(
    "class",
    baseLightAreaClass + additionalClassElement[0]
  );

  // hour Element
  let baseHourElementClass =
    "ui-component hour-element base-hour-element-class ";
  let hourElement = document.createElement("p");
  hourElement.setAttribute("class", baseHourElementClass);

  //hour digit elements
  let baseHourDigitElementClass =
    "base-digital-hour base-digital-hour-element-class ";
  let hourDigitElement = document.createElement("span");
  hourDigitElement.setAttribute("class", baseHourDigitElementClass);

  //minutes digit elements
  let baseMinutesDigitElementClass = "base-minutes-digit-element-class ";
  let minutesDigitElement = document.createElement("span");
  minutesDigitElement.setAttribute("class", baseMinutesDigitElementClass);

  //secunds digit elements
  let baseSecundsDigitElementClass = "base-secunds-digit-element-class ";
  let secundsDigitElement = document.createElement("span");
  secundsDigitElement.setAttribute("class", baseSecundsDigitElementClass);

  //button container
  let baseButtonContainerClass =
    "ui-component container base-button-container-class ";
  let buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", baseButtonContainerClass);

  // boutton lumière
  let baseLightButtonClass = "ui-component button base-light-button-class ";
  let ligthButton = document.createElement("div");
  ligthButton.setAttribute("class", baseLightButtonClass);
  //icon
  let l_i = document.createElement("i");
  l_i.setAttribute("class", "fa-regular fa-sun ");
  ligthButton.appendChild(l_i);

  // boutton lumière
  let baseSettingsButtonClass =
    "ui-component button base-settings-button-class ";
  let settingsButton = document.createElement("div");
  settingsButton.setAttribute("class", baseSettingsButtonClass);
  //icon
  let s_i = document.createElement("i");
  s_i.setAttribute("class", "fa-solid fa-gear ");
  settingsButton.appendChild(s_i);

  // boutton heures
  let baseSwapHourStyleButtonClass =
    "ui-component button base-swap-hour-style-button-class ";
  let swapHourButton = document.createElement("div");
  swapHourButton.setAttribute("class", baseSwapHourStyleButtonClass);
  //icon
  let sh_i = document.createElement("i");

  sh_i.setAttribute("class", "fa-solid fa-earth-americas");
  swapHourButton.appendChild(sh_i);

  //AM PM button
  let baseHourButtonClass = "ui-component button base-hour-button-class ";
  let hourButton = document.createElement("div");
  hourButton.setAttribute("class", baseHourButtonClass);
  //icon
  let h_i = document.createElement("i");
  h_i.setAttribute("class", "fa-regular fa-clock ");
  hourButton.appendChild(h_i);

  //boutton reset
  let baseResetButtonClass = "ui-component button base-reset-button-class ";
  let buttonreset = document.createElement("div");
  buttonreset.setAttribute("class", baseResetButtonClass);
  //icon
  let r_i = document.createElement("i");
  r_i.setAttribute("class", "fa-solid fa-arrow-rotate-left ");
  buttonreset.appendChild(r_i);

  //setting up the tree
  //Je trouve que cette partie en Model fait vraiment beaucoup de sens

  let clockContainerChildren = [Cadrant];
  let cadrantChildren = [buttonContainer, lightArea]; //+icon
  let lightChildren = [hourElement];
  let hourElementChildren = [
    hourDigitElement,
    minutesDigitElement,
    secundsDigitElement,
  ];
  let buttonContainerChildren = [
    ligthButton,
    settingsButton,
    hourButton,
    buttonreset,
    swapHourButton,
  ];

  let root = document.getElementsByClassName("clock-container")[0];
  //Il me faudrait un moyen de faire une structure de données qui prend le parent et qui lui donne ses enfants (mais qui soit légère)
  //Il ferait donc sens de 'stocker cette structure de données en databaase par exemple
  //On aurait comme un specifier parent:T, enfants: K[] avec K extends any;
  //j'aurais bien aimé avoir un flag 'context' qui pourrait etre de type : HTML|WebXR|....
  //qui permettrait d'adapter la stratégie de construction, dans la vue
  //composition : building the tree
  lightChildren.forEach((e: HTMLDivElement) => lightArea.appendChild(e));
  buttonContainerChildren.forEach((e) => buttonContainer.appendChild(e));
  hourElementChildren.forEach((e) => hourElement.appendChild(e));
  cadrantChildren.forEach((e: HTMLDivElement) => Cadrant.appendChild(e));
  clockContainerChildren.forEach((e) => root.appendChild(e));

  return {
    views: {
      Cadrant,
      buttonContainer,
      lightArea,
      hourElement,
      hourDigitElement,
      minutesDigitElement,
      secundsDigitElement,
      ligthButton,
      settingsButton,
      hourButton,
      buttonreset,
      swapHourButton,
    },
    classes: {
      baseCadrantClass,
      additionalClassElement,
      baseResetButtonClass,
      baseHourButtonClass,
      baseSwapHourStyleButtonClass,
      baseSettingsButtonClass,
      baseLightButtonClass,
      baseButtonContainerClass,
      baseSecundsDigitElementClass,
      baseMinutesDigitElementClass,
      baseHourDigitElementClass,
      baseHourElementClass,
      baseLightAreaClass,
    },
    specs: {},
  };
};
