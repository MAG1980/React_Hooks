import "./index.css"
import {Avatar} from "./Avatar";
import {LastUpdated} from "./LastUpdated";
import {TodoCounter} from "./TodoCounter";
import {UserName} from "./UserName";
import {RefreshAll} from "./RefreshAll"

export const TopPanel = () => {

    return (
        <div className="swr-top-panel">
            <div className="avatar-container">
                <Avatar/>
            </div>
            <div className="user-name-container">
                <UserName/>
            </div>
            <div className="widget-container">
                <TodoCounter/>
            </div>
            <div className="widget-container">
                <LastUpdated/>
            </div>
            <div className="widget-container">
                <RefreshAll/>
            </div>

        </div>
    )
}
