// Iterators
// ---------------
/*
let names = ['jack', 'max', 'leo'];

for (let name of names) {
  console.log(name);
}
*/

let generateNumbers = {
  start: 1,
  end: 10
}

generateNumbers[Symbol.iterator] = function() {
  let current = this.start;
  let last = this.end;

  return {
    next() {
      if(current <= last) {
        return {
          done: false,
          value: current++
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

for (let number of generateNumbers) {
  console.log(number);
}
