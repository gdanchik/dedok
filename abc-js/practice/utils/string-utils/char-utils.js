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
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) return true;
  else if (char.charCodeAt(0) >= 1072 && char.charCodeAt(0) <= 1103)
    return true;
  else return false;
}

/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {
  checkParameters(char);
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return true;
  else if (char.charCodeAt(0) >= 1040 && char.charCodeAt(0) <= 1071)
    return true;
  else return false;
}

/** переводит в символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {
  checkParameters(char);
  const charCode = char.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(charCode + 32);
  } else if (charCode >= 1040 && charCode <= 1071) {
    return String.fromCharCode(charCode + 32);
  }
  return char;
}

/** переводит в символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение. 'a' --> 'A'*/
export function toUpper(char) {
  checkParameters(char);
  const charCode = char.charCodeAt(0);
  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(charCode - 32);
  } else if (charCode >= 1072 && charCode <= 1103) {
    return String.fromCharCode(charCode - 32);
  }
  return char;
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {
  checkParameters(char);
  return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
}

/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
  checkParameters(char);
  if (!isDigit(char)) throw Error("invalid char");
  return char.charCodeAt(0) - "0".charCodeAt(0);
}

/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
  if (typeof digit !== "number")
    throw Error("parameter is required and must be number type");
  if (digit < 0 || digit > 9) throw Error("invalid digit");
  return String.fromCharCode(digit + 48);
}
