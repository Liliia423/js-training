function slugify(title) {
  let lowerTitle = title.toLowerCase();
  let massive = lowerTitle.split(' ');
  let newMassive = massive.join('-');
  return newMassive;
}
console.log(slugify('Arrays for beginners'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

/*оптимізовано ChatGPT 4o with canvas
function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
*/
