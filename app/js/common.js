// Modules
// ---------------
// Variables
export let one = 1;

let two = 2;
let three = 3;
export { two, three };

// Class
class Person {
  constructor(name) {
    this.name = name
  }
}

// Function
function sayHello() {
  console.log('hello!')
}

export { Person, sayHello }

// Rename
export { one as once, two as twice };

//Import
import { one, two } from './file.js';

// Rename Import
import { one as num1, two as num2 } from './file.js';

// One Import
import * as numbers from './file.js';

// default export
export default class Person {
  constructor(name) {
    this.name = name
  }
}

import Person from './file.js';
