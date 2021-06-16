import { Language } from "..";

/**
 * Irish / Gaeilge
 */
export const gle: Language = {
	ISO6393: "gle",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["aío", "i"],
			["aoú", "u"],
			["aí", "i"],
			["ái", "a"],
			["eái", "a"],
			["éa", "e"],
			["éi", "e"],
			["eá", "a"],
			["iái", "a"],
			["iá", "i"],
			["iói", "o"],
			["ió", "o"],
			["ío", "i"],
			["iúi", "u"],
			["iú", "u"],
			["uái", "a"],
			["uío", "i"],
			["uói", "o"],
			["uá", "a"],
			["uí", "i"],
			["uó", "o"],
			["úi", "u"],
			["oío", "i"],
			["ói", "o"],
			["oí", "i"]
		]
	}
};
