import { substring } from "./substring.js";
import { len } from "./len.js";
import { reverse } from "./reverse.js";
import { checkIsString } from "./common.js";
const TRIM_SYMBOLS = " \n\t\v";

/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols = TRIM_SYMBOLS) {
  checkIsString(trimSymbols, " trimSymbols");
  checkIsString(text, " text");
  const lenText = len(text);
  for (let i = 0; i < lenText; i++) {
    if (!trimSymbols.includes(text[i])) {
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
  return reverse(trimStart(reverse(text), trimSymbols));
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols = TRIM_SYMBOLS) {
  return trimStart(trimEnd(text, trimSymbols), trimSymbols);
}
