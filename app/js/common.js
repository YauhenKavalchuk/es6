// Promise
// ---------------

// const promise = new Promise((resolve, reject) => {
//   throw new Error('some error...');
//   setTimeout(() => {
//     if(true) {
//       resolve('promise completed!');
//     } else {
//       reject();
//     }
//   }, 1000);
// });
//
//
// promise
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(res => res.json())
  .then(data => data)
  .then(data => console.log('!!!', data))
  //.then(data => render(data))
  .catch(() => console.log('some error...'));
