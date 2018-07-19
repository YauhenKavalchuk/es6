// Set & Map
// ---------------

// Map
/*
let map = new Map();

map
  .set('str', 'string')
  .set(1, 'number')
  .set(true, 'boolean');

console.log(map.get(1));
console.log(map.get(true));
console.log(map.size);
*/

// let map = new Map([
//   ['str', 'string'],
//   [1, 'number'],
//   [true, 'boolean']
// ])

// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.size);
// console.log(map.has(1));
// console.log(map.delete(1));
// console.log(map.size);
// console.log(map.clear());
// console.log(map.size);
// Iteration
// keys(), values(), entries()


// Set
let jack = {name: 'Jack'};
let max = {name: 'Max'};
let leo = {name: 'Leo'};

let users = new Set();

users
  .add(jack)
  .add(max)
  .add(leo)
  .add(jack)
  .add(max)
console.log(users.size);
users.forEach(user =>console.log(user));
//Methods
//add()
//delete(item)
//has(item)
//clear()

// WeackMap & WeackSet
