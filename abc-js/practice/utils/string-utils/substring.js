/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
import { len } from "./len.js";
import { isInteger } from "/abc-js/practice/utils/number-utils/is-integer.js";
import { checkIsString } from "./common.js";

export function substring(text, start, end) {
  let result = "";
  checkIsString(text);
  if (typeof start === "undefined" && typeof end === "undefined") {
    return text;
  }
  start = start ?? 0;
  end = end ?? len(text);
  if (!isInteger(start) || start < 0) throw Error("invalid start index");
  if (typeof end !== "number" || end < 0) throw Error("invalid end index");
  if (!isInteger(end)) throw Error("invalid end index");
  if (end < start) throw Error("invalid start and end index");

  for (let index = 0; index < end; index++) {
    if (index >= start) {
      result += text[index];
    }
  }
  return result;
}
