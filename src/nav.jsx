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
        let innerNav = (
            <ul {...props}>
                {this.props.children}    
            </ul>
        );
        let navTypes = {
            "left": "uk-navbar-left",
            "center": "uk-navbar-center",
            "right": "uk-navbar-right"
        };
        if (this.props && this.props.navbar && navTypes[this.props.navbar]) {
            return (
                <div className={navTypes[this.props.navbar]}>{innerNav}</div>
            );
        } else if (this.props && this.props.navbar && this.props.dropdown) {
            props.className = props.className.toString().replace("uk-nav-dropdown", "uk-navbar-dropdown-nav").replace("uk-navbar-nav", "").trim();
            return (
                <div className="uk-navbar-dropdown"><ul {...props}>{this.props.children}</ul></div>
            );
        } else {
            return innerNav;
        }
    }
}
export default Nav;