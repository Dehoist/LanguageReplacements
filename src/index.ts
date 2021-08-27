import { afr } from "./languages/afr";
import { ara } from "./languages/ara";
import { ces } from "./languages/ces";
import { cmn } from "./languages/cmn";
import { dan } from "./languages/dan";
import { deu } from "./languages/deu";
import { div } from "./languages/div";
import { ell } from "./languages/ell";
import { fas } from "./languages/fas";
import { fra } from "./languages/fra";
import { gle } from "./languages/gle";
import { grc } from "./languages/grc";
import { hun } from "./languages/hun";
import { hye } from "./languages/hye";
import { jav } from "./languages/jav";
import { jpn } from "./languages/jpn";
import { kat } from "./languages/kat";
import { kor } from "./languages/kor";
import { lat } from "./languages/lat";
import { lav } from "./languages/lav";
import { lit } from "./languages/lit";
import { mkd } from "./languages/mkd";
import { nld } from "./languages/nld";
import { nno } from "./languages/nno";
import { nob } from "./languages/nob";
import { nor } from "./languages/nor";
import { pol } from "./languages/pol";
import { por } from "./languages/por";
import { pus } from "./languages/pus";
import { ron } from "./languages/ron";
import { rus } from "./languages/rus";
import { slk } from "./languages/slk";
import { spa } from "./languages/spa";
import { srp } from "./languages/srp";
import { swe } from "./languages/swe";
import { tha } from "./languages/tha";
import { tur } from "./languages/tur";
import { ukr } from "./languages/ukr";
import { urd } from "./languages/urd";
import { vie } from "./languages/vie";

export const languageReplacements = {
	afr: afr,
	ara: ara,
	ces: ces,
	cmn: cmn,
	dan: dan,
	deu: deu,
	div: div,
	ell: ell,
	fas: fas,
	fra: fra,
	gle: gle,
	grc: grc,
	hun: hun,
	hye: hye,
	jav: jav,
	jpn: jpn,
	kat: kat,
	kor: kor,
	lat: lat,
	lav: lav,
	lit: lit,
	mkd: mkd,
	nld: nld,
	nno: nno,
	nob: nob,
	nor: nor,
	pol: pol,
	por: por,
	pus: pus,
	ron: ron,
	rus: rus,
	slk: slk,
	spa: spa,
	srp: srp,
	swe: swe,
	tha: tha,
	tur: tur,
	ukr: ukr,
	urd: urd,
	vie: vie
};

export type ISO6393 = string;
export type SupportedISO6393s = keyof typeof languageReplacements;
export const supportedISO6393s = Object.keys(
	languageReplacements
) as SupportedISO6393s[];
export interface Language {
	ISO6393: ISO6393;
	type: "list" | "module";
	list?: {
		uses?: SupportedISO6393s[];
		conflictsWith?: SupportedISO6393s[];
		replacements?: [string, string][];
	};
	module?: {
		name: string;
		function?: string | false;
		arguments?: any;
	};
}
