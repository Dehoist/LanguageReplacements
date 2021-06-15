import { Language } from "..";

/**
 * Polish / Polski
 */
export const pol: Language = {
	ISO6393: "pol",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["ą", "a"],
			["ć", "c"],
			["ę", "e"],
			["ł", "l"],
			["ń", "n"],
			["ś", "s"],
			["ź", "z"],
			["ż", "z"],
			["Ą", "A"],
			["Ć", "C"],
			["Ę", "E"],
			["Ł", "L"],
			["Ń", "N"],
			["Ś", "S"],
			["Ź", "Z"],
			["Ż", "Z"]
		]
	}
};
