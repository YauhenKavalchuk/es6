// Generators
// ---------------
/*
function *generate() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (err) {
    console.log('Custom error: ', err);
  }
}
let iterator = generate();
console.log(iterator.next());
console.log(iterator.throw(new Error('some error...')));
console.log(iterator.next());
*/
/*
function *generateRange(start, end) {
  let current = start;
  while(current <= end) {
    yield current++;
  }
}

for (let number of generateRange(1, 10)) {
  console.log(number);
}
*/
let object = {
  *generateRange(start, end) {
    let current = start;
    while(current <= end) {
      yield current++;
    }
  }
}
for (let number of object.generateRange(1, 10)) {
  console.log(number);
}
