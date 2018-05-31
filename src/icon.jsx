import React, { Component } from "react";
import attributes from "./icon.json";
import ClassName from "./classname.js";

class Icon extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            classname: new ClassName(attributes, this.props)
        });
    }
    render() {
        return (
            <span uk-icon="icon: check; ratio: 2"></span>
        )
    }
}

export default Icon;