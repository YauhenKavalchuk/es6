// for...of
// ---------------

const names = ['Jack', 'Max', 'Leo'];

for(let name in names) {
  //console.log(name);
}


for(let index in names) {
  //console.log(names[index]);
}


for(let name of names) {
  console.log(name);
}
