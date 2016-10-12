/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

//var swapPairs = function(head) {
//	var node = new ListNode(0);
//	var curNode = node;
//	var isChangePosition = false;
//	while (head) {
//		if (isChangePosition) {
//			var tmp = new ListNode(head.val);
//			tmp.next = curNode.next;
//			curNode.next = tmp;
//			curNode = curNode.next.next;
//		} else {
//			curNode.next = new ListNode(head.val);
//		}
//		isChangePosition = !isChangePosition;
//		head = head.next;
//	}
//	return node.next;
//};

var swapPairs = function(head) {
	var node = new ListNode(0);
	var curNode = node;
	while (head) {
		if (head.next) {
			curNode.next = new ListNode(head.next.val);
			curNode = curNode.next;
			curNode.next = new ListNode(head.val);
			curNode = curNode.next;
			head = head.next.next;
		} else {
			curNode.next = new ListNode(head.val);
			curNode = curNode.next;
			head = head.next;
		}
	}
	return node.next;
};

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
console.log(swapPairs(l1));