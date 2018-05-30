import React, { Component } from "react";
import { Button } from "uikitx";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Button>Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="danger">Danger</Button>
                <Button color="text">Text</Button>
                <Button color="link">Link</Button>
            </div>
        );
    }
}
export default App;