/** Возвращает "развернутую" копию text */
import { len } from './len.js';

export function reverse(text) {
    let resultText = "";
    const lastSymb = len(text) -1;
    for (let i = lastSymb; i >= 0; i--) {
        resultText += text[i];
    } return resultText;
}
