import {
	calendrierCaseJourModelSpecs,
	calendrierLigneSemaineModelSpecs,
	calendrierMoisModelSpecs,
} from "./types";

export let calendrierPanneauMoisModel: calendrierMoisModelSpecs = {
	nombreSemaines: 5,
	//peut-etre d'autres choses à venir
};
export let calendrierLigneSemaineModel: calendrierLigneSemaineModelSpecs = {
	nombreJours: 7,
};
export let calendrierCaseJourModel: calendrierCaseJourModelSpecs = {
	numeroJour: 1,
	nomJour: "lundi",
};
