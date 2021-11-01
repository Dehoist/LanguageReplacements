"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pol = void 0;
/**
 * Polish / Polski
 */
exports.pol = {
    ISO6393: "pol",
    name: "Polski",
    type: "list",
    list: {
        uses: ["lat"],
        replacements: [
            ["Ą", "A"],
            ["ą", "a"],
            ["Ć", "C"],
            ["ć", "c"],
            ["Ę", "E"],
            ["ę", "e"],
            ["Ł", "L"],
            ["ł", "l"],
            ["Ń", "N"],
            ["ń", "n"],
            ["Ś", "S"],
            ["ś", "s"],
            ["Ź", "Z"],
            ["ź", "z"],
            ["Ż", "Z"],
            ["ż", "z"]
        ]
    }
};
//# sourceMappingURL=pol.js.map