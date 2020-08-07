class MinStack {
    // 数据栈
    private dataStack: number[] = [];
    // 最小值栈
    private minStack: number[] = [];
    // 比较获取较小值
    private min (x: number, y: number): number {
        return x <= y ? x : y;
    }
    // 判断数据栈是否为空
    private empty(): boolean {
        return this.dataStack.length === 0;
    }

    constructor() {}

    push(x: number): void {
        // 获取上次最小值
        const prevMin = this.minStack[this.minStack.length - 1];
        // 和当前值比较后入最小值栈
        if (this.empty()) {
            // 当前数据栈为空，即最小值栈为空，直接入栈
            this.minStack.push(x);
        } else {
            // 比较最小值栈顶元素获取本次入栈最小值
            const prevMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(this.min(x, prevMin));
        }
        // 入数据栈
        this.dataStack.push(x);
        console.log(this.dataStack, this.minStack);
    }

    pop(): void {
        // 数据栈出栈
        this.dataStack.pop();
        // 最小值栈出栈
        this.minStack.pop();
    }

    top(): number {
        // PS. 若当前数据栈为空，返回的是undefined
        return this.dataStack[this.dataStack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
