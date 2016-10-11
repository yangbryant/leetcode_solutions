/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
* 题目的目的是:
* 两个链表合并成一个链表,按照有小到大的顺序排列.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    
    var node = new ListNode(0);
    var tmpNode = node;
    while (l1 !== null || l2 !== null) {
        if (l1 === null) {
            tmpNode.next = new ListNode(l2.val);
            l2 = l2.next;
        } else if (l2 === null) {
            tmpNode.next = new ListNode(l1.val);
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            tmpNode.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            tmpNode.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        tmpNode = tmpNode.next;
    }
    return node.next;
};

var l1 = new ListNode(5);
l1.next = new ListNode(2);
var l2 = new ListNode(3);
l2.next = new ListNode(4);

console.log(mergeTwoLists(l1, l2))