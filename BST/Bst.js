class Bst {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new Bst(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new Bst(value)
      }
    }
    return this
  }
}

let BstVal = new Bst(10)
