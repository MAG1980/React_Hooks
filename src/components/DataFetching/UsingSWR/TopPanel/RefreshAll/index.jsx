import {useAppContext} from "../../hooks/useAppContext";
import {useSWRConfig} from "swr";
import {Button} from "../../../../UIComponents/Button";

export const RefreshAll = () => {
    const {userId} = useAppContext()
    const {mutate} = useSWRConfig()

    const handleClick = () => {
        mutate(`users/${userId}`)
        mutate(`todos?userId=${userId}`)
    }

    return (
        <Button text="Refresh all" onClick={handleClick}/>
    )
}