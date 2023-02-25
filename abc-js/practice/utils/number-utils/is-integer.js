import { checkError } from "../string-utils/common.js";

export function isInteger(value) {
    checkError(value);
    return(value % 1 === 0);
}



