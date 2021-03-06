# UikitX
React wrapper library for Uikit 3, currently in beta

### Adding UiKit
Install uikit from NPM. UikitX does not include UiKit CSS so this needs to be installed:
```
npm install --save uikit
npm install --save https://github.com/shivanmodha/UikitX
```
Import UiKit CSS in the `src/index.js` file:
```
import "uikit/dist/css/uikit.min.css";
```
And you are good to go!
# Documentation
## Button
Basic usage
```jsx
import { Button } from "uikitx";
export default class Example extends React.Component {
    render() {
        return (
            <div className="Buttons">
                {/* Color Attributes */}
                <Button>Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="danger">Danger</Button>
                <Button color="text">Text</Button>
                <Button color="link">Link</Button>
                {/* Size Attributes */}
                <Button size="large">Large</Button>
                <Button size="medium">Medium</Button>
                <Button size="small">Small</Button>
                {/* Type Attributes */}
                <Button type="default">Default</Button>
                <Button type="icon">Icon Button</Button>
            </div>
        );
    }
}
```
#### Properties
| Property | Description              | Types                                                 | Examples                                              |
| -------- | ------------------------ | ----------------------------------------------------- | ---------------------------------------- |
| Type     | Type of button to render | default, normal, icon                                 | `<Button type="default">Default</Button>` |
| Color    | Button color style       | default, primary, secondary, danger, text, link, icon | `<Button color="danger">Danger</Button> ` |
| Size     | Size of  button          | default, medium, small, large                         | `<Button size="medium">Medium</Button> `  |
| href     | `<button>` or `<a>`      | Any string                                            | `<Button href="#">Button</Button>`        |
> All other props, such as `onClick` and `style`, will be passed to the underlying uikit object
## Icon
Basic usage
```jsx
import { Icon } from "uikitx";
export default class Example extends React.Component {
    render() {
        return (
            <div className="Icons">
                {/* Name Attribute */}
                <Icon />
                <Icon name="table" />
                {/* Ratio Attribute */}
                <Icon ratio={2} />
                <Icon ratio={3} name="table" />
            </div>
        );
    }
}
```
You can also wrap icons around a button to create an icon button
```jsx
import { Button, Icon } from "uikitx";
export default class Example extends React.Component {
    render() {
        return (
            <div className="Icon Buttons">
                <Button><Icon /></Button>
                <Button href="#" type="icon" color="icon"><Icon name="table"/></Button>
            </div>
        )
    }
}
```
> Notice the `href` tag added to the button. Icon buttons look better when wrapped in a link rather than a standard button. The default `onClick` listener can still be accessed.
#### Properties
| Property | Description              | Types                                                 | Examples                                              |
| -------- | ------------------------ | ----------------------------------------------------- | ---------------------------------------- |
| Name     | Name of the icon    | Any icon defined in uikit's standard icon set              | `<Icon name="table" />`                   |
| Ratio    | Size of the icon    | Any integer                                                | `<Icon ratio={2} />`                       |
> All other props, such as `onClick` and `style`, will be passed to the underlying uikit object

## ToTop
Basic usage
```jsx
import { ToTop } from "uikitx";
export default class Example extends React.Component {
    render() {
        return (
            <div className="ToTop">
                <ToTop />
            </div>
        );
    }
}
```
> There isn't much to this element

## Progress
Basic usage
```jsx
import { Progress } from "uikitx";
export default class Example extends React.Component {
    render() {
        return (
            <div className="Progress">
                <Progress />
                <Progress value={10} max={50} />
            </div>
        );
    }
}
```
#### Properties
| Property | Description              | Types                                                 | Examples                                              |
| -------- | ------------------------ | ----------------------------------------------------- | ---------------------------------------- |
| Value    | Value of the progress    | Any integer                                           | `<Progress value={50} />`                |
| Max      | Max value of progress    | Any integer                                           | `<Progress max={100} />`                 |

## Navigation Bar
Basic usage
```jsx
import { Icon, Nav, NavItem, NavLink } from "uikitx";
export default class Example extends React.Component {
    render() {
        return (
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
        );
    }
}
```
