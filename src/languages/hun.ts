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
			["Á", "A"],
			["Ä", "A"],
			["É", "E"],
			["Í", "I"],
			["Ó", "O"],
			["Ö", "O"],
			["Ú", "U"],
			["Ü", "U"],
			["á", "a"],
			["ä", "a"],
			["é", "e"],
			["í", "i"],
			["ó", "o"],
			["ö", "o"],
			["ú", "u"],
			["ü", "u"],
			["Ő", "O"],
			["ő", "o"],
			["Ű", "U"],
			["ű", "u"]
		]
	}
};
