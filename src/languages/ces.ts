import { Language } from "..";

/**
 * Czech / Čeština
 */
export const ces: Language = {
	ISO6393: "ces",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["č", "c"],
			["ď", "d"],
			["ě", "e"],
			["ň", "n"],
			["ř", "r"],
			["š", "s"],
			["ť", "t"],
			["ů", "u"],
			["ž", "z"],
			["Č", "C"],
			["Ď", "D"],
			["Ě", "E"],
			["Ň", "N"],
			["Ř", "R"],
			["Š", "S"],
			["Ť", "T"],
			["Ů", "U"],
			["Ž", "Z"]
		]
	}
};
