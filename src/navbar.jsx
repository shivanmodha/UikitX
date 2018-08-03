import React, { Component } from "react";
import attributes from "./navbar.json";
import ClassName from "./classname.js";
class Navbar extends Component {
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
        let navbar = ((this.props && this.props.click) ? ("mode: click; ") : (""));
        navbar += ((this.props && this.props.dropbar) ? ("dropbar: true; ") : (""));
        navbar += ((this.props && this.props.push) ? ("dropbar-mode: push; ") : (""));
        let props = {
            className: ((this.state) ? (this.state.classname) : (null)),
            "uk-navbar": navbar
        };
        if (this.props && this.props.dropbar) {
            return (
                <div>
                    <nav {...props} style={{ ...this.props.style }}>
                        {this.props.children}
                    </nav>
                    <div className="uk-navbar-dropbar"/>
                </div>
            )
        } else {
            return (
                <nav {...props} style={{...this.props.style}}>
                    {this.props.children}
                </nav>
            )
        }
    }
}
export default Navbar