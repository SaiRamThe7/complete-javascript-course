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
