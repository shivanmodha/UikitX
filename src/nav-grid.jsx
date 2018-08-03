import React, { Component } from "react";
import attributes from "./nav-grid.json";
import ClassName from "./classname.js";
class NavGrid extends Component {
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
        let className = ((this.state) ? (this.state.classname.toString()) : (null));
        className = className.split("|");
        return (
            <div className={className[0]}>
                <div className={className[1]} {...{"uk-grid":""}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default NavGrid;