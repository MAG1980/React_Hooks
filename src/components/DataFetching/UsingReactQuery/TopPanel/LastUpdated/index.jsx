import {useLastUpdated} from "../../hooks/useLastUpdated";

export const LastUpdated = () => {
    const {data} = useLastUpdated()

    //Проверка на получение и форматирование даты последнего обновления
    const formattedTime = data?.toLocaleTimeString() ?? '--'

    return (
        <div className="swr-last-updated">
            Last updated:
            <br/>
            <strong>{formattedTime}</strong>
        </div>
    )
}