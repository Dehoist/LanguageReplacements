import { Language } from "..";

/**
 * Czech / Čeština
 */
export const ces: Language = {
	ISO6393: "ces",
	name: "Čeština",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["Č", "C"],
			["č", "c"],
			["Ď", "D"],
			["ď", "d"],
			["Ě", "E"],
			["ě", "e"],
			["Ň", "N"],
			["ň", "n"],
			["Ř", "R"],
			["ř", "r"],
			["Š", "S"],
			["š", "s"],
			["Ť", "T"],
			["ť", "t"],
			["Ů", "U"],
			["ů", "u"],
			["Ž", "Z"],
			["ž", "z"]
		]
	}
};
