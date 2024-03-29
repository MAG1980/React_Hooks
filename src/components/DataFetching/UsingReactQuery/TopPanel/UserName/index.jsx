import {useUser} from "../../hooks/useUser";
import "./index.css"

export const UserName = () => {
    const data = useUser()

    return (
        <>
            <div className="rq-user-name">{data?.name}</div>
            <div className="rq-user-name-email">{data?.email}</div>
        </>
    )
}