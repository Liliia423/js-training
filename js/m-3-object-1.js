/*const nameL = {
  firstName: 'Lila',
  secondName: 'Pav',
};
console.log(nameL.firstName); //Lila
console.log(nameL['secondName']); //Pav*/

/*const nameL = {
  firstName: 'Lila',
  secondName: ['Pav1', 'Pav2', 'Pav3'],
};
console.log(nameL.firstName.length); //4
console.log(nameL.secondName.length); //3
console.log(nameL.secondName[nameL.secondName.length - 1]); //3
console.log(nameL.secondName[0]); //Pav1*/

//this

/*const nameL = {
  firstName: 'Lila',
  secondName: ['Pav1', 'Pav2', 'Pav3'],
};
const aySecondName = nameL.secondName;
console.log(aySecondName.length); //4
console.log(aySecondName.length); //3
console.log(aySecondName[aySecondName.length - 1]); //3
console.log(aySecondName[0]); //Pav1*/

/*const nameL = {
  firstName: 'Lila',
  secondName: ['Pav1', 'Pav2', 'Pav3'],
};
//let propKey = 'firstName';
//console.log(nameL[propKey]);//Lila
nameL.secondName.push('Pav4');
delete nameL.secondName[1];
let propKey = 'secondName';
console.log(nameL[propKey]); //['Pav1', empty, 'Pav3', 'Pav4']*/

/*const nameL = {
  firstName: 'Lila',
  secondName: ['Pav1', 'Pav2', 'Pav3'],
};

nameL.secondName.push('Pav4');
delete nameL.secondName[1];
nameL.secondName.splice(2, 1); //видаляє 1 елемент починаючи з 2 індекса
let propKey = 'secondName';
console.log(nameL[propKey]); //['Pav1', empty, 'Pav4']*/
