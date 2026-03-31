class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = nums.sort((a, b) => a - b);  
        
        while (this.heap.length > k) {
            this.heap.shift();
        }
    }

    add(val) {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b);
        
        if (this.heap.length > this.k) {
            this.heap.shift();
        }
        
        return this.heap[0];
    }
}