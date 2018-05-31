import React, { Component } from "react";
import { Button, ToTop, Icon, Progress, Nav, NavItem, NavLink } from "uikitx";
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
                <Button href="#" type="icon" color="icon"><Icon/></Button>
                <Button href="#" type="icon" color="text" style={{ borderRadius: 0 }}><Icon/></Button>
                <Progress value={10} max={20} />
                <div style={{ marginLeft: 50, width: 300 }}>
                    <Nav accordion multiple primary>
                        <NavItem header>Navigation Header</NavItem>    
                        <NavItem active><NavLink>Active</NavLink></NavItem>
                        <NavItem parent>
                            <NavLink>Parent</NavLink>
                            <Nav sub accordion>
                                <NavItem active><NavLink>Active Child</NavLink></NavItem>
                                <NavItem><NavLink>Child</NavLink></NavItem>
                                <NavItem parent>
                                    <NavLink>Parent</NavLink>
                                    <Nav sub center>
                                        <NavItem active><NavLink>Active Child</NavLink></NavItem>
                                        <NavItem><NavLink>Child</NavLink></NavItem>
                                    </Nav>
                                </NavItem>
                                <NavItem parent>
                                    <NavLink>Parent</NavLink>
                                    <Nav sub>
                                        <NavItem active><NavLink>Active Child</NavLink></NavItem>
                                        <NavItem><NavLink>Child</NavLink></NavItem>
                                    </Nav>
                                </NavItem>
                            </Nav>
                        </NavItem>
                        <NavItem parent icon>
                            <NavLink>Parent</NavLink>
                            <Nav sub>
                                <NavItem><NavLink>Active Child</NavLink></NavItem>
                                <NavItem><NavLink>Child</NavLink></NavItem>
                            </Nav>
                        </NavItem>
                        <NavItem divider />
                        <NavItem><NavLink><Icon name="table" style={{ marginRight: 10 }} />Icon Link</NavLink></NavItem>
                    </Nav>
                </div>    
            </div>
        );
    }
}
export default App;