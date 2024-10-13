'use strict';
function getElementWidth(content, padding, border) {
  console.log(typeof content); //number
  console.log(typeof padding); //number
  console.log(typeof border); //number
  let results = content + (padding * 2 + border * 2);
  console.log(typeof results); //number
  return results;
}
console.log(getElementWidth(60, 12, 8.5)); //101

/*function getElementWidth(content, padding, border) {
  console.log(typeof content); //string
  console.log(typeof padding); //number
  console.log(typeof border); //number
  let results = content + (padding * 2 + border * 2);
  console.log(typeof results); //string
  return results;
}
console.log(getElementWidth('60px', 12, 8.5)); //60px41*/

/*function getElementWidth(content, padding, border) {
  console.log(typeof content); //string
  console.log(typeof padding); //string
  padding *=1;
  console.log(typeof padding);//number
  console.log(typeof border); //number
  let results = content + (padding * 2 + border * 2);
  console.log(typeof results); //string
  return results;
}
console.log(getElementWidth('60px', '12px', 8.5)); //60pxNaN*/

/*function getElementWidth(content, padding, border) {
  console.log(typeof content); //string
  console.log(typeof padding); //string
  console.log(typeof border); //string
  let results = content + (padding * 2 + border * 2);
  console.log(typeof results); //string
  return results;
}
console.log(getElementWidth('60px', '12px', '8.5px')); //60pxNaN*/

/*function getElementWidth(content, padding, border) {
  console.log(typeof content); //string
  console.log(typeof padding); //string
  console.log(typeof border); //string
  let results = content + padding * 2 + border * 2;
  console.log(typeof results); //string
  return results;
}
console.log(getElementWidth('60px', '12px', '8.5px'));*/

/*function getElementWidth(content, padding, border) {
  console.log(typeof content); //string
  console.log(typeof padding); //string
  console.log(typeof border); //string
  border *= 1;
  console.log(typeof border);
  let results = content + padding + border;
  console.log(typeof results); //string
  return results;
}
console.log(getElementWidth('60px', '12px', '8.5px'));*/
