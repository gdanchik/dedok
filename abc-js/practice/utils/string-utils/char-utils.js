import { isInRange } from "../number-utils/is-in-range.js";
import {
  DIGIT_FINISH,
  DIGIT_START,
  ENG_CHAR_SHIFT,
  ENG_LOWER_FINISH,
  ENG_LOWER_START,
  ENG_UPPER_FINISH,
  ENG_UPPER_START,
  RUS_CHAR_SHIFT,
  RUS_LOWER_FINISH,
  RUS_LOWER_START,
  RUS_UPPER_FINISH,
  RUS_UPPER_START,
  COUNT_NUM,
} from "./common.js";
import { len } from "./len.js";

function checkParameters(char) {
  if (typeof char !== "string")
    throw Error("parameter is required and must be string type");
  if (len(char) > 1) throw Error("char must be only one symbol char");
}

/** возвращает булевый ответ, является ли символ в нижнем регистре. */
export function isLower(char) {
  checkParameters(char);
  const charCode = char.charCodeAt(0);
  if (
    isInRange(charCode, ENG_LOWER_START, ENG_LOWER_FINISH) ||
    isInRange(charCode, RUS_LOWER_START, RUS_LOWER_FINISH)
  )
    return true;
  else return false;
}

/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {
  checkParameters(char);
  const charCode = char.charCodeAt(0);
  if (
    isInRange(charCode, ENG_UPPER_START, ENG_UPPER_FINISH) ||
    isInRange(charCode, RUS_UPPER_START, RUS_UPPER_FINISH)
  )
    return true;
  else return false;
}

/** переводит в символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {
  checkParameters(char);
  const charCode = char.charCodeAt(0);
  if (isUpper(char)) return String.fromCharCode(charCode + COUNT_NUM);
  return char;
}

/** переводит в символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение. 'a' --> 'A'*/
export function toUpper(char) {
  checkParameters(char);
  const charCode = char.charCodeAt(0);
  if (isLower(char)) return String.fromCharCode(charCode - COUNT_NUM);
  return char;
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {
  checkParameters(char);
  const charCode = char.charCodeAt(0);
  return isInRange(charCode, DIGIT_START, DIGIT_FINISH);
}

/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
  checkParameters(char);
  const charCode = char.charCodeAt(0);
  if (!isDigit(char)) throw Error("invalid char");
  return charCode - DIGIT_START;
}

/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
  if (typeof digit !== "number")
    throw Error("parameter is required and must be number type");
  if (digit < 0 || digit > 9) throw Error("invalid digit");
  return String.fromCharCode(digit + DIGIT_START);
}
