/** проверяет входит ли число num в диапозон от begin до end.
  Значения begin и end вхоодят в проверяемый диапазон.*/

function checkParameters(num) {
  if (num == undefined)
    throw Error("all parameter is required and must be number type");
  if (typeof num !== "number")
    throw Error("all parameter is required and must be number type");
}

export function isInRange(num, begin, end) {
  checkParameters(num);
  checkParameters(begin);
  checkParameters(end);
  return num >= begin && num <= end;
}
