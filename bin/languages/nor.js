"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nor = void 0;
/**
 * Norwegian / Norsk
 */
exports.nor = {
    ISO6393: "nor",
    type: "list",
    list: {
        conflictsWith: ["lat", "hun", "swe", "dan"],
        replacements: [
            ["æ", "ae"],
            ["Æ", "Ae"],
            ["ø", "oe"],
            ["Ø", "Oe"],
            ["å", "o"],
            ["Å", "o"],
            ["á", "a"],
            ["Á", "A"],
            ["à", "a"],
            ["À", "A"],
            ["â", "a"],
            ["Â", "A"],
            ["é", "e"],
            ["É", "E"],
            ["è", "e"],
            ["È", "E"],
            ["ê", "e"],
            ["Ê", "E"],
            ["ó", "o"],
            ["Ó", "O"],
            ["ò", "o"],
            ["Ò", "O"],
            ["ô", "o"],
            ["Ô", "O"],
            ["ü", "ue"],
            ["Ü", "Ue"]
        ]
    }
};
//# sourceMappingURL=nor.js.map