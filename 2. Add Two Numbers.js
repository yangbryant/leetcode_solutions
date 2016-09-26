/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var addTwoNumbers = function(l1, l2) {
	var l3 = new ListNode();
	node = l3;
	var highBit = 0;
		
	while (l1 || l2 || highBit != 0) {
		let tmp = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + highBit;
		node.val = tmp % 10;
		highBit = (tmp - node.val) / 10;
		console.log(node.val + "~" + highBit);
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
		if (l1 || l2 || highBit != 0) {
			node.next = new ListNode();
			node = node.next;
		}
	}
	return l3;
};

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
var sum = addTwoNumbers(l1, l2);
var ll1 = new ListNode(5);
var ll2 = new ListNode(5);
var sun = addTwoNumbers(ll1, ll2);
console.log(sun);
