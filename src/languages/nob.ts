import { Language } from "..";

/**
 * Norwegian (Bokmål) / Norsk (Bokmål)
 */
export const nob: Language = {
	ISO6393: "nob",
	name: "Norsk (Bokmål)",
	type: "list",
	list: {
		uses: ["nor"],
		conflictsWith: ["lat", "hun", "swe", "dan"]
	}
};
