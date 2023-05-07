import {useUserContext} from "../hooks/useUserContext";
import "./index.css"
import {ProfileRow} from "./ProfileRow";


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

    //Деструктуризация данных, полученных из контекста
    const {name, email, phone, website, company} = data

    return (
        <div className="profile">
            <table>
                <tbody>
                <ProfileRow param="Name" value={name}/>
                <ProfileRow param="Email" value={email}/>
                <ProfileRow param="Phone" value={phone}/>
                <ProfileRow param="Website" value={<a href={'http' + website}>{website}</a>}/>
                <ProfileRow param="Company" value={company.name}/>
                </tbody>
            </table>
        </div>
    )
}
