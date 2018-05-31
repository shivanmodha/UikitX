import React, { Component } from "react";
import attributes from "./button.json";
import ClassName from "./classname.js";

class Button extends Component {
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
            disabled: this.props.disabled,
            className: ((this.state) ? (this.state.classname) : ("")),
            onClick: (this.props.onClick) ? (this.props.onClick) : (null),
        };
        if (this.props.href) {
            return (
                <a href={this.props.href} {...props} style={{ ...this.props.style }}>
                    {this.props.children}    
                </a>    
            )
        } else {
            return (
                <button {...props} style={{ ...this.props.style }}>
                    {this.props.children}    
                </button>    
            )
        }
    }
}

export default Button;