export function len(text) {
    let lenCount = 0;
    for (let i = 0; text[i] == undefined; i+=1) {
        lenCount+=1;
    } 
    return lenCount;
}
