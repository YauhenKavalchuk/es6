// let, const, var
// ---------------

// Define
// let - var
// const - constant
// var - deprecated

// Scope
/*
if(true) {
  const a = 'ES5';
}
console.log(a);
*/

// Hoisting
/*
var b = undefind;
console.log(b);
b = 5;
*/
// Example
/*
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function(x) {
    return function() {
      console.log(x);
    };
  }(i);
};
*/
/*
var buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function() {
    console.log(i);
  };
};
*/
// const
const ARR = [1,2,3,4,5];
ARR.push(6);
console.log(ARR);

const OBJ = {
  es: 'ES6'
};
OBJ.es = 'ES7)))';
OBJ = 'str';
console.log(OBJ);
