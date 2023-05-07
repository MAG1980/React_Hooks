import {Index} from "../Avatar";
import "./index.css"
import {useAppContext} from "../hooks/useAppContext";

export const TopPanel = () => {
    // const {loading, data} = useUserContext()
    const {loading, user} = useAppContext()
    console.log(loading, user)
    if (loading) {
        return <div className="top-panel">Loading...</div>
    }
    return (
        <div className="top-panel">
            <Index/>
            <span>{user.name}</span>
        </div>
    )
}
