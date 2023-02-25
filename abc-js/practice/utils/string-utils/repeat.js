/** Возвращает text повторенный count раз. */
// Условие проверки цифры и текста закинуть в один иф
// function checkTypeErrors(text,count) {if (typeof count !== "number" && text !== "string") throw Error ("invalid count");}

import { isInteger } from '/abc-js/practice/utils/number-utils/is-integer.js';
import { checkNumberError, checkStringError } from './common.js';

export function repeat(text, count = 1) {
    checkStringError(text);
    checkNumberError(count);
    if (!isInteger(count) || count < 0) throw Error("'invalid count");
    let result = "";
    for (let index = 0; index < count; index++) {
        result += text;
    } return result;
}
