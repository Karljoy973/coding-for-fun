export type popUpSpecs = {
	id: string;
	width: string;
	height: string;
	position: string;
	zIndex: string;
	top: string;
	left: string;
	backgroundColor: string;
};

export type calendrierMoisModelSpecs = {
	nombreSemaines: 4 | 5;
};

export type calendrierLigneSemaineModelSpecs = {
	nombreJours: 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export type calendrierCaseJourModelSpecs = {
	numeroJour: number;
	nomJour: string;
};
