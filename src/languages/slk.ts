import { Language } from "..";

/**
 * Slovak / slovenčina
 */
export const slk: Language = {
	ISO6393: "slk",
	type: "list",
	list: {
		conflictsWith: ["lat"],
		replacements: [
			["á", "a"],
			["Á", "A"],
			["ä", "a"],
			["Ä", "A"],
			["č", "c"],
			["Č", "C"],
			["ď", "d"],
			["Ď", "D"],
			["é", "e"],
			["É", "E"],
			["í", "i"],
			["Í", "I"],
			["ĺ", "l"],
			["Ĺ", "L"],
			["ľ", "l"],
			["Ľ", "L"],
			["ň", "n"],
			["Ň", "N"],
			["ó", "o"],
			["Ó", "O"],
			["ô", "o"],
			["Ô", "O"],
			["ŕ", "r"],
			["Ŕ", "R"],
			["š", "s"],
			["Š", "S"],
			["ť", "t"],
			["Ť", "T"],
			["ú", "u"],
			["Ú", "U"],
			["ý", "y"],
			["Ý", "Y"],
			["ž", "z"],
			["Ž", "Z"]
		]
	}
};