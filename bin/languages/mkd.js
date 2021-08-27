"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mkd = void 0;
/**
 * Macedonian / македонски
 */
exports.mkd = {
    ISO6393: "mkd",
    type: "list",
    list: {
        uses: ["rus"],
        replacements: [
            ["Тс", "Ts"],
            ["тс", "ts"],
            ["Љ", "Lj"],
            ["Њ", "Nj"],
            ["Ќ", "Kj"],
            ["љ", "lj"],
            ["њ", "nj"],
            ["ќ", "kj"]
        ]
    }
};
//# sourceMappingURL=mkd.js.map