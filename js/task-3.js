'use strict';
function getElementWidth(content, padding, border) {
  console.log((content += padding * 2));

  content = '50px';

  padding = '8px';

  border = '4px';

  console.log(content + padding * 2 + border * 2);

  //зробити розрахунок і повернути значення у пікселях
}
console.log(getElementWidth('50px', '8px', '4px'));
