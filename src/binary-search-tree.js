const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (!data) return;
    this.tree = addNode(this.tree, data);

    function addNode(node, value) {
      if (!value) return;
      if (!node) {
        let createdNode = new Node(value);
        return createdNode;
      }
      if (node.data == value) {
        return node;
      }
      if (node.data > value) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    let search = check(this.tree, data);
    function check(node, value) {
      if (!node) return false;

      if (node.data == value) {
        return true;
      }

      if (value < node.data) {
        return check(node.left, value);
      }
      if (value > node.data) {
        return check(node.right, value);
      }
      return false;
    }
    return search;
  }
  print(node, acc) {
    if (node == null) {
      return acc;
    } else {
      if (node.left != null) {
        acc = this.print(node.left, acc);
      }
      acc.push(node.data);
      if (node.right != null) {
        acc = this.print(node.right, acc);
      }
      return acc;
    }
  }
  printInOrder() {
    return this.print(this.tree, []);
  }

  find(data) {
    if (!data) return null;

    let search = findData(this.tree, data);
    function findData(node, value) {
      if (!node) return null;

      if (node.data == value) {
        return node;
      }

      if (node.data < value) {
        return findData(node.right, value);
      }
      if (node.data > value) {
        return findData(node.left, value);
      }
      return null;
    }
    return search;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let minimal = this.tree;
    while(minimal.left){     
      minimal = minimal.left
    }    
    console.log(minimal)
    return minimal?.data || null;
  }

  max() {
   let maximal = this.tree;
   while(maximal.right){
     maximal = maximal.right
   }
   return maximal?.data || null;
  }
}
// let bstq = new BinarySearchTree();
// bstq.add(10);
// bstq.add(7);
// bstq.add(15);
// bstq.add(13);
// bstq.add(18);
// bstq.add(20);
// //bstq.printInOrder();
// console.log(bstq.printInOrder());
// //console.log(bstq.has(20));
// //console.log(bstq.root().data);
// console.log(bstq.min());
// console.log(bstq.max());
// bst.add(10);
//console.log(bstq)
module.exports = {
  BinarySearchTree,
};
