"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hun = void 0;
/**
 * Hungarian / Magyar
 */
exports.hun = {
    ISO6393: "hun",
    type: "list",
    list: {
        conflictsWith: ["dan", "lat", "nno", "nob", "nor"],
        replacements: [
            ["á", "a"],
            ["Á", "A"],
            ["ä", "a"],
            ["Ä", "A"],
            ["é", "e"],
            ["É", "E"],
            ["í", "i"],
            ["Í", "I"],
            ["ö", "o"],
            ["Ö", "O"],
            ["ó", "o"],
            ["Ó", "O"],
            ["ő", "o"],
            ["Ő", "O"],
            ["ü", "u"],
            ["Ü", "U"],
            ["ú", "u"],
            ["Ú", "U"],
            ["ű", "u"],
            ["Ű", "U"]
        ]
    }
};
//# sourceMappingURL=hun.js.map