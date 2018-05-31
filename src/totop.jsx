import React, { Component } from "react";
import { renderToString } from "react-dom/server";
class ToTop extends Component {
    render() {
        return (
            <div style={{ ...this.props.style }} dangerouslySetInnerHTML={{ __html: '<a href="#" uk-totop uk-scroll></a>' }} />
        )
    }
}
export default ToTop;