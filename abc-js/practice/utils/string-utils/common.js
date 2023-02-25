// --------------- for tests ------------------

export const complexText = "Hello world!!! It's terminator";

export const ZERO_CODE_CHAR = String.fromCharCode(0);

export function checkStringError(text) {
    if (typeof text !== "string") throw Error("argument must be type of string");
};

export function checkNumberError(count) {
    if (typeof count !== "number") throw Error ("invalid count");
};

export function checkError(value) {
    if (typeof value !== "number") throw Error("value must be only number type");
}

