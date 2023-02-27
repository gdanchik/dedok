/** Возвращает целое числовое значение переданного аргумента value. */
import { len } from "../string-utils/len.js";
import { isFloat } from "./is-float.js";

export function parseInteger(value) {
    if (typeof value === "number") {
        return value;
    }

    if (isFloat(value)) {

    }
}
