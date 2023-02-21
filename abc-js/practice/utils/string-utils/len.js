export function len(text) {
    if (typeof text !== "string") throw Error ("argument must be type of string");
    let lenCount = 0;
    for (let i = 0; text[i] !== undefined; i+=1) {
        lenCount+=1;
    } 
    return lenCount;
}
