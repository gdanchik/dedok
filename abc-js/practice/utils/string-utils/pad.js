/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
import { checkIsString } from "./common.js";
import { len } from "./len.js";

export function padStart(text, maxLength, fillString = " ") {
  let prefix = "";
  let fillIndex = 0;

  checkIsString(fillString, " fillString");
  checkIsString(text, " text");
  if (typeof (maxLength ?? text.length) !== "number")
    throw Error("invalid type of maxLength");

  for (let i = text.length; i < maxLength; i++) {
    prefix += fillString[fillIndex % len(fillString)];
    fillIndex++;
  }

  return prefix + text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = " ") {
  let suffix = "";
  let fillIndex = 0;

  checkIsString(fillString, " fillString");
  checkIsString(text, " text");
  if (typeof (maxLength ?? text.length) !== "number")
    throw Error("invalid type of maxLength");

  for (let i = text.length; i < maxLength; i++) {
    suffix += fillString[fillIndex % len(fillString)];
    fillIndex++;
  }

  return text + suffix;
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
