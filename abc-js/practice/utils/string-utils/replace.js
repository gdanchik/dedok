/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
import { checkIsString } from "./common.js";
import { len } from "./len.js";
import { substring } from "./substring.js";
import { indexOf } from "./index-of.js";
import { isEqual } from "./compare.js";

export function replace(text, search, target) {
    checkIsString(text, " text");
    checkIsString(search, " search");
    checkIsString(target, " target");  
    let index = indexOf(text, search);
    if (index === -1) return text;
    let firstText = substring(text, 0, index);
    let secondText = substring(text, index + len(search));
    let result = firstText + target + secondText;
    return result;
}
/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {
    checkIsString(text, " text");
    checkIsString(search, " search");
    checkIsString(target, " target");

    let index = indexOf(text,search);
    // console.log(index);
    let lenSearch = len(search);
    while (index !== -1) {
      let firstText = substring(text, 0, index);
      console.log("lenF:" + len(firstText))
      let secondText = substring(text, index + lenSearch);
      text = firstText + target + secondText;
      index = indexOf(text, search, index + len(target));
    }
    return text;
}
