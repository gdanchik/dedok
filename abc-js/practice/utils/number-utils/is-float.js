function checkError(value) {if (typeof value !== "number") throw Error ("value must be only number type")};

export function isFloat(value) {
    checkError(value);
    return!((value % 1 === 0));
}
