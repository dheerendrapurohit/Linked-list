class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.headNode = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.headNode) {
        this.headNode = newNode;
      } else {
        let current = this.headNode;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    prepend(value) {
      const newNode = new Node(value, this.headNode);
      this.headNode = newNode;
    }
  
    size() {
      let count = 0;
      let current = this.headNode;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    
    head() {
      return this.headNode;
    }
  
   
    tail() {
      let current = this.headNode;
      if (!current) return null;
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  
    
    at(index) {
      let current = this.headNode;
      let count = 0;
      while (current) {
        if (count === index) return current;
        count++;
        current = current.next;
      }
      return null;
    }
  
    
    pop() {
      if (!this.headNode) return;
      if (!this.headNode.next) {
        this.headNode = null;
        return;
      }
  
      let current = this.headNode;
      while (current.next && current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
 
    contains(value) {
      let current = this.headNode;
      while (current) {
        if (current.value === value) return true;
        current = current.next;
      }
      return false;
    }
  
    find(value) {
      let current = this.headNode;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.next;
        index++;
      }
      return null;
    }
  
    
    toString() {
      let str = '';
      let current = this.headNode;
      while (current) {
        str += `( ${current.value} ) -> `;
        current = current.next;
      }
      return str + 'null';
    }
  
   
    insertAt(value, index) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
  
      const prevNode = this.at(index - 1);
      if (!prevNode) return;
  
      const newNode = new Node(value, prevNode.next);
      prevNode.next = newNode;
    }
  
  
    removeAt(index) {
      if (index === 0 && this.headNode) {
        this.headNode = this.headNode.next;
        return;
      }
  
      const prevNode = this.at(index - 1);
      if (!prevNode || !prevNode.next) return;
  
      prevNode.next = prevNode.next.next;
    }
  }
  
 
  const list = new LinkedList();
  
  list.append('dog');
  list.append('cat');
  list.append('parrot');
  list.append('hamster');
  list.append('snake');
  list.append('turtle');
  
  console.log(list.toString()); 
  