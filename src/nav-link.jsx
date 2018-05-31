import React, { Component } from "react";
class NavLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a {...this.props}>{this.props.children}</a>
        )
    }
}
export default NavLink;