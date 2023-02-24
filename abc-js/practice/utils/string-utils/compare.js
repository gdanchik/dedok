import { len } from './len.js';
import { checkStringError } from './common.js';

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
    return !(isEqual(firstText, secondText));
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    checkStringError(firstText, secondText);
    let charLength = len(firstText);
    for (let index = 0; index < charLength; index++) {
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
    checkStringError(firstText, secondText);
    if (len(firstText) < len(secondText)) return true;
        if (isEqual(firstText, secondText)) {
            return false;
        } else if (isMore(firstText, secondText)) {
            return false;
        } return true
}


/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    checkStringError(firstText, secondText);  
      return!(isLess(firstText, secondText));
 

}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    checkStringError(firstText, secondText);
      return!(isMore(firstText, secondText));
    
}
