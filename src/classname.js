class ClassName {
    constructor(attributes, object) {
        this.convert = {};
        this.order = [];
        this.list = {};
        if (attributes) {
            Object.keys(attributes).forEach((key) => {
                if (key !== "_order" && key !== "_default") {
                    this.convert[key] = (parameter) => {
                        let _return = attributes[key][parameter];
                        if (!_return && attributes["_error"] && attributes["_error"][key]) {
                            _return = attributes["_error"][key]
                        }
                        if (_return === "$default" || !_return) {
                            _return = attributes["_default"][key];
                        }
                        if (_return === "$value") {
                            _return = parameter;
                        }
                        return _return;
                    };
                }
            });
            this.order = attributes["_order"];
            for (let i = 0; i < this.order.length; i++) {
                this.list[this.order[i]] = attributes["_default"][this.order[i]];
            }
        }
        if (object) {
            this.setObject(object);
        }
    }
    set(key, item) {
        if (this.convert[key] && item) {
            this.list[key] = this.convert[key](("" + item).toLowerCase());
        }
    }
    setObject(props) {
        Object.keys(props).forEach((key) => {
            this.set(key, props[key]);
        });
    }
    toString() {
        let _return = "";
        for (let i = 0; i < this.order.length; i++) {
            _return += this.list[this.order[i]] + " ";
        }
        return _return.trimRight();
    }
}
export default ClassName;