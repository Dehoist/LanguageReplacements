"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const fs_1 = require("fs");
const chalk_1 = require("chalk");
function validateLanguages() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return __awaiter(this, void 0, void 0, function* () {
        let errors = [];
        for (const [k, v] of Object.entries(__1.languageReplacements)) {
            if (v.type === "list") {
                if ((_b = (_a = v.list) === null || _a === void 0 ? void 0 : _a.conflictsWith) === null || _b === void 0 ? void 0 : _b.length) {
                    for (let i = 0; i < v.list.conflictsWith.length; i++) {
                        const ISO = v.list.conflictsWith[i];
                        if (!((_d = (_c = __1.languageReplacements[ISO].list) === null || _c === void 0 ? void 0 : _c.conflictsWith) === null || _d === void 0 ? void 0 : _d.includes(k)))
                            errors.push(`${k} is missing in ${ISO}'s conflictsWith!`);
                    }
                }
                if ((_f = (_e = v.list) === null || _e === void 0 ? void 0 : _e.replacements) === null || _f === void 0 ? void 0 : _f.length) {
                    errors = errors.concat(sortReplacements(v.list.replacements, v.ISO6393));
                    for (let i = 0; i < v.list.replacements.length; i++) {
                        const replacement = v.list.replacements[i];
                        for (const [k2, v2] of Object.entries(__1.languageReplacements)) {
                            const conflictingKeys = [];
                            if ((_h = (_g = v2.list) === null || _g === void 0 ? void 0 : _g.replacements) === null || _h === void 0 ? void 0 : _h.length) {
                                for (let i2 = 0; i2 < v2.list.replacements.length; i2++) {
                                    const replacement2 = v2.list.replacements[i2];
                                    if (replacement[0] === replacement2[0] &&
                                        replacement[1] !== replacement2[1] &&
                                        !((_j = v.list.conflictsWith) === null || _j === void 0 ? void 0 : _j.includes(k2)))
                                        conflictingKeys.push(replacement[0]);
                                }
                            }
                            if (conflictingKeys.length) {
                                const conflictingLangs = [k2];
                                for (const [k3, v3] of Object.entries(__1.languageReplacements)) {
                                    if ((_l = (_k = v3.list) === null || _k === void 0 ? void 0 : _k.uses) === null || _l === void 0 ? void 0 : _l.includes(k2))
                                        conflictingLangs.push(k3);
                                }
                                errors.push(`${k} is conflicting with ${conflictingLangs.join(", ")} but are not in eachothers conflictsWith! (Conflicting key: ${conflictingKeys.join(", ")})`);
                            }
                        }
                    }
                }
            }
        }
        errors = errors.concat(fs_1.readdirSync("../languages")
            .filter(d => d.endsWith(".js"))
            .map(d => d.replace(".js", ""))
            .filter(d => !Object.keys(__1.languageReplacements).includes(d))
            .map(d => `${d} is in the languages folder but is missing in the languageReplacements variable!`));
        if (errors.length)
            console.log(chalk_1.red(errors.join("\n")));
    });
}
validateLanguages();
function sortReplacements(list, name) {
    const oldList = [...list], newList = list.sort().sort((a, b) => b[0].length - a[0].length), newErrors = [];
    if (arraysEqual(newList, oldList))
        return [];
    fs_1.writeFileSync(`../../${name}.json`, JSON.stringify(newList, null, 2));
    newErrors.push(`Found better sorting for ${name}, please check it out in the main directory! (${name}.json)`);
    for (let index = 0; index < newList.length; index++) {
        const element = newList[index];
        for (let o = 0; o < index; o++) {
            const elem = newList[o];
            if (element[0].includes(elem[0])) {
                console.log(element, index, elem, o);
                newErrors.push(`Manual check: ${element} (index: ${index}) conflicts with ${elem} (index: ${o}) (${name}.json)`);
            }
        }
    }
    return newErrors;
}
function arraysEqual(a, b) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a.length !== b.length)
        return false;
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
//# sourceMappingURL=validateLanguages.js.map