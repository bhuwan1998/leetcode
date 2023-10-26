var MinStack = function() {
    this.minstack = [];
    this.stack = [] ;
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.minstack.length === 0 || val <= this.minstack[this.minstack.length - 1]) {
        this.minstack.push(val); 
    }
    this.stack.push(val);
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length === 0) return; 
    if(this.stack[this.stack.length - 1] === this.minstack[this.minstack.length - 1]){
        this.minstack.pop();
    }
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length - 1];

    
};

/** 
//  * Your MinStack object will be instantiated and called as such: */
// var obj = new MinStack()
// obj.push(val)
// obj.pop()
// var param_3 = obj.top()
// var param_4 = obj.getMin()
