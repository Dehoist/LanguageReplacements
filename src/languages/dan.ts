import { Language } from "..";

/**
 * Danish / Dansk
 */
export const dan: Language = {
	ISO6393: "dan",
	name: "Dansk",
	type: "list",
	list: {
		conflictsWith: ["lat", "hun", "nno", "nob", "nor", "swe"],
		replacements: [
			["À", "A"],
			["Á", "A"],
			["Â", "A"],
			["Å", "Aa"],
			["Æ", "Ae"],
			["È", "E"],
			["É", "E"],
			["Ê", "E"],
			["Ò", "O"],
			["Ó", "O"],
			["Ô", "O"],
			["Ø", "Oe"],
			["Ü", "Ue"],
			["à", "a"],
			["á", "a"],
			["â", "a"],
			["å", "aa"],
			["æ", "ae"],
			["è", "e"],
			["é", "e"],
			["ê", "e"],
			["ò", "o"],
			["ó", "o"],
			["ô", "o"],
			["ø", "oe"],
			["ü", "ue"]
		]
	}
};
