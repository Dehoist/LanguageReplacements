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
            ["Ќ", "Kj"],
            ["ќ", "kj"],
            ["Љ", "Lj"],
            ["љ", "lj"],
            ["Њ", "Nj"],
            ["њ", "nj"],
            ["Тс", "Ts"],
            ["тс", "ts"]
        ]
    }
};
//# sourceMappingURL=mkd.js.map