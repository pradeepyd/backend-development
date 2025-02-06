// let n = 5;
// for(let i=0;i<n;i++){
//     console.log("hello",i);
// }

// let args = process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("hello to",args[i]);
// }

// const math = require("./math");

// console.log(math);
// console.log(math.sum(2,5));

// const fruits = require("./fruits");
// console.log(fruits);
// console.log(fruits[0].name);




// import
import {sum,PI} from "./math.js";
console.log(sum(1,2));

import{ generate } from "random-words";
console.log(generate());