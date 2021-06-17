import { SupportedISO6393s, languageReplacements } from "..";

import { readdirSync } from "fs";
import { red } from "chalk";

async function validateLanguages() {
	let errors = [];
	for (const [k, v] of Object.entries(languageReplacements)) {
		if (v.type === "list") {
			if (v.list?.conflictsWith?.length) {
				for (let i = 0; i < v.list.conflictsWith.length; i++) {
					const ISO = v.list.conflictsWith[i];
					if (
						!languageReplacements[ISO].list?.conflictsWith?.includes(
							k as SupportedISO6393s
						)
					)
						errors.push(`${k} is missing in ${ISO}'s conflictsWith!`);
				}
			}
			if (v.list?.replacements?.length) {
				for (let i = 0; i < v.list.replacements.length; i++) {
					const replacement = v.list.replacements[i];
					for (const [k2, v2] of Object.entries(languageReplacements)) {
						const conflictingKeys = [];
						if (v2.list?.replacements?.length) {
							for (let i2 = 0; i2 < v2.list.replacements.length; i2++) {
								const replacement2 = v2.list.replacements[i2];
								if (
									replacement[0] === replacement2[0] &&
									replacement[1] !== replacement2[1] &&
									!v.list.conflictsWith?.includes(k2 as SupportedISO6393s)
								)
									conflictingKeys.push(replacement[0]);
							}
						}
						if (conflictingKeys.length) {
							const conflictingLangs = [k2];
							for (const [k3, v3] of Object.entries(languageReplacements)) {
								if (v3.list?.uses?.includes(k2 as SupportedISO6393s))
									conflictingLangs.push(k3);
							}
							errors.push(
								`${k} is conflicting with ${conflictingLangs.join(
									", "
								)} but are not in eachothers conflictsWith! (Conflicting key: ${conflictingKeys.join(
									", "
								)})`
							);
						}
					}
				}
			}
		}
	}
	errors = errors.concat(
		readdirSync("../languages")
			.filter(d => d.endsWith(".js"))
			.map(d => d.replace(".js", ""))
			.filter(d => !Object.keys(languageReplacements).includes(d))
			.map(
				d =>
					`${d} is in the languages folder but is missing in the languageReplacements variable!`
			)
	);
	if (errors.length) console.log(red(errors.join("\n")));
}
validateLanguages();
