import { toUpper, toLower } from "./char-utils.js";
import { checkIsString } from "./common.js";
import { len } from "./len.js";

/** возвращает копию строки text в верхнем регистре */
export function upperCase(text) {
  checkIsString(text);
  let resultText = "";
  for (let index = 0; index < len(text); index++) {
    resultText += toUpper(text[index]);
  }
  return resultText;
}

/** возвращает копию строки text в верхнем регистре */
export function lowerCase(text) {
  checkIsString(text);
  let resultText = "";
  for (let index = 0; index < len(text); index++) {
    resultText += toLower(text[index]);
  }
  return resultText;
}
