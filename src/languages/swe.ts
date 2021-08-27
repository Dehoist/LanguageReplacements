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
			["Á", "A"],
			["Ä", "A"],
			["Å", "O"],
			["È", "E"],
			["Ë", "E"],
			["Ö", "O"],
			["Ü", "U"],
			["á", "a"],
			["ä", "a"],
			["å", "o"],
			["è", "e"],
			["ë", "e"],
			["ö", "o"],
			["ü", "u"]
		]
	}
};
