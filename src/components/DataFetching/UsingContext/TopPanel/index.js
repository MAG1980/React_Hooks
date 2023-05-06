import {Avatar} from "./Avatar";
import {useUserContext} from "../UserContext";
import "./index.css"

export const TopPanel = () => {
    const {loading, data} = useUserContext()

    if (loading) {
        return <div className="top-panel">Loading...</div>
    }
    return (
        <div className="top-panel">
            <Avatar/>
            <span>{data.name}</span>
        </div>
    )
}
