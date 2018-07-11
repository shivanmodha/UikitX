import React, { Component } from "react";
import attributes from "./progress.json";
import ClassName from "./classname.js";
class Progress extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            classname: new ClassName(attributes, this.props)
        });
    }
    componentWillReceiveProps(nextProps) {
        this.state.classname.setObject(nextProps);
        this.setState({
            classname: this.state.classname
        });
    }
    render() {
        let props = {
            className: ((this.state) ? (this.state.classname) : (""))
        }
        return (
            <progress {...props} style={{ color: "red" }} />
        )
    }
}
export default Progress;