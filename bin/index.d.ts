export declare const languageReplacements: {
    ara: Language;
    ces: Language;
    dan: Language;
    deu: Language;
    div: Language;
    ell: Language;
    fas: Language;
    fra: Language;
    gle: Language;
    grc: Language;
    hun: Language;
    hye: Language;
    jav: Language;
    jpn: Language;
    kat: Language;
    kor: Language;
    lat: Language;
    lav: Language;
    lit: Language;
    mkd: Language;
    nld: Language;
    nno: Language;
    nob: Language;
    nor: Language;
    pol: Language;
    por: Language;
    pus: Language;
    ron: Language;
    rus: Language;
    slk: Language;
    spa: Language;
    srp: Language;
    swe: Language;
    tur: Language;
    ukr: Language;
    urd: Language;
    vie: Language;
};
export declare type ISO6393 = string;
export declare type supportedISO6393s = keyof typeof languageReplacements;
export interface Language {
    ISO6393: ISO6393;
    type: "list" | "module";
    list?: {
        uses?: supportedISO6393s[];
        conflictsWith?: supportedISO6393s[];
        replacements?: [string, string][];
    };
    module?: {
        name: string;
        function?: string;
    };
}
