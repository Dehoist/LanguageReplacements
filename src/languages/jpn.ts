import { Language } from "..";

/**
 * Japanese / 日本語
 */
export const jpn: Language = {
	ISO6393: "jpn",
	name: "日本語",
	type: "module",
	module: {
		name: "@lazy-cjk/japanese",
		function: "romanize"
	}
};
