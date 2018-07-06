// spread, REST
// ---------------

// Example 1 - array
/*
const num1 = [1,2,3,4];
const num2 = [5,6,7,8];
//Array.prototype.push.apply(num1, num2);
console.log([...num1, num2]);
*/
// Example 2 - object
/*
const A = {
  a: 'default',
  b: 'just_test'
};
const B = {
  a: 'value_from_b'
}
//var c = Object.assign(B, A);
let c = {
  ...A,
  ...B
}
console.log(c);
*/
// Example 3 - function
/*
const arr = [1,2,3];
function sum(a,b,c) {
  return a+b+c;
}
// sum(arr[0], arr[1], arr[2]);
// sum.apply(null, arr);
console.log(sum(...arr));
*/
// Example 1 - REST

function res(arg, arg2, ...REST) {
  console.log(arg, arg2, REST);
}
res(1,2,3,4,5,6,7);
