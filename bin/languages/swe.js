"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swe = void 0;
/**
 * Swedish / Svenska
 */
exports.swe = {
    ISO6393: "swe",
    name: "Svenska",
    type: "list",
    list: {
        conflictsWith: ["dan", "lat", "nno", "nob", "nor"],
        replacements: [
            ["Á", "A"],
            ["Ä", "A"],
            ["Å", "O"],
            ["È", "E"],
            ["Ë", "E"],
            ["Ö", "O"],
            ["Ü", "U"],
            ["á", "a"],
            ["ä", "a"],
            ["å", "o"],
            ["è", "e"],
            ["ë", "e"],
            ["ö", "o"],
            ["ü", "u"]
        ]
    }
};
//# sourceMappingURL=swe.js.map