/** Возвращает булевый результат заканчивается ли text на search.
  endPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за конец текста.*/

import { checkIsString } from "./common.js";
import { indexOf } from "./index-of.js";
import { len } from "./len.js";
import { reverse } from "./reverse.js";

export function startsWith(text, search, startPosition = 0) {
  checkIsString(text, " text");
  checkIsString(search, " search");
  if (typeof startPosition !== "number") throw Error("invalid position type");
  if (startPosition > len(text) || startPosition < 0)
    throw Error("invalid position");
  if (startPosition >= len(text) - 1)
    throw Error("invalid start position or search length");
  if (search === "") return true;
  return indexOf(text, search, startPosition) === startPosition;
}

/** Возвращает булевый результат начинается ли text на search.
  startPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за начало текста.*/
export function endsWith(text, search, endPosition = text.length) {
  const startIndex = endPosition - search.length;
  checkIsString(text, " text");
  checkIsString(search, " search");
  if (typeof endPosition !== "number") throw Error("invalid position type");
  if (endPosition > len(text) || endPosition < 0)
    throw Error("invalid position");
  if (endPosition < len(search))
    throw Error("invalid end position or search length");
  if (search === "") return true;
  return indexOf(text, search, startIndex) === startIndex;
}
