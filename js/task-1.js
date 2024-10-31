function slugify(title) {
  //перетворити рядок на масив, а потім працювати з елементами масиву
  let lowerTitle = title.toLowerCase();
  const newTitle = lowerTitle.split('');
  return newTitle.join('-');
}
console.log(slugify('Arrays for beginners'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
