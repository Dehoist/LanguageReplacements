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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const fs_1 = require("fs");
const download_1 = __importDefault(require("download"));
function generateREADME() {
    return __awaiter(this, void 0, void 0, function* () {
        const ISOList = (yield download_1.default("https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3_Name_Index.tab", { filename: "ISOList.tab", encoding: "utf-8" }))
            .toString()
            .split("\n")
            .map(line => line.split("\t"))
            .slice(1), readmeTemplate = fs_1.readFileSync("../../README_TEMPLATE.md", {
            encoding: "utf-8"
        }), languages = Object.keys(__1.languageReplacements)
            .map(key => `* ${key} • ${ISOList.filter(iso => iso[0] === key)
            .map(iso => iso[1])
            .join("; ")}`)
            .join("\n");
        fs_1.writeFileSync("../../README.md", readmeTemplate.replace("{0}", languages));
    });
}
generateREADME();
//# sourceMappingURL=generateREADME.js.map