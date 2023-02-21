import { len } from './len.js';
function checkUndefinedError(firstText, secondText) {if (typeof secondText === 'undefined' && typeof firstText === 'undefined') throw Error("argument must be type of string");}
function checkStringError(firstText, secondText) {if (typeof secondText !== "string" || typeof firstText !== "string") throw Error ("argument must be type of string");}
function checkErrors(firstText, secondText) {
    checkUndefinedError(firstText, secondText);
    checkStringError(firstText, secondText);};

/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    checkStringError(firstText, secondText);
    if (len(firstText) !== len(secondText)) return false;

    for (let index = 0; index < len(firstText); index++) {
        if (firstText[index] !== secondText[index]) return false;
    }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    checkErrors(firstText, secondText);
    if (len(firstText) !== len(secondText)) return true;

    for (let index = 0; index < len(firstText); index++) {
        if (firstText[index] !== secondText[index]) return true;
    } return false;
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    checkErrors(firstText, secondText);

    // const currentLength = len(firstLength) > len(secondeLength) ? len(firstText) : len(secondText);
    for (let index = 0; index < len(firstText); index++) {
        if (index === len(secondText)) {
           return true;
        } else if(firstText[index] >  secondText[index]) {
            return true;
        } else if (firstText [index] < secondText[index]) {
            return false;
        }
    } return false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    checkErrors(firstText, secondText);
    if (len(firstText) < len(secondText)) return true;

    for (let index = 0; index < len(firstText); index++) {
        if (isEqual(firstText, secondText)) {
            return false;
        } else if (isMore(firstText, secondText)) {
            return false;
        } return true;
    }
    return false;
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    checkStringError(firstText, secondText);
    
    const currentLength = len(firstText) > len(secondText) ? len(firstText) : len(secondText);
    for (let index = 0; index < currentLength; index++) {
      if(isLess(firstText, secondText)) return false;
    } return true;

}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    checkStringError(firstText, secondText);
    
    const currentLength = len(firstText) > len(secondText) ? len(firstText) : len(secondText);
    for (let index = 0; index < currentLength; index++) {
      if(isMore(firstText, secondText)) return false;
    } return true;
}
