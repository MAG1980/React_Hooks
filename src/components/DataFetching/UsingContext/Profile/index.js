import {useUserContext} from "../UserContext";
import "./index.css"


export const Profile = () => {
    const {loading, data, error} = useUserContext()

    if (loading) {
        return <div className="profile">Loading...</div>
    }

    if (error) {
        return (
            <div className="profile">
                <div className="error">Oops! Something went wrong...</div>
            </div>
        )
    }
}
