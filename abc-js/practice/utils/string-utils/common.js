// --------------- for tests ------------------

export const complexText = "Hello world!!! It's terminator";

export const ZERO_CODE_CHAR = String.fromCharCode(0);

export function checkStringError(firstText, secondText) {
    if (typeof secondText !== "string" || typeof firstText !== "string") throw Error ("argument must be type of string");
};