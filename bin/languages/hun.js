"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hun = void 0;
/**
 * Hungarian / Magyar
 */
exports.hun = {
    ISO6393: "hun",
    name: "Magyar",
    type: "list",
    list: {
        conflictsWith: ["dan", "lat", "nno", "nob", "nor"],
        replacements: [
            ["Á", "A"],
            ["Ä", "A"],
            ["É", "E"],
            ["Í", "I"],
            ["Ó", "O"],
            ["Ö", "O"],
            ["Ú", "U"],
            ["Ü", "U"],
            ["á", "a"],
            ["ä", "a"],
            ["é", "e"],
            ["í", "i"],
            ["ó", "o"],
            ["ö", "o"],
            ["ú", "u"],
            ["ü", "u"],
            ["Ő", "O"],
            ["ő", "o"],
            ["Ű", "U"],
            ["ű", "u"]
        ]
    }
};
//# sourceMappingURL=hun.js.map