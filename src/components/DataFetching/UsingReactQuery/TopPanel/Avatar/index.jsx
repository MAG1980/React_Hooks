import "./index.css"
import {useUserInitials} from "../../hooks/useUserInitials";

export function Avatar() {
    const initials = useUserInitials()

    return <div className="rq-avatar">{initials}</div>
}
