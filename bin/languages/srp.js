"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.srp = void 0;
/**
 * Serbian / српски
 */
exports.srp = {
    ISO6393: "srp",
    type: "list",
    list: {
        uses: ["rus"],
        conflictsWith: ["vie"],
        replacements: [
            ["љ", "lj"],
            ["њ", "nj"],
            ["Љ", "Lj"],
            ["Њ", "Nj"],
            ["đ", "dj"],
            ["Đ", "Dj"],
            ["ђ", "dj"],
            ["ј", "j"],
            ["ћ", "c"],
            ["џ", "dz"],
            ["Ђ", "Dj"],
            ["Ј", "j"],
            ["Ћ", "C"],
            ["Џ", "Dz"],
            ["č", "c"],
            ["Č", "C"],
            ["ć", "c"],
            ["Ć", "C"],
            ["š", "s"],
            ["Š", "S"],
            ["ž", "z"],
            ["Ž", "Z"]
        ]
    }
};
//# sourceMappingURL=srp.js.map