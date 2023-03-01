/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
import { len } from './len.js';
import { isInteger } from '/abc-js/practice/utils/number-utils/is-integer.js';

export function indexOf(text, searchString, position = 0) {
    checkAllParameters(text, searchString, position);
    const lenText = len(text);
    const lenSearchString = len(searchString);
    for (let index = position; index < lenText; index++) {
        if (text[index] === searchString[0]) {
            let found = true;
            for (let i = 0; i < lenSearchString; i++) {
                if (text[index + i] !== searchString[i]) {
                    found = false;
                    break;
                }
            }
            if (found) return index;
        }

    }
    return -1;
}

function checkAllParameters(text, searchString, position) {
    if (typeof text !== "string") throw Error("argument must be type of string");
    if (typeof searchString === "undefined" || typeof searchString !== "string") throw Error("invalid search string");
    if (typeof position !== "number" || !isInteger(position)) throw Error("invalid index");
}