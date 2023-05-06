import {ThemeProvider} from "./ThemeContext";
import {Label} from "./Label";
import {UserPanel} from "./UserPanel";
import {ThemeLabel} from "./ThemeLabel";
import {ThemeToolbar} from "./ThemeToolbar";

export const UseContextExample = () => {
    return (
        <ThemeProvider>
            <Label>useContextExample</Label>
            <UserPanel/>
            <ThemeLabel/>
            <ThemeToolbar/>
        </ThemeProvider>
    )
}
