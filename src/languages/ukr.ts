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
			["Є", "Ye"],
			["І", "I"],
			["Ї", "Yi"],
			["є", "ye"],
			["і", "i"],
			["ї", "yi"],
			["Ґ", "G"],
			["ґ", "g"]
		]
	}
};
