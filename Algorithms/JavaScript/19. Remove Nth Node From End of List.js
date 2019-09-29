/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}

var getListNodeLength = function(head) {
	var length = 0;
	var node = head;
	while (node) {
		node = node.next;
		length++;
	}
	return length;
}

var removeNthFromEnd = function(head, n) {
	var position = getListNodeLength(head) - n;
	if (position === 0) {
		return head.next;
	}
	var node = head;
	var length = 0;
	while (node) {
		if (length === position - 1) {
			node.next = node.next.next;
			break;
		}
		node = node.next;
		length++;
	}
	return head;
};

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(l1, 2));