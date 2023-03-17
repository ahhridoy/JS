class Node {
  constructor(value) {
    this.value = value;
    this.next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
}

var head = new Node("dhila");
var manobbandhan = new LinkedList(head);

console.log(manobbandhan);
