/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
import { checkIsString } from "./common.js";
import { len } from "./len.js";

function template (text, maxLength, fillString = " ") {
  checkIsString(fillString, " fillString");
  checkIsString(text, " text");
  if (typeof (maxLength ?? text.length) !== "number") throw Error("invalid type of maxLength");
  let add = "";
  let fillIndex = 0;
  for (let i = text.length; i < maxLength; i++) {
    add += fillString[fillIndex % len(fillString)];
    fillIndex++;
  }
  return add;
}

export function padStart(text, maxLength, fillString = " ") {
  let result = template (text, maxLength, fillString);
  return result + text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = " ") {
  let result = template (text, maxLength, fillString);
  return text + result;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = " ") {
  checkIsString(text, " text");
  if (typeof (maxLength ?? 0) !== "number") throw Error("invalid type of maxLength");
  let fillNum = maxLength - len(text)
  let leftFill = Math.floor(fillNum/2);
  let rightFill = Math.ceil(fillNum/2);
  let start = padStart(text, rightFill + len(text),fillString);
  console.log(start);
  let end = padEnd(start,leftFill + len(start),fillString);
  console.log(end);
  return end;
}
