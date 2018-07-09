// Objects
// ---------------

let name = 'Jack';
let sex = 'male';
let age = 20;

let person = {
  name,
  sex,
  age,
  greet() {
    console.log(`Hello ${this.name}`);
  },
  get:password() {
    return this.name + this.age;
  }
}

person.name;
person['name'];

let firstName = 'name';
person[firstName];

// person = {
//   [firstName]: 'Max'
// }

// Object.defineProperty(person, 'password', {
//   get: function() {
//     return this.name + this.age;
//   }
// })


console.log(person);
