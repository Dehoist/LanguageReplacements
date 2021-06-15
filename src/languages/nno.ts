import { Language } from "..";

/**
 * Norwegian (Nynorsk) / Norsk (Nynorsk)
 */
export const nno: Language = {
	ISO6393: "nno",
	type: "list",
	list: {
		uses: ["nor"],
		conflictsWith: ["lat", "hun", "swe", "dan"]
	}
};
