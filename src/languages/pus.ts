import { Language } from "..";

/**
 * Pashto / پښتو
 */
export const pus: Language = {
	ISO6393: "pus",
	name: "پښتو",
	type: "list",
	list: {
		uses: ["ara"],
		replacements: [
			["ټ", "p"],
			["ځ", "z"],
			["څ", "c"],
			["ډ", "d"],
			["ړ", "r"],
			["ږ", "g"],
			["ښ", "x"],
			["ګ", "g"],
			["ڼ", "n"],
			["ۀ", "e"],
			["ۍ", "ai"],
			["ې", "e"],
			["ﺫ", "d"],
			["ﺭ", "r"],
			["ﺯ", "z"]
		]
	}
};
