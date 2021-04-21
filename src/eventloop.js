const fs = require('fs');

console.log('Start');

setTimeout(() => {
  console.log('SetTimeout heppened');
}, 0);

setImmediate(() => {
  console.log('setImmediate heppened');
});

Promise.resolve().then(() => console.log('Promise 1 neppened'));
Promise.resolve().then(() => console.log('Promise 2 neppened'));
Promise.resolve().then(() => console.log('Promise 3 neppened'));

process.nextTick(() => console.log('nexTick 1'));
process.nextTick(() => console.log('nexTick 2'));
process.nextTick(() => console.log('nexTick 3'));

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('SetTimeout callback heppened');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate callback heppened');
  });

  console.log('File read');
});

console.log('End');
