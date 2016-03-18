// Question 2.2 (5th Edition)
// Question 2.2 (6th Edition)
// Implement an algorithm to find the kth to last element of a singly linked
// list.

// Clarification: return the pointer to the (kth to last) element - so if k = 2,
// it should return a pointer to the 2nd to last element, i.e. a head that
// points to the linked list with only the last 2 elements

// =====================================================
// Method #1
function kToEnd(head, k) {
  var curr = head;
  var length = 1;

  while (curr.next) {
    curr = curr.next;
    length++;
  }

  var pointer = length - k;
  var count = 0;

  curr = head;
  while (count !== pointer) {
    curr = curr.next;
    count++;
  }

  return curr;
}


var m1 = { value: '1', next: null };
var m2 = { value: '2', next: null };
var m3 = { value: '3', next: null };
var m4 = { value: '4', next: null };

m1.next = m2;
m2.next = m3;
m3.next = m4;

console.log(kToEnd(m1, 2)); // 3 -> 4

// =====================================================
// Method #2
function kToEnd2(head, k) {
  var end = head;
  var start = head;

  for (var i = 0; i < k; i++) {
    if (end == null) return null;
    end = end.next;
  }

  while (end != null) {
    end = end.next;
    start = start.next;
  }
  return start;
}


var m1 = { value: '1', next: null };
var m2 = { value: '2', next: null };
var m3 = { value: '3', next: null };
var m4 = { value: '4', next: null };

m1.next = m2;
m2.next = m3;
m3.next = m4;

console.log(kToEnd2(m1, 2)); // 3 -> 4
