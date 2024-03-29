import {useUser} from "../../hooks/useUser";
import "./index.css"

export const UserName = () => {
    const data = useUser()

    return (
        <>
            <div className="swr-user-name">{data?.name}</div>
            <div className="swr-user-name-email">{data?.email}</div>
        </>
    )
}