/** Возвращает text повторенный count раз. */
import { isInteger } from '/abc-js/practice/utils/number-utils/is-integer.js';

// Условие проверки цифры и текста закинуть в один иф

function checkNumberErrors(count) {if (!isInteger(count) || count < 0) throw Error("'invalid count");}
// function checkTypeErrors(text,count) {if (typeof count !== "number" && text !== "string") throw Error ("invalid count");}

export function repeat(text, count = 1) {
    if (typeof count !== "number") throw Error ("invalid count");
    if (typeof text !== "string") throw Error ("argument must be type of string");
    checkNumberErrors(count);
    
    let result = "";
    for (let index = 0; index < count; index++) {
        result += text;
    } return result;
}
