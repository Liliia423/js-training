'use strict';
function getElementWidth(content, padding, border) {
  // Перетворюємо рядки на числа, parseFloat() ігнорує "px"
  let newContent = parseFloat(content);
  let newPadding = parseFloat(padding);
  let newBorder = parseFloat(border);

  return newContent + newPadding * 2 + newBorder * 2;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));

//======================================================
/*function getElementWidth(content, padding, border) {
  let newContent = content.slice(0, -2);
  let newPadding = padding.slice(0, -2);
  let newBorder = border.slice(0, -2);

  newContent = Number(newContent);
  //console.log(typeof newContent);

  newPadding = Number(newPadding);
  //console.log(typeof newPadding);

  newBorder = Number(newBorder);
  //console.log(typeof newBorder);

  return newContent + newPadding * 2 + newBorder * 2;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));*/
//======================================================
//console.log(newContent.length); // undefined - розібратись чому?
//======================================================

//isNaN(getElementWidth);
//console.log(typeof content);

//console.log(content.length);
//console.log(content.indexOf('p'));
//console.log(content.indexOf('x'));

//console.log(content.endsWith('px'));

//let lastLastSymbolContent = content[content.length - 2];
//console.log(lastLastSymbolContent);
//let lastSymbolContent = content[content.length - 1];

//console.log(lastSymbolContent);
//let resultContent = content * 2;
