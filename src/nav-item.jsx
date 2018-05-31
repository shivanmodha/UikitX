import React, { Component } from "react";
import attributes from "./nav-item.json";
import ClassName from "./classname.js";
class NavItem extends Component {
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
            className: ((this.state) ? (this.state.classname) : (null))
        }
        return (
            <li {...props}>{this.props.children}</li>
        )
    }
}
export default NavItem;