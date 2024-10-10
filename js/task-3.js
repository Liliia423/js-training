function getElementWidth(content, padding, border) {
  console.log(Number.parseFloat('50px'));
  console.log(Number.parseFloat('8px'));
  console.log(Number.parseFloat('4px'));
  console.log(Number.parseFloat('60px'));
  console.log(Number.parseFloat('12px'));
  console.log(Number.parseFloat('8.5px'));
  console.log(Number.parseFloat('200px'));
  console.log(Number.parseFloat('0px'));
  console.log(Number.parseFloat('0px'));
  console.log(`${(padding + border) * 2}) + ${content}`);
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
