// Arrow functions
// ---------------

// Example 1 - default arguments
/*
function greet(name = 'Jack', age = 20) {
  return `Hello ${name}, your age is ${age}!`;
};
console.log(greet());
*/
// Example 2 - arrow functions syntax
/*
// () => {}
const greet = (name, age) => `Hello ${name}, your age is ${age}!`
*/
// Example 3 - cases of syntax
/*
// 1) Using name:
   const FUNC = () => {};

// 2) Default syntax:
   (a,b) => {
    let sum = a + b;
    return sum;
   };

// 3) One argument:
   a => {
    let sum = a + 1;
    return sum;
   };

// 4) No arguments:
   () => {
    let sum = a + b;
    return sum;
   };

// 5) If one line, don't need `return`:
   a => a * 2;
   (a,b) => a*b;

// 6) Object literal:
   () => ({ a:2 });

// 7) IIFE:
   (() => {null})();
*/
// Example 3 - context

let person = {
  userName: 'Jack',
  greet: function() {
    window.setTimeout(() => {
      console.log(this.userName, this);
    }, 1000);
  }
};
person.greet();




 //dsvdsv

 //sdvdsvds
