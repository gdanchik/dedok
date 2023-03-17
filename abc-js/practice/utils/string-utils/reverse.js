/** Возвращает "развернутую" копию text */
import { len } from "./len.js";

export function reverse(text) {
  let resultText = "";
  const lastIndex = len(text) - 1;
  for (let i = lastIndex; i >= 0; i--) {
    resultText += text[i];
  }
  return resultText;
}
