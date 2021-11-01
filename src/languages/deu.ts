import { Language } from "..";

/**
 * German / Deutsch
 */
export const deu: Language = {
	ISO6393: "deu",
	name: "Deutsch",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["ß", "ss"],
			["ẞ", "Ss"]
		]
	}
};
