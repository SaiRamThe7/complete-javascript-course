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

//spread operator to create shallow clone
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

//structured clone for deep clone --it will clone even nested objects and arrays
const sairamcopy = structuredClone(sairamoriginal);

sairamcopy.family.push('lakshmi');
sairamcopy.family.push('vishnu');

console.log('original :', sairamoriginal);
console.log('copy :', sairamcopy);

//---Notes Regarding Shallow Clone vs Deep Clone---

// Cloning is the process of creating a duplicate of an existing object or data structure. The primary difference between shallow and deep cloning lies in how they handle nested objects or internal references.

// Quick Comparison

// Feature 	Shallow Clone	                                                  Deep Clone
// Depth	Copies only the top-level structure.	                              Recursively copies all levels.
// References	Shares references to nested objects.	                        Creates new instances for all nested objects.
// Independence	Not fully independent; changes to nested data affect both.	Entirely independent; changes in one do not affect the other.
// Performance	Faster and uses less memory.	                                Slower and memory-intensive for large data.
