import { Language } from "..";

/**
 * Lithuanian / Lietuvių
 */
export const lit: Language = {
	ISO6393: "lit",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["ą", "a"],
			["č", "c"],
			["ę", "e"],
			["ė", "e"],
			["į", "i"],
			["š", "s"],
			["ų", "u"],
			["ū", "u"],
			["ž", "z"],
			["Ą", "A"],
			["Č", "C"],
			["Ę", "E"],
			["Ė", "E"],
			["Į", "I"],
			["Š", "S"],
			["Ų", "U"],
			["Ū", "U"],
			["Ž", "Z"]
		]
	}
};
