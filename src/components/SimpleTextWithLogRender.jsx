import {SimpleText} from "./SimpleText";
import {withLogRender} from "../HOC/withLogRender";


export const SimpleTextWithLogRender = () => {
    const LoggedSimpleText = withLogRender(SimpleText)
    return (
        <p>
            <LoggedSimpleText text="Some text"/>
        </p>
    )
}
