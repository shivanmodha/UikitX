import React, { Component } from "react";
import ClassName from "./classname.js";

const defaultCN =  {
    color: "uk-button-default",
    size: ""
};

class Button extends Component {
    constructor(props) {
        super(props);
        this._validateColor = this._validateColor.bind(this);
        this._validateSize = this._validateSize.bind(this);
    }
    _validateColor(key) {
        let _return = {
            "": defaultCN.color,
            "default": defaultCN.color,
            "primary": "uk-button-primary",
            "secondary": "uk-button-secondary",
            "danger": "uk-button-danger",
            "text": "uk-button-text",
            "link": "uk-button-link"
        }[key.toLowerCase()];
        if (_return) {
            return _return;
        } else {
            console.error("Invalid color style '" + key + "'. Using default");
            return defaultCN.color;
        }
    }
    _validateSize(key) {
        let _return = {
            "": defaultCN.size,
            "medium": defaultCN.size,
            "normal": defaultCN.size,
            "m": defaultCN.size,
            "small": "uk-button-small",
            "s": "uk-button-small",
            "sm": "uk-button-small",
            "large": "uk-button-large",
            "l": "uk-button-large",
            "lg": "uk-button-large"
        }[key.toLowerCase()];
        if (_return) {
            return _return;
        } else {
            console.error("Invalid size style '" + key + "'. Using default");
            return defaultCN.size;
        }
    }
    componentWillMount() {
        let cn = new ClassName();
        cn.set("base", "uk-button");
        cn.set("color", ((this.props.color) ? (this._validateColor(this.props.color)) : (defaultCN.color)));
        cn.set("size", ((this.props.size) ? (this._validateSize(this.props.size)) : (defaultCN.size)));
        this.setState({ cn });
    }
    render() {
        let props = {
            disabled: this.props.disabled,
            className: (this.state) ? (this.state.cn.render()) : ("")
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