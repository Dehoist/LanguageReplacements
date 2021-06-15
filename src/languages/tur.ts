import { Language } from "..";

/**
 * Turkish / Türkçe
 */
export const tur: Language = {
	ISO6393: "tur",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["ş", "s"],
			["Ş", "S"],
			["ğ", "g"],
			["Ğ", "G"],
			["ı", "i"],
			["İ", "I"]
		]
	}
};
