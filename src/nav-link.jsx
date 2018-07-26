import React, { Component } from "react";
import attributes from "./nav-link.json";
import ClassName from "./classname.js";
class NavLink extends Component {
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
        let child = this.props.children;
        if (this.props && this.props.subtitle) {
            child = (
                <div>
                    {this.props.children}
                    <div className="uk-navbar-subtitle">{this.props.subtitle}</div>
                </div>
            )
        }
        return (
            <a {...props} {...this.props}>{child}</a>
        )
    }
}
export default NavLink;