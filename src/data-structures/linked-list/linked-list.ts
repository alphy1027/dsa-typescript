class Node<T> {
  public data: T;
  public next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

function printList<T>(head: Node<T> | null) {
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

function recursiveList<T>(head: Node<T> | null) {
  if (head === null) return;
  console.log(head.data);
  recursiveList(head.next);
}

//recursiveList(a);

function traverseList<T>(head: Node<T> | null) {
  let current = head;
  let values: T[] = [];
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }
  return values;
}

//Recursive traversal
function recursiveTraverseList<T>(head: Node<T>) {
  let values: T[] = [];
  fillValues(head, values);
  return values;
}

function fillValues<T>(head: Node<T> | null, values: T[]) {
  if (head === null) return;
  values.push(head.data);
  fillValues(head.next, values);
}
console.log(recursiveTraverseList(a));
