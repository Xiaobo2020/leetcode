/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.dataQueue = [];
    this.tempQueue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const dataLen = this.dataQueue.length;
    for (let i = 0; i < dataLen; i++) {
        this.tempQueue.unshift(this.dataQueue.pop());
    }
    this.dataQueue.unshift(x);
    const tempLen = this.tempQueue.length;
    for (let i = 0; i < tempLen; i++) {
        this.dataQueue.unshift(this.tempQueue.pop());
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.dataQueue.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.dataQueue[this.dataQueue.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.dataQueue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */