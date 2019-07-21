class Node {
  constructor(head, tail = null) {
    this.head = head;
    this.tail = tail;
  }
}

class LinkedList {
  constructor(head, tail) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return null
    }
    let current = this.head
    let temp = this.head.next
    while(current){
      console.log(current.val)
      current = current.next
    }
    // if(temp) {
    //   console.log(this.head.next)
    // }
    // pre.next = null
    // delete temp
    // this.tail = pre
  }
}
let List = new LinkedList()
List.push("hi")
List.push("there")
List.push("are")
console.log(List.pop())
