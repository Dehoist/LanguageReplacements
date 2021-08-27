import { Language } from "..";

/**
 * Thai / ภาษาไทย
 */
export const tha: Language = {
	ISO6393: "tha",
	type: "list",
	list: {
		replacements: [
            ["ก", "k"],
			["ข", "kh"],
			["ฃ", "kh"],
			["ค", "kh"],
			["ฅ", "kh"],
			["ฆ", "kh"],
			["ง", "ng"],
			["จ", "ch"],
			["ฉ", "ch"],
			["ช", "ch"],
			["ซ", "s"],
			["ฌ", "ch"],
			["ญ", "y"],
			["ฎ", "d"],
			["ฏ", "t"],
			["ฐ", "th"],
			["ฑ", "th"],
			["ฒ", "th"],
			["ณ", "n"],
			["ด", "d"],
			["ต", "t"],
			["ถ", "th"],
			["ท", "th"],
			["ธ", "th"],
			["น", "n"],
			["บ", "b"],
			["ป", "p"],
			["ผ", "ph"],
			["ฝ", "f"],
			["พ", "ph"],
			["ฟ", "f"],
			["ภ", "ph"],
			["ม", "m"],
			["ย", "y"],
			["ร", "r"],
			["ฤๅ", "rue"],
			["ฤ", "rue"],
			["ล", "l"],
			["ฦๅ", "lue"],
			["ฦ", "lue"],
			["ว", "w"],
			["ศ", "s"],
			["ษ", "s"],
			["ส", "s"],
			["ห", "h"],
			["ฬ", "l"],
			["ฮ", "h"],
            ["๐", "0"],
            ["๑", "1"],
            ["๒", "2"],
            ["๓", "3"],
            ["๔", "4"],
            ["๕", "5"],
            ["๖", "6"],
            ["๗", "7"],
            ["๘", "8"],
            ["๙", "9"],
            ["้", ""],
            ["่", ""],
            ["๋", ""],
            ["๊", ""]
            ["กะ", "ka"],
			["ขะ", "kha"],
			["ฃะ", "kha"],
			["คะ", "kha"],
			["ฅะ", "kha"],
			["ฆะ", "kha"],
			["งะ", "nga"],
			["จะ", "cha"],
			["ฉะ", "cha"],
			["ชะ", "cha"],
			["ซะ", "sa"],
			["ดะ", "da"],
			["ตะ", "ta"],
			["ถะ", "tha"],
			["ทะ", "tha"],
			["ธะ", "tha"],
			["นะ", "na"],
			["บะ", "ba"],
			["ปะ", "pa"],
			["ผะ", "pha"],
			["ฝะ", "fa"],
			["พะ", "pha"],
			["ฟะ", "fa"],
			["มะ", "ma"],
			["ยะ", "ya"],
			["ระ", "ra"],
			["ละ", "la"],
			["วะ", "wa"],
			["ศะ", "sa"],
			["ษะ", "sa"],
			["สะ", "sa"],
			["หะ", "ha"],
			["ฮะ", "ha"],
            ["กา", "ka"],
			["ขา", "kha"],
			["ฃา", "kha"],
			["คา", "kha"],
			["ฅา", "kha"],
			["ฆา", "kha"],
			["งา", "nga"],
			["จา", "cha"],
			["ฉา", "cha"],
			["ชา", "cha"],
			["ซา", "sa"],
			["ดา", "da"],
			["ตา", "ta"],
			["ถา", "tha"],
			["ทา", "tha"],
			["ธา", "tha"],
			["นา", "na"],
			["บา", "ba"],
			["ปา", "pa"],
			["ผา", "pha"],
			["ฝา", "fa"],
			["พา", "pha"],
			["ฟา", "fa"],
			["มา", "ma"],
			["ยา", "ya"],
			["รา", "ra"],
			["ลา", "la"],
			["วา", "wa"],
			["ศา", "sa"],
			["ษา", "sa"],
			["สา", "sa"],
			["หา", "ha"],
			["ฮา", "ha"],
            ["กรร", "ka"],
			["ขรร", "kha"],
			["ฃรร", "kha"],
			["ครร", "kha"],
			["ฅรร", "kha"],
			["ฆรร", "kha"],
			["งรร", "nga"],
			["จรร", "cha"],
			["ฉรร", "cha"],
			["ชรร", "cha"],
			["ซรร", "sa"],
			["ดรร", "da"],
			["ตรร", "ta"],
			["ถรร", "tha"],
			["ทรร", "tha"],
			["ธรร", "tha"],
			["นรร", "na"],
			["บรร", "ba"],
			["ปรร", "pa"],
			["ผรร", "pha"],
			["ฝรร", "fa"],
			["พรร", "pha"],
			["ฟรร", "fa"],
			["มรร", "ma"],
			["ยรร", "ya"],
			["รรร", "ra"],
			["ลรร", "la"],
			["วรร", "wa"],
			["ศรร", "sa"],
			["ษรร", "sa"],
			["สรร", "sa"],
			["หรร", "ha"],
			["ฮรร", "ha"],
            ["กั", "ka"],
			["ขั", "kha"],
			["ฃั", "kha"],
			["คั", "kha"],
			["ฅั", "kha"],
			["ฆั", "kha"],
			["งั", "nga"],
			["จั", "cha"],
			["ฉั", "cha"],
			["ชั", "cha"],
			["ซั", "sa"],
			["ดั", "da"],
			["ตั", "ta"],
			["ถั", "tha"],
			["ทั", "tha"],
			["ธั", "tha"],
			["นั", "na"],
			["บั", "ba"],
			["ปั", "pa"],
			["ผั", "pha"],
			["ฝั", "fa"],
			["พั", "pha"],
			["ฟั", "fa"],
			["มั", "ma"],
			["ยั", "ya"],
			["รั", "ra"],
			["ลั", "la"],
			["วั", "wa"],
			["ศั", "sa"],
			["ษั", "sa"],
			["สั", "sa"],
			["หั", "ha"],
			["ฮั", "ha"],
            ["กำ", "kam"],
			["ขำ", "kham"],
			["ฃำ", "kham"],
			["คำ", "kham"],
			["ฅำ", "kham"],
			["ฆำ", "kham"],
			["งำ", "ngam"],
			["จำ", "cham"],
			["ฉำ", "cham"],
			["ชำ", "cham"],
			["ซำ", "sam"],
			["ดำ", "dam"],
			["ตำ", "tam"],
			["ทำ", "tham"],
			["นำ", "nam"],
			["บำ", "bam"],
			["ปำ", "pam"],
			["ผำ", "pham"],
			["ฝำ", "fam"],
			["พำ", "pham"],
			["ฟำ", "fam"],
			["มำ", "mam"],
			["ยำ", "yam"],
			["รำ", "ram"],
			["ลำ", "lam"],
			["วำ", "wam"],
			["ศำ", "sam"],
			["ษำ", "sam"],
			["สำ", "sam"],
			["หำ", "ham"],
			["ฮำ", "ham"],
            ["กิ", "ki"],
			["ขิ", "khi"],
			["ฃิ", "khi"],
			["คิ", "khi"],
			["ฅิ", "khi"],
			["ฆิ", "khi"],
			["งิ", "ngi"],
			["จิ", "chi"],
			["ฉิ", "chi"],
			["ชิ", "chi"],
			["ซิ", "si"],
			["ดิ", "di"],
			["ติ", "ti"],
			["ทิ", "thi"],
			["นิ", "ni"],
			["บิ", "bi"],
			["ปิ", "pi"],
			["ผิ", "phi"],
			["ฝิ", "fi"],
			["พิ", "phi"],
			["ฟิ", "fi"],
			["มิ", "mi"],
			["ยิ", "yi"],
			["ริ", "ri"],
			["ลิ", "li"],
			["วิ", "wi"],
			["ศิ", "si"],
			["ษิ", "si"],
			["สิ", "si"],
			["หิ", "hi"],
			["ฮิ", "hi"],
            ["กี", "ki"],
			["ขี", "khi"],
			["ฃี", "khi"],
			["คี", "khi"],
			["ฅี", "khi"],
			["ฆี", "khi"],
			["งี", "ngi"],
			["จี", "chi"],
			["ฉี", "chi"],
			["ชี", "chi"],
			["ซี", "si"],
			["ดี", "di"],
			["ตี", "ti"],
			["ที", "thi"],
            ["ธี", "thi"],
			["นี", "ni"],
			["บี", "bi"],
			["ปี", "pi"],
			["ผี", "phi"],
			["ฝี", "fi"],
			["พี", "phi"],
			["ฟี", "fi"],
			["มี", "mi"],
			["ยี", "yi"],
			["รี", "ri"],
			["ลี", "li"],
			["วี", "wi"],
			["ศี", "si"],
			["ษี", "si"],
			["สี", "si"],
			["หี", "hi"],
			["ฮี", "hi"],
            ["กึ", "kue"],
			["ขึ", "khue"],
			["ฃึ", "khue"],
			["คึ", "khue"],
			["ฅึ", "khue"],
			["ฆึ", "khue"],
			["งึ", "ngue"],
			["จึ", "chue"],
			["ฉึ", "chue"],
			["ชึ", "chue"],
			["ซึ", "sue"],
			["ดึ", "due"],
			["ตึ", "tue"],
			["ทึ", "thue"],
			["นึ", "nue"],
			["บึ", "bue"],
			["ปึ", "pue"],
			["ผึ", "phue"],
			["ฝึ", "fue"],
			["พึ", "phue"],
			["ฟึ", "fue"],
			["มึ", "mue"],
			["ยึ", "yue"],
			["รึ", "rue"],
			["ลึ", "lue"],
			["วึ", "wue"],
			["ศึ", "sue"],
			["ษึ", "sue"],
			["สึ", "sue"],
			["หึ", "hue"],
			["ฮึ", "hue"],
            ["กือ", "kue"],
			["ขือ", "khue"],
			["ฃือ", "khue"],
			["คือ", "khue"],
			["ฅือ", "khue"],
			["ฆือ", "khue"],
			["งือ", "ngue"],
			["จือ", "chue"],
			["ฉือ", "chue"],
			["ชือ", "chue"],
			["ซือ", "sue"],
			["ดือ", "due"],
			["ตือ", "tue"],
			["ทือ", "thue"],
			["นือ", "nue"],
			["บือ", "bue"],
			["ปือ", "pue"],
			["ผือ", "phue"],
			["ฝือ", "fue"],
			["พือ", "phue"],
			["ฟือ", "fue"],
			["มือ", "mue"],
			["ยือ", "yue"],
			["รือ", "rue"],
			["ลือ", "lue"],
			["สือ", "sue"],
			["หือ", "hue"],
			["ฮือ", "hue"],
            ["กุ", "ku"],
			["ขุ", "khu"],
			["ฃุ", "khu"],
			["คุ", "khu"],
			["ฅุ", "khu"],
			["ฆุ", "khu"],
			["งุ", "ngu"],
			["จุ", "chu"],
			["ฉุ", "chu"],
			["ชุ", "chu"],
			["ซุ", "su"],
			["ดุ", "du"],
			["ตุ", "tu"],
			["ทุ", "thu"],
			["นุ", "nu"],
			["บุ", "bu"],
			["ปุ", "pu"],
			["ผุ", "phu"],
			["ฝุ", "fu"],
			["พุ", "phu"],
			["ฟุ", "fu"],
			["มุ", "mu"],
			["ยุ", "yu"],
			["รุ", "ru"],
			["ลุ", "lu"],
			["วุ", "wu"],
			["ศุ", "su"],
			["ษุ", "su"],
			["สุ", "su"],
			["หุ", "hu"],
			["ฮุ", "hu"],
            ["กู", "ku"],
			["ขู", "khu"],
			["ฃู", "khu"],
			["คู", "khu"],
			["ฅู", "khu"],
			["ฆู", "khu"],
			["งู", "ngu"],
			["จู", "chu"],
			["ฉู", "chu"],
			["ชู", "chu"],
			["ซู", "su"],
			["ดู", "du"],
			["ตู", "tu"],
			["ทู", "thu"],
            ["ธุ", "thu"],
			["นู", "nu"],
			["บู", "bu"],
			["ปู", "pu"],
			["ผู", "phu"],
			["ฝู", "fu"],
			["พู", "phu"],
			["ฟู", "fu"],
			["มู", "mu"],
			["ยู", "yu"],
			["รู", "ru"],
			["ลู", "lu"],
			["วู", "wu"],
			["ศู", "su"],
			["ษู", "su"],
			["สู", "su"],
			["หู", "hu"],
			["ฮู", "hu"],
            ["เกะ", "ku"],
			["เขะ", "khe"],
			["เฃะ", "khe"],
			["เคะ", "khe"],
			["เฅะ", "khe"],
			["เฆะ", "khe"],
			["เงะ", "nge"],
			["เจะ", "che"],
			["เฉะ", "che"],
			["เชะ", "che"],
			["เซะ", "se"],
			["เดะ", "de"],
			["เตะ", "te"],
			["เทะ", "the"],
			["เนะ", "ne"],
			["เบะ", "be"],
			["เปะ", "pe"],
			["เผะ", "phe"],
			["เพะ", "phe"],
			["เมะ", "me"],
			["เละ", "le"],
			["เวะ", "we"],
			["เสะ", "se"],
			["เหะ", "he"],
			["เฮะ", "he"],
            ["เก", "ke"],
			["เข", "khe"],
			["เฃ", "khe"],
			["เค", "khe"],
			["เฅ", "khe"],
			["เฆ", "khe"],
			["เง", "nge"],
			["เจ", "che"],
			["เฉ", "che"],
			["เช", "che"],
			["เซ", "se"],
			["เด", "de"],
			["เต", "te"],
			["เท", "the"],
			["เน", "ne"],
			["เบ", "be"],
			["เป", "pe"],
			["เผ", "phe"],
			["เฝ", "fe"],
			["เพ", "phe"],
			["เฟ", "fe"],
			["เม", "me"],
			["เย", "ye"],
			["เร", "re"],
			["เล", "le"],
			["เว", "we"],
			["เศ", "se"],
			["เส", "se"],
			["เห", "he"],
			["เฮ", "he"],
            ["เก็", "ke"],
			["เข็", "khu"],
			["เฃ็", "khu"],
			["เค็", "khu"],
			["เฅ็", "khu"],
			["เฆ็", "khu"],
			["เง็", "ngu"],
			["เจ็", "chu"],
			["เฉ็", "chu"],
			["เช็", "chu"],
			["เซ็", "su"],
			["เด็", "du"],
			["เต็", "tu"],
			["เท็", "thu"],
			["เน็", "nu"],
			["เบ็", "bu"],
			["เป็", "pu"],
			["เผ็", "phu"],
			["เฝ็", "fu"],
			["เพ็", "phu"],
			["เฟ็", "fu"],
			["เม็", "mu"],
			["เย็", "yu"],
			["เร็", "ru"],
			["เล็", "lu"],
			["เว็", "wu"],
			["เศ็", "su"],
			["เษ็", "su"],
			["เส็", "su"],
			["เห็", "hu"],
			["เฮ็", "hu"],
            ["แกะ", "kae"],
			["แขะ", "khae"],
			["แฃะ", "khae"],
			["แคะ", "khae"],
			["แฅะ", "khae"],
			["แฆะ", "khae"],
			["แงะ", "ngae"],
			["แจะ", "chae"],
			["แฉะ", "chae"],
			["แชะ", "chae"],
			["แซะ", "sae"],
			["แดะ", "dae"],
			["แตะ", "tae"],
			["แทะ", "thae"],
			["แนะ", "nae"],
			["แบะ", "bae"],
			["แปะ", "pae"],
			["แผะ", "phae"],
			["แฝะ", "fae"],
			["แพะ", "phae"],
			["แฟะ", "fae"],
			["แมะ", "mae"],
			["แยะ", "yae"],
			["แระ", "rae"],
			["และ", "lae"],
			["แวะ", "wae"],
			["แศะ", "sae"],
			["แษะ", "sae"],
			["แสะ", "sae"],
			["แหะ", "hae"],
			["แฮะ", "hae"],
            ["แก", "kae"],
			["แข", "khae"],
			["แฃ", "khae"],
			["แค", "khae"],
			["แฅ", "khae"],
			["แฆ", "khae"],
			["แง", "ngae"],
			["แจ", "chae"],
			["แฉ", "chae"],
			["แช", "chae"],
			["แซ", "sae"],
			["แด", "dae"],
			["แต", "tae"],
			["แท", "thae"],
			["แน", "nae"],
			["แบ", "bae"],
			["แป", "pae"],
			["แผ", "phae"],
			["แฝ", "fae"],
			["แพ", "phae"],
			["แฟ", "fae"],
			["แม", "mae"],
			["แย", "yae"],
			["แร", "rae"],
			["แล", "lae"],
			["แว", "wae"],
			["แศ", "sae"],
			["แษ", "sae"],
			["แส", "sae"],
			["แห", "hae"],
			["แฮ", "hae"],
            ["โกะ", "ko"],
			["โขะ", "kho"],
			["โฃะ", "kho"],
			["โคะ", "kho"],
			["โฅะ", "kho"],
			["โฆะ", "kho"],
			["โงะ", "ngo"],
			["โจะ", "cho"],
			["โฉะ", "cho"],
			["โชะ", "cho"],
			["โซะ", "so"],
			["โดะ", "do"],
			["โตะ", "to"],
			["โทะ", "tho"],
			["โนะ", "no"],
			["โบะ", "bo"],
			["โปะ", "po"],
			["โผะ", "pho"],
			["โฝะ", "fo"],
			["โพะ", "pho"],
			["โฟะ", "fo"],
			["โมะ", "mo"],
			["โยะ", "yo"],
			["โระ", "ro"],
			["โละ", "lo"],
			["โวะ", "wo"],
			["โศะ", "so"],
			["โษะ", "so"],
			["โสะ", "so"],
			["โหะ", "ho"],
			["โฮะ", "ho"],
            ["โก", "ko"],
			["โข", "kho"],
			["โฃ", "kho"],
			["โค", "kho"],
			["โฅ", "kho"],
			["โฆ", "kho"],
			["โง", "ngo"],
			["โจ", "cho"],
			["โฉ", "cho"],
			["โช", "cho"],
			["โซ", "so"],
			["โด", "do"],
			["โต", "to"],
			["โท", "tho"],
			["โน", "no"],
			["โบ", "bo"],
			["โป", "po"],
			["โผ", "pho"],
			["โฝ", "fo"],
			["โพ", "pho"],
			["โฟ", "fo"],
			["โม", "mo"],
			["โย", "yo"],
			["โร", "ro"],
			["โล", "lo"],
			["โว", "wo"],
			["โศ", "so"],
			["โษ", "so"],
			["โส", "so"],
			["โห", "ho"],
			["โฮ", "ho"],
            ["กอ", "ko"],
			["ขอ", "kho"],
			["ฃอ", "kho"],
			["คอ", "kho"],
			["ฅอ", "kho"],
			["ฆอ", "kho"],
			["งอ", "ngo"],
			["จอ", "cho"],
			["ฉอ", "cho"],
			["ชอ", "cho"],
			["ซอ", "so"],
			["ดอ", "do"],
			["ตอ", "to"],
			["ทอ", "tho"],
			["นอ", "no"],
			["บอ", "bo"],
			["ปอ", "po"],
			["ผอ", "pho"],
			["ฝอ", "fo"],
			["พอ", "pho"],
			["ฟอ", "fo"],
			["มอ", "mo"],
			["ยอ", "yo"],
			["รอ", "ro"],
			["ลอ", "lo"],
			["วอ", "wo"],
			["ศอ", "so"],
			["ษอ", "so"],
			["สอ", "so"],
			["หอ", "ho"],
			["ฮอ", "ho"],
            ["เกอะ", "koe"],
			["เขอะ", "khoe"],
			["เฃอะ", "khoe"],
			["เคอะ", "khoe"],
			["เฅอะ", "khoe"],
			["เฆอะ", "khoe"],
			["เงอะ", "ngoe"],
			["เจอะ", "choe"],
			["เฉอะ", "choe"],
			["เชอะ", "choe"],
			["เซอะ", "soe"],
			["เดอะ", "doe"],
			["เตอะ", "toe"],
			["เถอะ", "thoe"],
			["เทอะ", "thoe"],
			["เธอะ", "thoe"],
			["เนอะ", "noe"],
			["เบอะ", "boe"],
			["เปอะ", "poe"],
			["เผอะ", "phoe"],
			["เฝอะ", "foe"],
			["เพอะ", "phoe"],
			["เฟอะ", "foe"],
			["เมอะ", "moe"],
			["เยอะ", "yoe"],
			["เรอะ", "roe"],
			["เลอะ", "loe"],
			["เวอะ", "woe"],
			["เศอะ", "soe"],
			["เษอะ", "soe"],
			["เสอะ", "soe"],
			["เหอะ", "hoe"],
			["เฮอะ", "hoe"],
            ["เกอ", "koe"],
			["เขอ", "khoe"],
			["เฃอ", "khoe"],
			["เคอ", "khoe"],
			["เฅอ", "khoe"],
			["เฆอ", "khoe"],
			["เงอ", "ngoe"],
			["เจอ", "choe"],
			["เฉอ", "choe"],
			["เชอ", "choe"],
			["เซอ", "soe"],
			["เดอ", "doe"],
			["เตอ", "toe"],
			["เถอ", "thoe"],
			["เทอ", "thoe"],
			["เธอ", "thoe"],
			["เนอ", "noe"],
			["เบอ", "boe"],
			["เปอ", "poe"],
			["เผอ", "phoe"],
			["เฝอ", "foe"],
			["เพอ", "phoe"],
			["เฟอ", "foe"],
			["เมอ", "moe"],
			["เยอ", "yoe"],
			["เรอ", "roe"],
			["เลอ", "loe"],
			["เวอ", "woe"],
			["เศอ", "soe"],
			["เษอ", "soe"],
			["เสอ", "soe"],
			["เหอ", "hoe"],
			["เฮอ", "hoe"],
            ["เกิ", "koe"],
			["เขิ", "khoe"],
			["เฃิ", "khoe"],
			["เคิ", "khoe"],
			["เฅิ", "khoe"],
			["เฆิ", "khoe"],
			["เงิ", "ngoe"],
			["เจิ", "choe"],
			["เฉิ", "choe"],
			["เชิ", "choe"],
			["เซิ", "soe"],
			["เดิ", "doe"],
			["เติ", "toe"],
			["เถิ", "thoe"],
			["เทิ", "thoe"],
			["เธิ", "thoe"],
			["เนิ", "noe"],
			["เบิ", "boe"],
			["เปิ", "poe"],
			["เผิ", "phoe"],
			["เฝิ", "foe"],
			["เพิ", "phoe"],
			["เฟิ", "foe"],
			["เมิ", "moe"],
			["เยิ", "yoe"],
			["เริ", "roe"],
			["เลิ", "loe"],
			["เวิ", "woe"],
			["เศิ", "soe"],
			["เษิ", "soe"],
			["เสิ", "soe"],
			["เหิ", "hoe"],
			["เฮิ", "hoe"],
            ["เกียะ", "kia"],
			["เขียะ", "khia"],
			["เฃียะ", "khia"],
			["เคียะ", "khia"],
			["เฅียะ", "khia"],
			["เฆียะ", "khia"],
			["เงียะ", "ngia"],
			["เจียะ", "chia"],
			["เฉียะ", "chia"],
			["เชียะ", "chia"],
			["เซียะ", "sia"],
			["เดียะ", "dia"],
			["เตียะ", "tia"],
			["เถียะ", "thia"],
			["เทียะ", "thia"],
			["เธียะ", "thia"],
			["เนียะ", "nia"],
			["เบียะ", "bia"],
			["เปียะ", "pia"],
			["เผียะ", "phia"],
			["เฝียะ", "fia"],
			["เพียะ", "phia"],
			["เฟียะ", "fia"],
			["เมียะ", "mia"],
			["เยึยะ", "yia"],
			["เรียะ", "ria"],
			["เลียะ", "lia"],
			["เวียะ", "wia"],
			["เศียะ", "sia"],
			["เษียะ", "sia"],
			["เสียะ", "sia"],
			["เหียะ", "hia"],
			["เฮียะ", "hia"],
            ["เกีย", "kia"],
			["เขีย", "khia"],
			["เฃีย", "khia"],
			["เคีย", "khia"],
			["เฅีย", "khia"],
			["เฆีย", "khia"],
			["เงีย", "ngia"],
			["เจีย", "chia"],
			["เฉีย", "chia"],
			["เชีย", "chia"],
			["เซีย", "sia"],
			["เดีย", "dia"],
			["เตีย", "tia"],
			["เถีย", "thia"],
			["เทีย", "thia"],
			["เธีย", "thia"],
			["เนีย", "nia"],
			["เบีย", "bia"],
			["เปีย", "pia"],
			["เผีย", "phia"],
			["เฝีย", "fia"],
			["เพีย", "phia"],
			["เฟีย", "fia"],
			["เมีย", "mia"],
			["เยึีย", "yia"],
			["เรีย", "ria"],
			["เลีย", "lia"],
			["เวีย", "wia"],
			["เศีย", "sia"],
			["เษีย", "sia"],
			["เสีย", "sia"],
			["เหีย", "hia"],
			["เฮีย", "hia"],
            ["เกืยะ", "kuea"],
			["เขืยะ", "khuea"],
			["เฃืยะ", "khuea"],
			["เคืยะ", "khuea"],
			["เฅืยะ", "khuea"],
			["เฆืยะ", "khuea"],
			["เงืยะ", "nguea"],
			["เจืยะ", "chuea"],
			["เฉืยะ", "chuea"],
			["เชืยะ", "chuea"],
			["เซืยะ", "suea"],
			["เดืยะ", "duea"],
			["เตืยะ", "tuea"],
			["เถืยะ", "thuea"],
			["เทืยะ", "thuea"],
			["เธืยะ", "thuea"],
			["เนืยะ", "nuea"],
			["เบืยะ", "buea"],
			["เปืยะ", "puea"],
			["เผืยะ", "phuea"],
			["เฝืยะ", "fuea"],
			["เพืยะ", "phuea"],
			["เฟืยะ", "fuea"],
			["เมืยะ", "muea"],
			["เยืยะ", "yuea"],
			["เรืยะ", "ruea"],
			["เลืยะ", "luea"],
			["เวืยะ", "wuea"],
			["เศืยะ", "suea"],
			["เษืยะ", "suea"],
			["เสืยะ", "suea"],
			["เหืยะ", "huea"],
			["เฮืยะ", "huea"],
            ["เกืย", "kuea"],
			["เขืย", "khuea"],
			["เฃืย", "khuea"],
			["เคืย", "khuea"],
			["เฅืย", "khuea"],
			["เฆืย", "khuea"],
			["เงืย", "nguea"],
			["เจืย", "chuea"],
			["เฉืย", "chuea"],
			["เชืย", "chuea"],
			["เซืย", "suea"],
			["เดืย", "duea"],
			["เตืย", "tuea"],
			["เถืย", "thuea"],
			["เทืย", "thuea"],
			["เธืย", "thuea"],
			["เนืย", "nuea"],
			["เบืย", "buea"],
			["เปืย", "puea"],
			["เผืย", "phuea"],
			["เฝืย", "fuea"],
			["เพืย", "phuea"],
			["เฟืย", "fuea"],
			["เมืย", "muea"],
			["เยืย", "yuea"],
			["เรืย", "ruea"],
			["เลืย", "luea"],
			["เวืย", "wuea"],
			["เศืย", "suea"],
			["เษืย", "suea"],
			["เสืย", "suea"],
			["เหืย", "huea"],
			["เฮืย", "huea"],
            ["กัวะ", "kua"],
			["ขัวะ", "khua"],
			["ฃัวะ", "khua"],
			["คัวะ", "khua"],
			["ฅัวะ", "khua"],
			["ฆัวะ", "khua"],
			["งัวะ", "ngua"],
			["จัวะ", "chua"],
			["ฉัวะ", "chua"],
			["ชัวะ", "chua"],
			["ซัวะ", "sua"],
			["ดัวะ", "dua"],
			["ตัวะ", "tua"],
			["ถัวะ", "thua"],
			["ทัวะ", "thua"],
			["ธัวะ", "thua"],
			["นัวะ", "nua"],
			["บัวะ", "bua"],
			["ปัวะ", "pua"],
			["ผัวะ", "phua"],
			["ฝัวะ", "fua"],
			["พัวะ", "phua"],
			["ฟัวะ", "fua"],
			["มัวะ", "mua"],
			["ยัวะ", "yua"],
			["รัวะ", "rua"],
			["ลัวะ", "lua"],
			["วัวะ", "wua"],
			["ศัวะ", "sua"],
			["ษัวะ", "sua"],
			["สัวะ", "sua"],
			["หัวะ", "hua"],
			["ฮัวะ", "hua"],
            ["กัว", "kua"],
			["ขัว", "khua"],
			["ฃัว", "khua"],
			["คัว", "khua"],
			["ฅัว", "khua"],
			["ฆัว", "khua"],
			["งัว", "ngua"],
			["จัว", "chua"],
			["ฉัว", "chua"],
			["ชัว", "chua"],
			["ซัว", "sua"],
			["ดัว", "dua"],
			["ตัว", "tua"],
			["ถัว", "thua"],
			["ทัว", "thua"],
			["ธัว", "thua"],
			["นัว", "nua"],
			["บัว", "bua"],
			["ปัว", "pua"],
			["ผัว", "phua"],
			["ฝว", "fua"],
			["พัว", "phua"],
			["ฟัว", "fua"],
			["มัว", "mua"],
			["ยัว", "yua"],
			["รัว", "rua"],
			["ลัว", "lua"],
			["วัว", "wua"],
			["หัว", "hua"],
            ["กว", "kua"],
			["ขว", "khua"],
			["ฃว", "khua"],
			["คว", "khua"],
			["ฅว", "khua"],
			["ฆว", "khua"],
			["งว", "ngua"],
			["จว", "chua"],
			["ฉว", "chua"],
			["ชว", "chua"],
			["ซว", "sua"],
			["ดว", "dua"],
			["ตว", "tua"],
			["ถว", "thua"],
			["ทว", "thua"],
			["ธว", "thua"],
			["นว", "nua"],
			["บว", "bua"],
			["ปว", "pua"],
			["ผว", "phua"],
			["ฝว", "fua"],
			["พว", "phua"],
			["ฟว", "fua"],
			["มว", "mua"],
			["ยว", "yua"],
			["รว", "rua"],
			["ลว", "lua"],
			["วว", "wua"],
			["ศว", "sua"],
			["ษว", "sua"],
			["สว", "sua"],
			["หว", "hua"],
			["ฮว", "hua"],
            ["ใก", "kai"],
			["ใข", "khai"],
			["ใฃ", "khai"],
			["ใค", "khai"],
			["ใฅ", "khai"],
			["ใฆ", "khai"],
			["ใง", "ngai"],
			["ใจ", "chai"],
			["ใฉ", "chai"],
			["ใช", "chai"],
			["ใซ", "sai"],
			["ใด", "dai"],
			["ใต", "tai"],
			["ใถ", "thai"],
			["ใท", "thai"],
			["ใธ", "thai"],
			["ใน", "nai"],
			["ใบ", "bai"],
			["ใป", "pai"],
			["ใผ", "phai"],
			["ใฝ", "fai"],
			["ใพ", "phai"],
			["ใฟ", "fai"],
			["ใม", "mai"],
			["ใย", "yai"],
			["ใร", "rai"],
			["ใล", "lai"],
			["ใว", "wai"],
			["ใศ", "sai"],
			["ใษ", "sai"],
			["ใส", "sai"],
			["ให", "hai"],
			["ใฮ", "hai"],
            ["ไก", "kai"],
			["ไข", "khai"],
			["ไฃ", "khai"],
			["ไค", "khai"],
			["ไฅ", "khai"],
			["ไฆ", "khai"],
			["ไง", "ngai"],
			["ไจ", "chai"],
			["ไฉ", "chai"],
			["ไช", "chai"],
			["ไซ", "sai"],
			["ได", "dai"],
			["ไต", "tai"],
			["ไถ", "thai"],
			["ไท", "thai"],
			["ไธ", "thai"],
			["ไน", "nai"],
			["ไบ", "bai"],
			["ไป", "pai"],
			["ไผ", "phai"],
			["ไฝ", "fai"],
			["ไพ", "phai"],
			["ไฟ", "fai"],
			["ไม", "mai"],
			["ไย", "yai"],
			["ไร", "rai"],
			["ไล", "lai"],
			["ไว", "wai"],
			["ไศ", "sai"],
			["ไษ", "sai"],
			["ไส", "sai"],
			["ไห", "hai"],
			["ไฮ", "hai"],
            ["กัย", "kai"],
			["ขัย", "khai"],
			["ฃัย", "khai"],
			["คัย", "khai"],
			["ฅัย", "khai"],
			["ฆัย", "khai"],
			["งัย", "ngai"],
			["จัย", "chai"],
			["ฉัย", "chai"],
			["ชัย", "chai"],
			["ซัย", "sai"],
			["ดัย", "dai"],
			["ตัย", "tai"],
			["ถัย", "thai"],
			["ทัย", "thai"],
			["ธัย", "thai"],
			["นัย", "nai"],
			["บัย", "bai"],
			["ปัย", "pai"],
			["ผัย", "phai"],
			["ฝัย", "fai"],
			["พัย", "phai"],
			["ฟัย", "fai"],
			["มัย", "mai"],
			["ยัย", "yai"],
			["รัย", "rai"],
			["ลัย", "lai"],
			["วัย", "wai"],
			["ศัย", "sai"],
			["ษัย", "sai"],
			["สัย", "sai"],
			["หัย", "hai"],
			["ฮัย", "hai"],
            ["ไกย", "kai"],
			["ไขย", "khai"],
			["ไฃย", "khai"],
			["ไคย", "khai"],
			["ไฅย", "khai"],
			["ไฆย", "khai"],
			["ไงย", "ngai"],
			["ไจย", "chai"],
			["ไฉย", "chai"],
			["ไชย", "chai"],
			["ไซย", "sai"],
			["ไดย", "dai"],
			["ไตย", "tai"],
			["ไถย", "thai"],
			["ไทย", "thai"],
			["ไธย", "thai"],
			["ไนย", "nai"],
			["ไบย", "bai"],
			["ไปย", "pai"],
			["ไผย", "phai"],
			["ไฝย", "fai"],
			["ไพย", "phai"],
			["ไฟย", "fai"],
			["ไมย", "mai"],
			["ไยย", "yai"],
			["ไรย", "rai"],
			["ไลย", "lai"],
			["ไวย", "wai"],
			["ไศย", "sai"],
			["ไษย", "sai"],
			["ไสย", "sai"],
			["ไหย", "hai"],
			["ไฮย", "hai"],
            ["กาย", "kai"],
			["ขาย", "khai"],
			["ฃาย", "khai"],
			["คาย", "khai"],
			["ฅาย", "khai"],
			["ฆาย", "khai"],
			["งาย", "ngai"],
			["จาย", "chai"],
			["ฉาย", "chai"],
			["ชาย", "chai"],
			["ซาย", "sai"],
			["ดาย", "dai"],
			["ตาย", "tai"],
			["ถาย", "thai"],
			["ทาย", "thai"],
			["ธาย", "thai"],
			["นาย", "nai"],
			["บาย", "bai"],
			["ปาย", "pai"],
			["ผาย", "phai"],
			["ฝาย", "fai"],
			["พาย", "phai"],
			["ฟาย", "fai"],
			["มาย", "mai"],
			["ยาย", "yai"],
			["ราย", "rai"],
			["ลาย", "lai"],
			["วาย", "wai"],
			["ศาย", "sai"],
			["ษาย", "sai"],
			["สาย", "sai"],
			["หาย", "hai"],
			["ฮาย", "hai"],
            ["เกา", "kao"],
			["เขา", "khao"],
			["เฃา", "khao"],
			["เคา", "khao"],
			["เฅา", "khao"],
			["เฆา", "khao"],
			["เงา", "ngao"],
			["เจา", "chao"],
			["เฉา", "chao"],
			["เชา", "chao"],
			["เซา", "sao"],
			["เดา", "dao"],
			["เตา", "tao"],
			["เถา", "thao"],
			["เทา", "thao"],
			["เธา", "thao"],
			["เนา", "nao"],
			["เบา", "bao"],
			["เปา", "pao"],
			["เผา", "phao"],
			["เฝา", "fao"],
			["เพา", "phao"],
			["เฟา", "fao"],
			["เมา", "mao"],
			["เยา", "yao"],
			["เรา", "rao"],
			["เลา", "lao"],
			["เวา", "wao"],
			["เศา", "sao"],
			["เษา", "sao"],
			["เสา", "sao"],
			["เหา", "hao"],
			["เฮา", "hao"],
            ["กาว", "kao"],
			["ขาว", "khao"],
			["ฃาว", "khao"],
			["คาว", "khao"],
			["ฅาว", "khao"],
			["ฆาว", "khao"],
			["งาว", "ngao"],
			["จาว", "chao"],
			["ฉาว", "chao"],
			["ชาว", "chao"],
			["ซาว", "sao"],
			["ดาว", "dao"],
			["ตาว", "tao"],
			["ถาว", "thao"],
			["ทาว", "thao"],
			["ธาว", "thao"],
			["นาว", "nao"],
			["บาว", "bao"],
			["ปาว", "pao"],
			["ผาว", "phao"],
			["ฝาว", "fao"],
			["พาว", "phao"],
			["ฟาว", "fao"],
			["มาว", "mao"],
			["ยาว", "yao"],
			["ราว", "rao"],
			["ลาว", "lao"],
			["วาว", "wao"],
			["ศาว", "sao"],
			["ษาว", "sao"],
			["สาว", "sao"],
			["หาว", "hao"],
			["ฮาว", "hao"],
            ["กุย", "kui"],
			["ขุย", "khui"],
			["ฃุย", "khui"],
			["คุย", "khui"],
			["ฅุย", "khui"],
			["ฆุย", "khui"],
			["งุย", "ngui"],
			["จุย", "chui"],
			["ฉุย", "chui"],
			["ชุย", "chui"],
			["ซุย", "sui"],
			["ดุย", "dui"],
			["ตุย", "tui"],
			["ถุย", "thui"],
			["ทุย", "thui"],
			["ธุย", "thui"],
			["นุย", "nui"],
			["บุย", "bui"],
			["ปุย", "pui"],
			["ผุย", "phui"],
			["ฝุย", "fui"],
			["พุย", "phui"],
			["ฟุย", "fui"],
			["มุย", "mui"],
			["ยุย", "yui"],
			["รุย", "rui"],
			["ลุย", "lui"],
			["วุย", "wui"],
			["ศุย", "sui"],
			["ษุย", "sui"],
			["สุย", "sui"],
			["หุย", "hui"],
			["ฮุย", "hui"],
            ["โกย", "koi"],
			["โขย", "khoi"],
			["โฃย", "khoi"],
			["โคย", "khoi"],
			["โฅย", "khoi"],
			["โฆย", "khoi"],
			["โงย", "ngoi"],
			["โจย", "choi"],
			["โฉย", "choi"],
			["โชย", "choi"],
			["โซย", "soi"],
			["โดย", "doi"],
			["โตย", "toi"],
			["โถย", "thoi"],
			["โทย", "thoi"],
			["โธย", "thoi"],
			["โนย", "noi"],
			["โบย", "boi"],
			["โปย", "poi"],
			["โผย", "phoi"],
			["โฝย", "foi"],
			["โพย", "phoi"],
			["โฟย", "faoi"],
			["โมย", "moi"],
			["โยย", "yoi"],
			["โรย", "roi"],
			["โลย", "loi"],
			["โวย", "woi"],
			["โศย", "soi"],
			["โษย", "soi"],
			["โสย", "soi"],
			["โหย", "hoi"],
			["โฮย", "hoi"],
            ["กอย", "koi"],
			["ขอย", "khoi"],
			["ฃอย", "khoi"],
			["คอย", "khoi"],
			["ฅอย", "khoi"],
			["ฆอย", "khoi"],
			["งอย", "ngoi"],
			["จอย", "choi"],
			["ฉอย", "choi"],
			["ชอย", "choi"],
			["ซอย", "soi"],
			["ดอย", "doi"],
			["ตอย", "toi"],
			["ถอย", "thoi"],
			["ทอย", "thoi"],
			["ธอย", "thoi"],
			["นอย", "noi"],
			["บอย", "boi"],
			["ปอย", "poi"],
			["ผอย", "phoi"],
			["ฝอย", "foi"],
			["พอย", "phoi"],
			["ฟอย", "faoi"],
			["มอย", "moi"],
			["ยอย", "yoi"],
			["รอย", "roi"],
			["ลอย", "loi"],
			["วอย", "woi"],
			["ศอย", "soi"],
			["ษอย", "soi"],
			["สอย", "soi"],
			["หอย", "hoi"],
			["ฮอย", "hoi"],
            ["เกย", "koei"],
			["เขย", "khoei"],
			["เฃย", "khoei"],
			["เคย", "khoei"],
			["เฅย", "khoei"],
			["เฆย", "khoei"],
			["เงย", "ngoei"],
			["เจย", "choei"],
			["เฉย", "choei"],
			["เชย", "choei"],
			["เซย", "soei"],
			["เดย", "doei"],
			["เตย", "toei"],
			["เถย", "thoei"],
			["เทย", "thoei"],
			["เธย", "thoei"],
			["เนย", "noei"],
			["เบย", "boei"],
			["เปย", "poei"],
			["เผย", "phoei"],
			["เฝย", "foei"],
			["เพย", "phoei"],
			["เฟย", "faoei"],
			["เมย", "moei"],
			["เยย", "yoei"],
			["เรย", "roei"],
			["เลย", "loei"],
			["เวย", "woei"],
			["เศย", "soei"],
			["เษย", "soei"],
			["เสย", "soei"],
			["เหย", "hoei"],
			["เฮย", "hoei"],
            ["เกือย", "kueai"],
			["เขือย", "khueai"],
			["เฃือย", "khueai"],
			["เคือย", "khueai"],
			["เฅือย", "khueai"],
			["เฆือย", "khueai"],
			["เงือย", "ngueai"],
			["เจือย", "chueai"],
			["เฉือย", "chueai"],
			["เชือย", "chueai"],
			["เซือย", "sueai"],
			["เดือย", "dueai"],
			["เตือย", "tueai"],
			["เถือย", "thueai"],
			["เทือย", "thueai"],
			["เธือย", "thueai"],
			["เนือย", "nueai"],
			["เบือย", "bueai"],
			["เปือย", "pueai"],
			["เผือย", "phueai"],
			["เฝือย", "fueai"],
			["เพือย", "phueai"],
			["เฟือย", "fueai"],
			["เมือย", "mueai"],
			["เยือย", "yueai"],
			["เรือย", "rueai"],
			["เลือย", "lueai"],
			["เวือย", "wueai"],
			["เศือย", "sueai"],
			["เษือย", "sueai"],
			["เสือย", "sueai"],
			["เหือย", "hueai"],
			["เฮือย", "hueai"],
            ["กวย", "kuai"],
			["ขวย", "khuai"],
			["ฃวย", "khuai"],
			["ควย", "khuai"],
			["ฅวย", "khuai"],
			["ฆวย", "khuai"],
			["งวย", "nguai"],
			["จวย", "chuai"],
			["ฉวย", "chuai"],
			["ชวย", "chuai"],
			["ซวย", "suai"],
			["ดวย", "duai"],
			["ตวย", "tuai"],
			["ถวย", "tuau"],
			["ทวย", "thuai"],
			["ธวย", "thuai"],
			["นวย", "nuai"],
			["บวย", "buai"],
			["ปวย", "puai"],
			["ผวย", "phuai"],
			["ฝวย", "fuai"],
			["พวย", "phuai"],
			["ฟวย", "fuai"],
			["มวย", "muai"],
			["ยวย", "yuai"],
			["รวย", "ruai"],
			["ลวย", "luai"],
			["ววย", "wuai"],
			["ศวย", "suai"],
			["ษวย", "suai"],
			["สวย", "suai"],
			["หวย", "huai"],
			["ฮวย", "huai"],
            ["กิว", "kio"],
			["ขิว", "khio"],
			["ฃิว", "khio"],
			["คิว", "khio"],
			["ฅิว", "khio"],
			["ฆิว", "khio"],
			["งิว", "ngio"],
			["จิว", "chio"],
			["ฉิว", "chio"],
			["ชิว", "chio"],
			["ซิว", "sio"],
			["ดิว", "dio"],
			["ติว", "tio"],
			["ถิว", "tio"],
			["ทิว", "thio"],
			["ธิว", "thio"],
			["นิว", "nio"],
			["บิว", "bio"],
			["ปิว", "pio"],
			["ผิว", "phio"],
			["ฝิว", "fio"],
			["พิว", "phio"],
			["ฟิว", "fuai"],
			["มิว", "mio"],
			["ยิว", "yio"],
			["ริว", "rio"],
			["ลิว", "lio"],
			["วิว", "wio"],
			["ศิว", "sio"],
			["ษิว", "sio"],
			["สิว", "sio"],
			["หิว", "hio"],
			["ฮิว", "hio"],
            ["แกว", "kaeo"],
			["แคว", "khaeo"],
			["แจว", "chaeo"],
			["แฉว", "chaeo"],
			["แชว", "chaeo"],
			["แซว", "saeo"],
			["แดว", "daeo"],
			["แตว", "taeo"],
			["แถว", "taeo"],
			["แทว", "thaeo"],
			["แธว", "thaeo"],
			["แนว", "naeo"],
			["แบว", "baeo"],
			["แปว", "paeo"],
			["แผว", "phaeo"],
			["แฝว", "faeo"],
			["แพว", "phaeo"],
			["แฟว", "faeo"],
			["แมว", "maeo"],
			["แยว", "yaeo"],
			["แรว", "raeo"],
			["แลว", "laeo"],
			["แวว", "waeo"],
			["แศว", "saeo"],
			["แษว", "saeo"],
			["แสว", "saeo"],
			["แหว", "haeo"],
			["แฮว", "haeo"],
            ["เกียว", "kiao"],
			["เขียว", "khiao"],
			["เฃียว", "khiao"],
			["เคียว", "khiao"],
			["เฅียว", "khiao"],
			["เฆียว", "khiao"],
			["เงียว", "ngiao"],
			["เจียว", "chiao"],
			["เฉียว", "chiao"],
			["เชียว", "chiao"],
			["เซียว", "siao"],
			["เดียว", "diao"],
			["เตียว", "tiao"],
			["เถียว", "tiao"],
			["เทียว", "thiao"],
			["เธียว", "thiao"],
			["เนียว", "niao"],
			["เบียว", "biao"],
			["เปียว", "piao"],
			["เผียว", "phiao"],
			["เฝียว", "fiao"],
			["เพียว", "phiao"],
			["เฟียว", "fiao"],
			["เมียว", "miao"],
			["เยียว", "yiao"],
			["เวียว", "riao"],
			["เลียว", "liao"],
			["เวียว", "wiao"],
			["เศียว", "siao"],
			["เษียว", "siao"],
			["เสียว", "siao"],
			["เหียว", "hiao"],
			["เฮียว", "hiao"]
        ]
	}
};