import { Language } from "..";

/**
 * Dutch; Flemish / Nederlands; Vlaams
 */
export const nld: Language = {
	ISO6393: "nld",
	type: "list",
	list: {
		uses: ["lat"],
		replacements: [
			["Ĳ", "IJ"],
			["ĳ", "ij"]
		]
	}
};
