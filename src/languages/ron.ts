import { Language } from "..";

/**
 * Romanian / Română
 */
export const ron: Language = {
	ISO6393: "ron",
	name: "Română",
	type: "list",
	list: {
		replacements: [
			["Ă", "A"],
			["ă", "a"],
			["Ţ", "T"],
			["ţ", "t"],
			["Ș", "S"],
			["ș", "s"],
			["Ț", "T"],
			["ț", "t"]
		]
	}
};
