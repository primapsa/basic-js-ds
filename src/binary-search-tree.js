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

  remove(data) {
    if (!data) return;

    this.tree = deleteNode(this.tree, data);

    function deleteNode(node, value) {
      if (!node) return null;

      if (!node.left && !node.right && node.data == value) {
        return null;
      }
      if (node.data < value) {
        node.right = deleteNode(node.right, value);
        return node;
      }
      if (node.data > value) {
        node.left = deleteNode(node.left, value);
        return node;
      }
      if (node.left && !node.right && node.data == value) {
        node = node.left;
        return node;
      }
      if (!node.left && node.right && node.data == value) {
        node = node.right;
        return node;
      }

      let bothChilds = node.right;
      while (bothChilds.left) {
        bothChilds = bothChilds.left;
      }
      node.data = bothChilds.data;
      node.right = deleteNode(node.right, bothChilds.data);

      return node;
    }
  }

  min() {
    let minimal = this.tree;
    while (minimal.left) {
      minimal = minimal.left;
    }
    console.log(minimal);
    return minimal?.data || null;
  }

  max() {
    let maximal = this.tree;
    while (maximal.right) {
      maximal = maximal.right;
    }
    return maximal?.data || null;
  }
}
module.exports = {
  BinarySearchTree,
};
