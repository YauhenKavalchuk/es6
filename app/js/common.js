// Object destructuring
// ---------------

let person = {
  name: 'Jack',
  age: 20,
  address: {
    city: 'Minsk'
  }
}

//let {name = 'Max',age = 20} = {};
//let { name: personName, age: personAge } = person;
//let { address: { city = 'Brest' } } = person;
//console.log(city);

function getData({ name, age }) {
  //console.log(name, age);
  return { name, age }
}

let {name, age} = getData(person);
console.log(name, age);
