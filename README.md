# @dehoist/languagereplacements

## About

A list of characters to replace to romanize a language.

This list is used in [Dehoist][1] to romanize usernames.

## Currently supported languages

* afr • Afrikaans
* ara • Arabic
* ces • Czech
* dan • Danish
* deu • German
* div • Dhivehi; Divehi; Maldivian
* ell • Modern Greek (1453-)
* fas • Persian
* fra • French
* gle • Irish
* grc • Ancient Greek (to 1453)
* hun • Hungarian
* hye • Armenian
* jav • Javanese
* jpn • Japanese
* kat • Georgian
* kor • Korean
* lat • Latin
* lav • Latvian
* lit • Lithuanian
* mkd • Macedonian
* nld • Dutch; Flemish
* nno • Norwegian Nynorsk
* nob • Norwegian Bokmål
* nor • Norwegian
* pol • Polish
* por • Portuguese
* pus • Pashto; Pushto
* ron • Moldavian; Moldovan; Romanian
* rus • Russian
* slk • Slovak
* spa • Castilian; Spanish
* srp • Serbian
* swe • Swedish
* tur • Turkish
* ukr • Ukrainian
* urd • Urdu
* vie • Vietnamese

## Contributing

Languages that only use letters A-Z don't need be included in the list.
However, if they use one or more characters from a language that has non-standard English typography (e.g. Latin: é) then it needs to be included.

A language can be supported in 2 different ways: as a List or as a Module.

To add support for a language you need to make a new TypeScript file in the `src/languages` directory. You will need to name the file with the [ISO 639-3][2] of your language.

### List

First, paste this template into your newly created TypeScript file.

```
import { Language } from "..";

/**
 * LANG / LANG
 */
export const ISO: Language = {
	ISO6393: "ISO",
	type: "list",
	list: {

	}
};
```

Then you can replace `ISO` with the [ISO 639-3][2] of your language.

Afterwards, you can replace `LANG / LANG` with the name of your language in English and then in its own language (e.g. `Dutch / Nederlands`). If your language dialect uses the same ISO you can add them both using `;` (e.g. `Dutch; Flemish / Nederlands; Vlaams`).

Then you just need to fill in the `list` object with the specifications of your language. You can do so using `uses`, `conflictsWith` or `replacements`.

#### uses

`uses` is an array of `supportedISO6393s`, meaning these are ISO 639-3 that are currently supported. If your language uses characters from another language, you can just fill in their ISO 639-3 so you don't need to list them yourself.

_Note: if your language would romanize the character differently, then you need to add all the characters yourself in `replacements` and add the other language in `conflictsWith`._

#### conflictsWith

`conflictsWith` is an array of `supportedISO6393s`. If your language has characters that are also used in another language but romanized differently, then you need to add ISO 639-3 of that language in here.

_Note: you need to add your newly supported language to the `conflictsWith` of all the languages your language conflicts with._

#### replacements

`replacements` is an array of `[string, string]`; the first string is the character to be replaced with the second string.

_Note: if your language would romanize the character differently and there is another character preceding it, you can add that combination before the single character. You can see examples of that in Russian (rus)._

### Module

First, paste this template into your newly created TypeScript file.

```
import { Language } from "..";

/**
 * LANG / LANG
 */
export const ISO: Language = {
	ISO6393: "ISO",
	type: "module",
	module: {
		name: "MODULE"
	}
};
```

Then you can replace `ISO` with the [ISO 639-3][2] of your language.

Afterwards, you can replace `LANG / LANG` with the name of your language in English and then in its own language (e.g. `Dutch / Nederlands`). If your language dialect uses the same ISO you can add them both using `;` (e.g. `Dutch; Flemish / Nederlands; Vlaams`).

Then you just need to set up the `module` object by setting the `name` property to the name of the [NPM][3] package that romanizes your language (i.e. replace `MODULE`).

If the default exported function is not the romanize function, you need to add a `function` property. In this property, you just add the function name of the romanizer as a string. _Note: You can see examples of that in Japanese (jpn)._

Please note that the romanize function in the module expects to have the first argument as the string to be romanized and has no other settings that are required.

### Finalizing and Pull Request

Lastly, you just need to import and add it to the `languageReplacements` variable in the `index.ts` file and finally run `npm run build` / `yarn build`. **Please sort the ISO 639-3 correctly in the `languageReplacements` variable.**

Afterwards, you can just make a Pull Request on the [Repository][4].

[1]: https://dehoist.com/
[2]: https://wikipedia.org/wiki/Wikipedia:WikiProject_Languages/List_of_ISO_639-3_language_codes_(2019) "ISO 639-3 List"
[3]: https://www.npmjs.com/
[4]: https://github.com/Dehoist/LanguageReplacements/pulls "LanguageReplacements Pull Request"
