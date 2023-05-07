import {Index} from "../Avatar";
import {useUserContext} from "../hooks/useUserContext";
import "./index.css"

export const TopPanel = () => {
    const {loading, data} = useUserContext()
    console.log(loading, data)
    if (loading) {
        return <div className="top-panel">Loading...</div>
    }
    return (
        <div className="top-panel">
            <Index/>
            <span>{data.name}</span>
        </div>
    )
}
