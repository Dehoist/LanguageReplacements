import { Language } from "..";

/**
 * Irish / Gaeilge
 */
export const gle: Language = {
	ISO6393: "gle",
	name: "Gaeilge",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["aoú", "u"],
			["aío", "i"],
			["eái", "a"],
			["iái", "a"],
			["iói", "o"],
			["iúi", "u"],
			["oío", "i"],
			["uái", "a"],
			["uío", "i"],
			["uói", "o"],
			["aí", "i"],
			["eá", "a"],
			["iá", "i"],
			["ió", "o"],
			["iú", "u"],
			["oí", "i"],
			["uá", "a"],
			["uí", "i"],
			["uó", "o"],
			["ái", "a"],
			["éa", "e"],
			["éi", "e"],
			["ío", "i"],
			["ói", "o"],
			["úi", "u"]
		]
	}
};
