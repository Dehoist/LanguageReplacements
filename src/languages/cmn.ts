import { Language } from "..";

/**
 * Mandarin Chinese / 官話 - 官话
 */
export const cmn: Language = {
	ISO6393: "cmn",
	name: "官話",
	type: "module",
	module: {
		name: "pinyin",
		function: false,
		arguments: {
			style: 0,
			segment: true,
			group: true
		}
	}
};
