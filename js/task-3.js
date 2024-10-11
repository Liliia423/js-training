'use strict';

function getElementWidth(content, padding, border) {
  const totalWidth = content + (padding + border) * 2;
  console.log(`${totalWidth}`);
}
console.log(getElementWidth(50, 8, 4));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
