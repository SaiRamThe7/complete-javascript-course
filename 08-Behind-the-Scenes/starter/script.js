'use strict';
const Amitab = {
  firstName: 'Amitab',
  lastName: 'tiwari',
  age: 33,
};

const marriedAmitab = Amitab;

marriedAmitab.lastName = 'bachan';

console.log('Before marriage:', Amitab);
console.log('After marriage:', marriedAmitab);

//shallow clone vs deep clone

//shallow clone

const sairam = {
  firstName: 'sairam',
  lastName: 'kaligiri',
  age: 26,
  family: ['shanmugam', 'shalini'],
};

const marriedsairam = { ...sairam };

marriedsairam.lastName = 'kumar';

console.log('Before marriage:', sairam);
console.log('After marriage:', marriedsairam);

const sairamoriginal = {
  firstName: 'sairam',
  lastName: 'kaligiri',
  age: 26,
  family: ['shanmugam', 'shalini'],
};

const sairamcopy = structuredClone(sairamoriginal);

sairamcopy.family.push('lakshmi');
sairamcopy.family.push('vishnu');

console.log('original :', sairamoriginal);
console.log('copy :', sairamcopy);

console.log(sairamoriginal === sairamcopy); //false
console.log(sairamoriginal.family === sairamcopy.family); //false
