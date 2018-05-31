import React, { Component } from "react";
import { Button, ToTop, Icon } from "uikitx";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Button>Default</Button>
                <Button href="#" color="primary">Primary</Button>
                <Button size="large" color="secondary">Secondary</Button>
                <Button color="danger">Danger</Button>
                <Button color="text">Text</Button>
                <Button color="link">Link</Button>
                <ToTop />
                <Icon />
            </div>
        );
    }
}
export default App;