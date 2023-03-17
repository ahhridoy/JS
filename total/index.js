// import {sum} from "./sum.js";

// console.log(sum(2,4));


// for (var i = 0; i < 10; i++) {
//    setTimeout(() => console.log(i), 0);
//  }

const persons = [
   {
       name: "Sumit",
       age: 37,
   },
   {
       name: "Saad",
       age: 23,
   },
   {
       name: "Akash",
       age: 22,
   },
];

console.log(persons.reduce((total,person) => total + person.age, 0));