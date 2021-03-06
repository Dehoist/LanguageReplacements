import { Language } from "..";

/**
 * Arabic / اَلْعَرَبِيَّةُ
 */
export const ara: Language = {
	ISO6393: "ara",
	name: "اَلْعَرَبِيَّةُ",
	type: "list",
	list: {
		replacements: [
			["َ‎", "a"],
			["ِ‎", "i"],
			["ء", "e"],
			["آ", "a"],
			["أ", "a"],
			["ؤ", "w"],
			["إ", "i"],
			["ئ", "y"],
			["ا", "a"],
			["ب", "b"],
			["ة", "t"],
			["ت", "t"],
			["ث", "th"],
			["ج", "j"],
			["ح", "h"],
			["خ", "kh"],
			["د", "d"],
			["ذ", "dh"],
			["ر", "r"],
			["ز", "z"],
			["س", "s"],
			["ش", "sh"],
			["ص", "s"],
			["ض", "d"],
			["ط", "t"],
			["ظ", "z"],
			["ع", "e"],
			["غ", "gh"],
			["ـ", "_"],
			["ف", "f"],
			["ق", "q"],
			["ك", "k"],
			["ل", "l"],
			["م", "m"],
			["ن", "n"],
			["ه", "h"],
			["و", "w"],
			["ى", "a"],
			["ي", "y"],
			["ُ", "u"],
			["٠", "0"],
			["١", "1"],
			["٢", "2"],
			["٣", "3"],
			["٤", "4"],
			["٥", "5"],
			["٦", "6"],
			["٧", "7"],
			["٨", "8"],
			["٩", "9"]
		]
	}
};
