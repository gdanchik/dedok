import { substring } from "./substring.js";
import { len } from "./len.js";
import { checkIsString } from "./common.js";
import { includes } from "./includes.js";
const TRIM_SYMBOLS = " \n\t\v";

/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols = TRIM_SYMBOLS) {
  checkIsString(trimSymbols, " trimSymbols");
  checkIsString(text, " text");
  const lenText = len(text);
  for (let i = 0; i < lenText; i++) {
    if (!includes(trimSymbols, text[i])) {
      return substring(text, i);
    }
  }
  return "";
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols = TRIM_SYMBOLS) {
  checkIsString(trimSymbols, " trimSymbols");
  checkIsString(text, " text");
  const lenText = len(text);
  for (let i = lenText - 1; i >= 0; i--) {
    if (!includes(trimSymbols, text[i])) {
      return substring(text, 0, i + 1);
    }
  }
  return "";
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols = TRIM_SYMBOLS) {
  return trimStart(trimEnd(text, trimSymbols), trimSymbols);
}
