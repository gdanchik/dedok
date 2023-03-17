/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
import { len } from "./len.js";
import { isInteger } from "/abc-js/practice/utils/number-utils/is-integer.js";
import { checkIsString } from "./common.js";

export function substring(text, start, end) {
  const lenText = len(text);
  checkIsString(text);
  if (typeof start === "undefined" && typeof end === "undefined") return text;
  if (typeof start !== "number") throw Error ("start must be type of number");
  if (typeof (end ?? lenText) !== "number") throw Error ("end must be type of number");
  start = start ?? 0;
  end = end ?? lenText;
  if (!isInteger(start) || start < 0) throw Error("invalid start index");
  if (!isInteger(end) || end < 0) throw Error("invalid end index");
  if (end < start) throw Error("invalid start and end index");

  let result = "";
  for (let index = 0; index < end; index++) {
    if (index >= start) {
      result += text[index];
    }
  }
  return result;
}
