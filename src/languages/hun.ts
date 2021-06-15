import { Language } from "..";

/**
 * Hungarian / Magyar
 */
export const hun: Language = {
	ISO6393: "hun",
	type: "list",
	list: {
		conflictsWith: ["dan", "lat", "nno", "nob", "nor"],
		replacements: [
			["á", "a"],
			["Á", "A"],
			["ä", "a"],
			["Ä", "A"],
			["é", "e"],
			["É", "E"],
			["í", "i"],
			["Í", "I"],
			["ö", "o"],
			["Ö", "O"],
			["ó", "o"],
			["Ó", "O"],
			["ő", "o"],
			["Ő", "O"],
			["ü", "u"],
			["Ü", "U"],
			["ú", "u"],
			["Ú", "U"],
			["ű", "u"],
			["Ű", "U"]
		]
	}
};
