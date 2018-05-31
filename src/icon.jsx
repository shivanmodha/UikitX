import React, { Component } from "react";
import UIkit from "uikit";
import icons from "uikit/dist/js/uikit-icons.min.js";
import attributes from "./icon.json";
import ClassName from "./classname.js";
class Icon extends Component {
    constructor(props) {
        super(props);
        if (!window.UIkit) {
            window.UIkit = UIkit;
            UIkit.use(icons);
        }   
    }
    componentWillMount() {
        this.setState({
            ukName: new ClassName(attributes, this.props)
        });
    }
    componentWillReceiveProps(nextProps) {
        this.state.uk.setObject(nextProps);
        this.setState({
            classname: this.state.classname
        });
    }
    render() {
        let props = {
            className: ((this.props.button) ? (attributes["_default"]["button"]) : ("")),
            "uk-icon": ((this.state) ? (this.state.ukName) : (""))
        }
        return (
            <span style={{ ...this.props.style }} {...props}></span>
        )
    }
}

export default Icon;