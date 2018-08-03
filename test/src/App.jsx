import React, { Component } from "react";
import { Button, ToTop, Icon, Progress, Nav, NavItem, NavGrid, NavLink, Navbar } from "uikitx";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar click transparent dropbar push>
                    <Nav navbar="left">
                        <NavLink logo>Brand</NavLink>
                        <NavItem><NavLink>Left</NavLink></NavItem>
                        <NavItem>
                            <NavLink href="#" subtitle={(<i>Subtitle</i>)}>Parent</NavLink>
                            <Nav navbar dropdown>
                                <NavItem><NavLink href="#">Child</NavLink></NavItem>
                            </Nav>
                        </NavItem>
                    </Nav>
                    <Nav navbar="center">
                        <NavItem>
                            <NavLink>Center</NavLink>
                            <Nav accordion navbar dropdown>
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
                    </Nav>
                    <Nav navbar="right">
                        <NavItem><NavLink>Right</NavLink></NavItem>
                    </Nav>
                </Navbar>
                <h1>Heading 1</h1>
                <h1 className="uk-heading-primary">Heading 1</h1>
                <h1 className="uk-heading-hero">Heading 1</h1>
                <h1 className="uk-heading-primary uk-heading-divider uk-heading-bullet uk-heading-line"><span>Heading 1</span></h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <Button>Default</Button>
                <Button href="#" color="primary">Primary</Button>
                <Button size="small" color="secondary">Secondary</Button>
                <Button color="danger">Danger</Button>
                <Button color="text">Text</Button>
                <Button color="link">Link</Button>
                <ToTop />
                <Icon />
                <Icon name="table" />
                <Icon ratio={2} />
                <Icon ratio={2} name="table" />
                <br/>
                <Button href="#" type="icon" color="icon"><Icon name="table"/></Button>
                <Button href="#" type="icon" color="text" style={{ borderRadius: 0 }}><Icon /></Button>
                <Progress value={10} max={100} />
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
                <Navbar dropbar style={{ height: 50 }}>
                    <Nav navbar="left">
                        <NavLink toggle><Icon name="menu" style={{ marginRight: 5 }} />Menu</NavLink>
                    </Nav>
                    <Nav navbar="center">
                        <Nav navbar="nav-left">
                            <NavItem>
                                <NavLink>CenterLeft</NavLink>
                                <NavGrid width={2} childwidth={2}>
                                    <Nav navbar="grid" accordion>
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
                                    <Nav navbar="grid" accordion>
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
                                </NavGrid>
                            </NavItem>
                        </Nav>
                        <NavLink logo>Brand</NavLink>
                        <Nav navbar="nav-right">
                            <NavItem><NavLink>CenterRight</NavLink></NavItem>
                        </Nav>
                    </Nav>
                    <Nav navbar="right">
                        <NavLink toggle>Menu<Icon name="menu" style={{ marginLeft: 5 }} /></NavLink>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default App;