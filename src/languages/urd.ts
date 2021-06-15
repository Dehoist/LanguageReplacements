import { Language } from "..";

/**
 * Urdu / اُردُو
 */
export const urd: Language = {
	ISO6393: "urd",
	type: "list",
	list: {
		uses: ["ara", "fas"],
		replacements: [
			["ٹ", "t"],
			["ڈ", "d"],
			["ڑ", "r"],
			["ں", "n"],
			["ہ", "h"],
			["ھ", "h"],
			["ے", "e"]
		]
	}
};
