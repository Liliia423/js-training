let num = 5;
console.log(typeof num); //number

let numA = 10;
numA += 5;
console.log(numA); //15

let numB = '5';
let result = numA + numB;
console.log(result); //155
console.log(typeof result); //string
console.log(Number(155)); //155
console.log(typeof Number(155));

let str = ' apples';
console.log(155 + ' apples'); //155 apples

let name = 'Anny';
let age = 25;
let message = `Hello, my name is ${name}, and I am ${age} years old.`;
console.log(message); //Hello, my name is Anny, and I am 25 years old.
console.log(message.length); //46

console.log(message[0]); //H
const border = '128px';
const newBorder = Number.parseInt(border);
console.log(newBorder); //128
console.log(typeof newBorder); //number
