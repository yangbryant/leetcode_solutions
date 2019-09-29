/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
    this.next = null;
}

// var deleteDuplicates = function(head) {
// 	if (head && head.next) {
// 		if (head.val === head.next.val) {
// 			head.next = head.next.next;
// 			deleteDuplicates(head);
// 		}
// 		else {
// 			deleteDuplicates(head.next);
// 		}
// 	}
// 	return head;
// };

var deleteDuplicates = function(head) {
	var node = head;
	if (node && node.next) {
		if (node.val === node.next.val) {
			node.next = node.next.next;
		}
		else {
			node = node.next;
		}
		deleteDuplicates(node);
	}
	return head;
};

var l1 = new ListNode(2);
l1.next = new ListNode(2);
l1.next.next = new ListNode(2);
l1.next.next.next = new ListNode(3);
console.log(deleteDuplicates(l1));