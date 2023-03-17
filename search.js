var locations = [
  "rajshahi",
  "dhaka",
  "sylhet",
  "chittagong",
  "barisal",
  "mymonsingh",
  "khulna",
  "rangpur",
];

for (var i = 0; i < locations.length; i++) {
  var friendsHouse = locations[i];
  if (friendsHouse == 'barisal') {
    console.log(i);
    break;
  }
}

for (var i = 0; i < locations.length; i++) {
  var friendsHouse = locations.indexOf('barisal');
  console.log(friendsHouse);
  break
}
