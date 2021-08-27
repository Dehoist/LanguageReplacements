"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urd = void 0;
/**
 * Urdu / اُردُو
 */
exports.urd = {
    ISO6393: "urd",
    type: "list",
    list: {
        uses: ["ara", "fas"],
        replacements: [
            ["ٹ", "t"],
            ["ڈ", "d"],
            ["ڑ", "r"],
            ["ں", "n"],
            ["ھ", "h"],
            ["ہ", "h"],
            ["ے", "e"]
        ]
    }
};
//# sourceMappingURL=urd.js.map