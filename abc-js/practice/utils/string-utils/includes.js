/** Возвращает булево значение, включен ли searchString в text.
  startIndex, позволяет указать с какого индекса начать поиск. */
import { indexOf } from "./index-of.js";
import { checkIsString } from "./common.js";
import { len } from "./len.js";

export function includes(text, searchString, startIndex = 0) {
  checkIsString(text);
  if (typeof startIndex !== "number"||
      startIndex % 1 !== 0 ||
      startIndex > len(text) || 
      startIndex < 0) throw Error("invalid index");
  if (typeof searchString !== "string") throw Error("invalid searchString string");
  return indexOf(text, searchString, startIndex = 0) !== -1;
}
