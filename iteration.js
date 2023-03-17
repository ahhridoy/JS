let obj = {
   name: "mim",
   age: 29,
   address: "atrai"
}


// Object.keys(obj);

// console.log(Object.keys(obj));
// for (let el of Object.keys(obj)) {
   // console.log(obj[el]);
// }


// Object.values(obj);
// console.log(Object.values(obj));
// for (let el of Object.values(obj)) {
//    console.log(el);
// }


// console.log(Object.entries(obj));


for (let el in obj) {
   console.log(obj[el]);
}

