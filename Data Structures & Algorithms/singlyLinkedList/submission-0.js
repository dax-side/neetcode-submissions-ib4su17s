class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(i) {
        if (i < 0 || i >= this.size){
            return -1;
        }
        let current = this.head;
        for(let j = 0; j< i; j++){
            current = current.next;
        }
        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        if(this.tail === null){
            this.tail = newNode;
        }
        this.size++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        if(this.head === null){
            this.insertHead(val);
            return;
        }
        let newNode = new ListNode(val);
        this.tail.next = newNode
        this.tail = newNode;
        this.size++
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(i) {
        if(i < 0 || i >= this.size){
            return false;
        }
        
        
        if (i === 0){
            this.head = this.head.next;
            if(this.size === 1){
                this.tail = null;
            }
            this.size--;
            return true;
        }

        let current = this.head;
        
        for (let j = 0; j < i - 1; j++) {
       current = current.next;
    }
    current.next = current.next.next;
   
   if (i === this.size - 1) {
        this.tail = current;
    }
    
    this.size--;
    return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [];
        let current = this.head;

        while(current !== null){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}
