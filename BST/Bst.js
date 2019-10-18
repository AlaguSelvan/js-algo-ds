class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  insert(value) {
    let currentNode = this
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value)
          break;
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value)
          break;
        } else {
          currentNode = currentNode.right
        }
      }
    }
    return this
  }
  search(value) {
    let currentNode = this
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return true
      } else if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      }
    }
    return false
  }
  remove(value, parentNode = null) {
    let currentNode = this
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else {
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue()
          currentNode.right.remove(currentNode.value, currentNode)
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value
            currentNode.left = currentNode.left.left
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value
            currentNode.left = currentNode.right.left
            currentNode.right = currentNode.right.right
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right
        }
        break;
      }
    }
    return this
  }
  getMinValue() {
    let currentNode = this
    console.log(currentNode, 'cnr')
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
}

let val = new BST(42)
val.insert(40)
val.insert(49)
val.insert(48)
val.insert(50)
val.insert(36)
val.insert(33)
val.remove(42)
console.log(val.search(33))
console.log(val)




//                               42
//                              /  \
//                             /    \
//                            /      \
//                          40        49
//                          /        /  \
//                        36       48    50
//                       /                 
//                     33                   
//                     