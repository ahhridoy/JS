// Higher order function

function higher(fun) {
  fun();
}

higher(function fun() {
  console.log("Mim");
});
