import { Language } from "..";

/**
 * Danish / Dansk
 */
export const dan: Language = {
	ISO6393: "dan",
	type: "list",
	list: {
		conflictsWith: ["lat", "hun", "nno", "nob", "nor", "swe"],
		replacements: [
			["æ", "ae"],
			["Æ", "Ae"],
			["ø", "oe"],
			["Ø", "Oe"],
			["å", "aa"],
			["Å", "Aa"],
			["á", "a"],
			["Á", "A"],
			["à", "a"],
			["À", "A"],
			["â", "a"],
			["Â", "A"],
			["é", "e"],
			["É", "E"],
			["è", "e"],
			["È", "E"],
			["ê", "e"],
			["Ê", "E"],
			["ó", "o"],
			["Ó", "O"],
			["ò", "o"],
			["Ò", "O"],
			["ô", "o"],
			["Ô", "O"],
			["ü", "ue"],
			["Ü", "Ue"]
		]
	}
};
