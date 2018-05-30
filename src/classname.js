class ClassName {
    constructor() {
        this.list = {};
        this.order = [];
    }
    set(key, item) {
        this.order.push(key);
        this.list[key] = item;
    }
    render() {
        let _return = "";
        for (let i = 0; i < this.order.length; i++) {
            _return += this.list[this.order[i]] + " ";
        }
        return _return.trimRight();
    }
}
export default ClassName;