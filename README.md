# UikitX
React wrapper library for Uikit 3, currently in beta

# Documentation
## Button
#### Example
```jsx
import { Button } from "uikitx";
export default class Example extends React.Component {
    render() {
        return (
            <div className="Buttons">
                <Button>Default</Button>
            </div>
        )
    }
}
```
#### Properties
| Property | Description              | Types                                                 | Examples                                 |
| -------- | ------------------------ | ----------------------------------------------------- | ---------------------------------------- |
| Type     | Type of button to render | default, normal, icon                                 | `<Button type="default">Default</Button>` |
| Color    | Button color style       | default, primary, secondary, danger, text, link, icon | `<Button color="danger">Danger</Button> ` |
| Size     | Size of  button          | default, medium, small                                | `<Button size="medium">Medium</Button> `  |