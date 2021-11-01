import { Language } from "..";

/**
 * Macedonian / македонски
 */
export const mkd: Language = {
	ISO6393: "mkd",
	name: "македонски",
	type: "list",
	list: {
		uses: ["rus"],
		replacements: [
			["Тс", "Ts"],
			["тс", "ts"],
			["Љ", "Lj"],
			["Њ", "Nj"],
			["Ќ", "Kj"],
			["љ", "lj"],
			["њ", "nj"],
			["ќ", "kj"]
		]
	}
};
