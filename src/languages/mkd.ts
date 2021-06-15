import { Language } from "..";

/**
 * Macedonian / македонски
 */
export const mkd: Language = {
	ISO6393: "mkd",
	type: "list",
	list: {
		uses: ["rus"],
		replacements: [
			["Ќ", "Kj"],
			["ќ", "kj"],
			["Љ", "Lj"],
			["љ", "lj"],
			["Њ", "Nj"],
			["њ", "nj"],
			["Тс", "Ts"],
			["тс", "ts"]
		]
	}
};
