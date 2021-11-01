import { Language } from "..";

/**
 * Lithuanian / Lietuvių
 */
export const lit: Language = {
	ISO6393: "lit",
	name: "Lietuvių",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["Ą", "A"],
			["ą", "a"],
			["Č", "C"],
			["č", "c"],
			["Ė", "E"],
			["ė", "e"],
			["Ę", "E"],
			["ę", "e"],
			["Į", "I"],
			["į", "i"],
			["Š", "S"],
			["š", "s"],
			["Ū", "U"],
			["ū", "u"],
			["Ų", "U"],
			["ų", "u"],
			["Ž", "Z"],
			["ž", "z"]
		]
	}
};
