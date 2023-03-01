function checkNumberError(value) {
    if (typeof value !== "number") throw Error("value must be only number type");
}

export function isInteger(value) {
    checkNumberError(value);
    return(value % 1 === 0);
}



