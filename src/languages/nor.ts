import { Language } from "..";

/**
 * Norwegian / Norsk
 */
export const nor: Language = {
	ISO6393: "nor",
	type: "list",
	list: {
		conflictsWith: ["lat", "hun", "swe", "dan"],
		replacements: [
			["À", "A"],
			["Á", "A"],
			["Â", "A"],
			["Å", "o"],
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
			["å", "o"],
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
