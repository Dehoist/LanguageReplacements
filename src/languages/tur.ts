import { Language } from "..";

/**
 * Turkish / Türkçe
 */
export const tur: Language = {
	ISO6393: "tur",
	name: "Türkçe",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["Ğ", "G"],
			["ğ", "g"],
			["İ", "I"],
			["ı", "i"],
			["Ş", "S"],
			["ş", "s"]
		]
	}
};
