//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(value) {
    const newNode = new Node(value);
    if(this.tail) {
      newNode.pre = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }else
      this.head = this.tail = newNode;
    this.length++;
  }

  pop() {
    if(this.tail) {
      const popedNode = this.tail;
      this.tail = popedNode.pre;
      if(this.length === 1)
        this.head = null;
      this.length--;
      return popedNode.value;
    }
    return null;
  }

  shift() {
    if(this.head) {
      const shiftedNode = this.head;
      this.head = shiftedNode.next;
      if(this.length === 1)
        this.tail = null;
      this.length--;
      return shiftedNode.value;
    }
    return null;
  }

  unshift(value) {
    const newNode = new Node(value);
    if(this.head) {
      newNode.next = this.head;
      this.head.pre = newNode;
      this.head = newNode;
    }else
      this.head = this.tail = newNode;
    this.length++;
  }

  delete(value) {
    let currentNode = this.head;
    while(currentNode != null) {
      if(currentNode.value === value){
        if(currentNode === this.head) 
          this.head = currentNode.next;
        if(currentNode === this.tail) 
          this.tail = currentNode.pre;
        if(currentNode.next)
          currentNode.next.pre = currentNode.pre;
        if(currentNode.pre)
          currentNode.pre.next = currentNode.next
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  count() {
    return this.length;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.pre = null;
  }
}
