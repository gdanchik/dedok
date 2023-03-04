/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
import { len } from "./len.js"
import { isEqual } from "./compare.js"
import { substring } from "./substring.js"
import { isInteger } from "/abc-js/practice/utils/number-utils/is-integer.js"

export function indexOf(text, searchString, index = 0) {
  checkParameters(text,searchString, index);
  const lenText = len(text);
  const lenSearchStr = len(searchString);

  if(lenSearchStr === 0) return -1;
  if(index > lenText || index < 0 ) throw Error("invalid index");


  for(let i = index; i <= lenText - lenSearchStr; i++) {
    if(isEqual(substring(text,i, i + lenSearchStr), searchString)) {
      return i;
    }
  } 
  return -1
} 

function checkParameters(text, searchString, index) {
  if (typeof text !== "string") throw Error("argument must be type of string");
  if ( typeof searchString !== "string") throw Error("invalid searchString string");
  if (typeof index !== "number" || !isInteger(index)) throw Error("invalid index");
}
