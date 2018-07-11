// Symbols
// ---------------

// let symbol = Symbol.for('mySymbol');
// let symbolName = Symbol.keyFor(symbol)
// console.log(symbolName);


let person = {
  name: 'Jack',
  age: 20,
  [Symbol.for('password')]: 'Jack20',
  [Symbol.for('nickname')]: 'Freeman'
}

// console.log(person[Symbol.for('password')]);
console.log(Object.getOwnPropertySymbols(person));
