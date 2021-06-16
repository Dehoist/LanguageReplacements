import { Language } from "..";

/**
 * Persian (Farsi) / فارسی
 */
export const fas: Language = {
	ISO6393: "fas",
	type: "list",
	list: {
		uses: ["ara"],
		replacements: [
			["چ", "ch"],
			["ک", "k"],
			["گ", "g"],
			["پ", "p"],
			["ژ", "zh"],
			["ی", "y"],
			["۰", "0"],
			["۱", "1"],
			["۲", "2"],
			["۳", "3"],
			["۴", "4"],
			["۵", "5"],
			["۶", "6"],
			["۷", "7"],
			["۸", "8"],
			["۹", "9"]
		]
	}
};