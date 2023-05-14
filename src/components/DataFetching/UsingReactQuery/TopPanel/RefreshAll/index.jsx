import {Button} from "../../../../UIComponents/Button";
import {useQueryClient} from "react-query";

export const RefreshAll = () => {
    //Получаем ссылку на общий для всего приложения queryClient
    //с помощью ука библиотеки ReactQuery
    const queryClient = useQueryClient()
    const handleClick = () => {
        //Сброс кэша всех запросов ReactQuery (всего приложения)
        queryClient.invalidateQueries()
    }

    return (
        <Button text="Refresh all" onClick={handleClick}/>
    )
}