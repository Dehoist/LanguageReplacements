import { Language } from "..";

/**
 * Romanian / Română
 */
export const ron: Language = {
	ISO6393: "ron",
	type: "list",
	list: {
		replacements: [
			["ă", "a"],
			["Ă", "A"],
			["ș", "s"],
			["Ș", "S"],
			["ț", "t"],
			["Ț", "T"],
			["ţ", "t"],
			["Ţ", "T"]
		]
	}
};
