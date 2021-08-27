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
            ["Ğ", "G"],
            ["ğ", "g"],
            ["İ", "I"],
            ["ı", "i"],
            ["Ş", "S"],
            ["ş", "s"]
        ]
    }
};
//# sourceMappingURL=tur.js.map