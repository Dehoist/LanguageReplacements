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
			["Ą", "A"],
			["ą", "a"],
			["Ć", "C"],
			["ć", "c"],
			["Ę", "E"],
			["ę", "e"],
			["Ł", "L"],
			["ł", "l"],
			["Ń", "N"],
			["ń", "n"],
			["Ś", "S"],
			["ś", "s"],
			["Ź", "Z"],
			["ź", "z"],
			["Ż", "Z"],
			["ż", "z"]
		]
	}
};
