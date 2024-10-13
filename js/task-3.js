'use strict';
/*function getElementWidth(content, padding, border) {
  //let num = new Number(content, padding, border);

  console.log(typeof content);
  console.log(typeof padding);
  console.log(typeof border);
  return content - 0 + padding * 2 + border * 2;
}

console.log(getElementWidth('50px', '8px', '4px'));
isNaN(getElementWidth);
//console.log(getElementWidth('50px', '8px', '4px'));
//console.log(getElementWidth('60px', '12px', '8.5px'));
//console.log(getElementWidth('200px', '0px', '0px'));
//console.log(getElementWidth(50, 8, 4));*/

function getElementWidth(content, padding, border) {
  console.log(content.length);

  console.log(content.indexOf('p')); // position in string = 2
  console.log(content.indexOf('x'));

  console.log(content.endsWith('px'));
  let lastLastSymbolContent = content[content.length - 2];
  console.log(lastLastSymbolContent);
  let lastSymbolContent = content[content.length - 1];

  console.log(lastSymbolContent);

  return content + padding + padding + border + border;
}

console.log(getElementWidth('200px', '0px', '0px'));
console.log(getElementWidth('50px', '8px', '4px'));

//console.log(getElementWidth('60px', '12px', '8.5px'));
//

//isNaN(getElementWidth);
//console.log(typeof content);

//
