import React, { Component } from "react";
import attributes from "./nav.json";
import ClassName from "./classname.js";
class Nav extends Component {
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
        };
        if (this.props.accordion) {
            props["uk-nav"] = "true";
            if (this.props.multiple) {
                props["uk-nav"] = "multiple: true";
            }
        }
        return (
            <ul {...props}>
                {this.props.children}    
            </ul>
        )
    }
}
export default Nav;