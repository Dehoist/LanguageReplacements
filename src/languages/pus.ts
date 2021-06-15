import { Language } from "..";

/**
 * Pashto / پښتو
 */
export const pus: Language = {
	ISO6393: "pus",
	type: "list",
	list: {
		uses: ["ara"],
		replacements: [
			["ټ", "p"],
			["ځ", "z"],
			["څ", "c"],
			["ډ", "d"],
			["ﺫ", "d"],
			["ﺭ", "r"],
			["ړ", "r"],
			["ﺯ", "z"],
			["ږ", "g"],
			["ښ", "x"],
			["ګ", "g"],
			["ڼ", "n"],
			["ۀ", "e"],
			["ې", "e"],
			["ۍ", "ai"]
		]
	}
};
