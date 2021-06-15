"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tur = void 0;
/**
 * Turkish / Türkçe
 */
exports.tur = {
    ISO6393: "tur",
    type: "list",
    list: {
        uses: ["lat"],
        replacements: [
            ["ş", "s"],
            ["Ş", "S"],
            ["ğ", "g"],
            ["Ğ", "G"],
            ["ı", "i"],
            ["İ", "I"]
        ]
    }
};
//# sourceMappingURL=tur.js.map