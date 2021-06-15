import { Language } from "..";

/**
 * Ukrainian / Українська
 */
export const ukr: Language = {
	ISO6393: "ukr",
	type: "list",
	list: {
		uses: ["rus"],
		replacements: [
			["є", "ye"],
			["Є", "Ye"],
			["і", "i"],
			["І", "I"],
			["ї", "yi"],
			["Ї", "Yi"],
			["ґ", "g"],
			["Ґ", "G"]
		]
	}
};
