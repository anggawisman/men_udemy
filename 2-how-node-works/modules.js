// console.log(arguments) //arguments is an array in js

// console.log(require('module').wrapper) //to see the node internally used template


// modules.exports
const AnythingWW = require('./test-module-1') // for Class usually use uppercase names
const  calc1 = new AnythingWW(); //But new Function allows to turn any string into a function
console.log(calc1.add(3,4));


// exports
// const calc2 = require('./test-module-2')
const {add, multiply, divide} = require('./test-module-2'); // we can use this to not define all function instead of importing everything from the module.
console.log(multiply(2,5));


// caching
require('./test-module-3')();  // so actually the test module 3 is executed once and the rest of require below will show the data from cache
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();