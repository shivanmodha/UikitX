import React, { Component } from "react";
import UIkit from "uikit";
import icons from "uikit/dist/js/uikit-icons.js";
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
    render() {
        let props = {
            className: ((this.props.button) ? (attributes["_default"]["button"]) : ("")),
            "uk-icon": ((this.state) ? (this.state.ukName) : (""))
        }
        return (
            <span {...props}></span>
        )
    }
}

export default Icon;