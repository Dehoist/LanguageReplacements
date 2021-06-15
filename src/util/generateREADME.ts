import { ISO6393, languageReplacements } from "..";
import { readFileSync, writeFileSync } from "fs";

import download from "download";

async function generateREADME() {
	const ISOList = (
			await download(
				"https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3_Name_Index.tab",
				{ filename: "ISOList.tab", encoding: "utf-8" }
			)
		)
			.toString()
			.split("\n")
			.map(line => line.split("\t"))
			.slice(1) as [ISO6393, string, string][],
		readmeTemplate = readFileSync("../../README_TEMPLATE.md", {
			encoding: "utf-8"
		}),
		languages = Object.keys(languageReplacements)
			.map(
				key =>
					`* ${key} • ${ISOList.filter(iso => iso[0] === key)
						.map(iso => iso[1])
						.join("; ")}`
			)
			.join("\n");

	writeFileSync("../../README.md", readmeTemplate.replace("{0}", languages));
}
generateREADME();
