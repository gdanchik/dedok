/** Возвращает булевый результат заканчивается ли text на search.
  endPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за конец текста.*/
  import { checkIsString } from "./common.js";
  import { indexOf } from "./index-of.js";
  import { len } from "./len.js";
  
  export function startsWith(text, search, startPosition = 0) {
    [text, search].forEach((s, i) => checkIsString(s, ` ${i ? 'search' : 'text'}`));
    const lenText = len(text);
    const lenSearch = len(search);
    if (typeof startPosition !== "number") throw Error("invalid position type");
    if (startPosition > lenText || startPosition < 0)throw Error("invalid position");
    if (startPosition + lenSearch >= lenText)throw Error("invalid start position or search length");
    if (search === "") return true;
    return indexOf(text, search, startPosition) === startPosition;
  }
  
  /** Возвращает булевый результат начинается ли text на search.
    startPosition - необязательный параметр позволяющий указать позицию
    (не индекс) символа который необходимо считать за начало текста.*/
  export function endsWith(text, search, endPosition = text.length) {
    [text, search].forEach((s, i) => checkIsString(s, ` ${i ? 'search' : 'text'}`));
    const startIndex = endPosition - search.length;
    const lenText = len(text);
    const lenSearch = len(search);
    if (typeof endPosition !== "number") throw Error("invalid position type");
    if (endPosition > lenText || endPosition < 0)throw Error("invalid position");
    if (endPosition < lenSearch)throw Error("invalid end position or search length");
    if (search === "") return true;
    return indexOf(text, search, startIndex) === startIndex;
  }
