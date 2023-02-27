import { checkStringError } from "./common.js";
export function len(text) {
    checkStringError(text);
    let lenCount = 0;
    for (; text[lenCount] !== undefined; lenCount+=1) {} 
    return lenCount;
}
