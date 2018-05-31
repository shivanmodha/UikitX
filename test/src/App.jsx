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
                <div><Icon icon="icon: lock; ratio: 1" /></div>
                <span uk-icon="icon: check; ratio: 2"></span>
            </div>
        );
    }
}
export default App;