import React, { Component } from "react";
import attributes from "./navbar.json";
import ClassName from "./classname.js";
class Navbar extends Component {
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
            className: ((this.state) ? (this.state.classname) : (null)),
            "uk-navbar": ((this.props && this.props.click) ? ("mode: click") : (""))
        };
        return (
            <nav {...props}>
                {this.props.children}
            </nav>
        )
    }
}
export default Navbar