import { Language } from "..";

/**
 * Serbian / српски
 */
export const srp: Language = {
	ISO6393: "srp",
	name: "српски",
	type: "list",
	list: {
		uses: ["rus"],
		conflictsWith: ["vie"],
		replacements: [
			["Ć", "C"],
			["ć", "c"],
			["Č", "C"],
			["č", "c"],
			["Đ", "Dj"],
			["đ", "dj"],
			["Š", "S"],
			["š", "s"],
			["Ž", "Z"],
			["ž", "z"],
			["Ђ", "Dj"],
			["Ј", "j"],
			["Љ", "Lj"],
			["Њ", "Nj"],
			["Ћ", "C"],
			["Џ", "Dz"],
			["ђ", "dj"],
			["ј", "j"],
			["љ", "lj"],
			["њ", "nj"],
			["ћ", "c"],
			["џ", "dz"]
		]
	}
};
