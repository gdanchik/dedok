import { checkIsString } from "./common.js";

export function len(text) {
  checkIsString(text);
  let lenCount = 0;
  for (; text[lenCount] !== undefined; lenCount += 1) {}
  return lenCount;
}
