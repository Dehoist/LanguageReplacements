import { Language } from "..";

/**
 * Swedish / Svenska
 */
export const swe: Language = {
	ISO6393: "swe",
	type: "list",
	list: {
		conflictsWith: ["dan", "lat", "nno", "nob", "nor"],
		replacements: [
			["á", "a"],
			["Á", "A"],
			["å", "o"],
			["Å", "O"],
			["ä", "a"],
			["Ä", "A"],
			["è", "e"],
			["È", "E"],
			["ë", "e"],
			["Ë", "E"],
			["ö", "o"],
			["Ö", "O"],
			["ü", "u"],
			["Ü", "U"]
		]
	}
};
