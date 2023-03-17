let obj = new Object;

obj['name'] = "Mim";
obj["age"] = 17;
obj["work"] = "Student";

console.log(obj);


let personDetail = {
   name: "Hridoy",
   age: 20,
   birthYear: function birthYear () {
      return 2022 - 20;
   }
}

// console.log(personDetail.birthYear());

let info = {
   name: 'srk',
   age: 57,
   detail: function () {
      return this;
   }
}

// console.log(info);