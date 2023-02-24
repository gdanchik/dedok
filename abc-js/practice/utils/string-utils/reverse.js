/** Возвращает "развернутую" копию text */
import { len } from './len.js';

export function reverse(text) {
    let resultText = "";
    for (let i = len(text) - 1; i >= 0; i--) {
        resultText += text[i];
    } return resultText
}
