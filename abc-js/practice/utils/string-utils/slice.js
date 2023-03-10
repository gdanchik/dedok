import { checkIsString } from "./common.js";
import { len } from "./len.js";
import { substring } from "./substring.js";

/** Возвращает часть строки указанной между индексами startIndex, finishIndex.
  Отличается от substring тем, что позволяет указывать отрицательные индексы
  которые отсчитываются с конца строки. */
function isPositive(index) {
  return index >= 0;
}

function isNegative(index) {
  return index < 0;
}

export function slice(text, startIndex, finishIndex) {
  const lenText = len(text);

  if (typeof (startIndex ?? 0) !== "number") throw Error("invalid start index");
  if (typeof (finishIndex ?? 0) !== "number") throw Error("invalid end index");

  if (
    (isNegative(startIndex) && isPositive(finishIndex)) ||
    (isNegative(finishIndex) && isPositive(startIndex))
  )
    throw "indexes must be only positive or negative";

  if (isNegative(startIndex) && isNegative(finishIndex)) {
    startIndex = startIndex + lenText;
    finishIndex = finishIndex + lenText;
  } else if (isNegative(startIndex)) {
    startIndex = startIndex + lenText;
  }

  if (finishIndex < startIndex) throw Error("invalid start and end index");

  if (finishIndex > lenText) throw Error("invalid end index");
  return substring(text, startIndex, finishIndex);
}
