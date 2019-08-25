class Node {
  constructor(val, tail = null) {
    this.val = val;
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
      return undefined
    }
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.length--
    this.tail.next = null
    return current
  }
  shift() {
    if (!this.head) {
      return undefined
    }
    let temp = this.head
    this.head = this.head.next
    this.length--
    return temp
  }
  unShift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index <= 0 || index >= this.length) {
      return null
    }
    let start = 0
    let current = this.head
    while (start !== index) {
      current = current.next
      start++
    }
    return current
  }
  set(index, val) {
    let foundNode = this.get(index)
    console.log(foundNode)
    if (foundNode) {
      foundNode = new Node(val)
      return true
    }
    return false

  }
  insert(index, val) {
    if (index <= 0 || index >= this.length) return null
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unShift(val)
    let newNode = new Node(val)
    let prev = this.get(index - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
}
let List = new LinkedList()
List.push("hi")
List.push("hello")
List.push("there")
List.push("!")
console.log(List.set(2, "amigo"))
console.log(List.insert(2, "hola"))
