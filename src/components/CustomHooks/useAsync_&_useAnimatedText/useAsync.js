import {useCallback, useState} from "react";

//Возможные статусы ответов
export const AsyncStatus = {
    IDLE: 'idle',
    PENDING: 'pending', //ожидающий решения
    SUCCESS: 'success',
    ERROR: 'error'
}

/**
 *Вызов асинхронной функции с отображением стадий выполнения и ошибок
 * @param asyncFunc промис
 * @return {((function(): void)|*|string)[]} [функция для вызова промиса, статус, результат, ошибка}
 */
export function useAsync(asyncFunc) {
    const [status, setStatus] = useState(AsyncStatus.IDLE);
    const [result, setResult] = useState();
    const [error, setError] = useState();

    //Доступна для вызова извне
    //Функция обёрнута в хук useCallback. В данном случае мемоизация оправдана,
    //т.к. она является функцией общего назначения, т.к. мы не знаем, как и где она будет использоваться:
    //может быть передана в обработчик другого компонента, передана через props и т.п..
    //useCallback использован для того, чтобы сохранить ссылку на функцию между рендерами, а не создавать новую функцию.
    const run = useCallback(
        () => {
            if (status === AsyncStatus.PENDING) {
                console.error('Still pending, cannot run again...')
                return
            }

            //Если асинхронная функция ещё не находится в стадии выполнения (см. выше)
            //Устанавливаем статус "ожидание" и вызываем асинхронную функцию
            setStatus(AsyncStatus.PENDING)
            asyncFunc()
                //После успешного разрешения промиса сохраняем результат его вызова в state
                //очищаем хранилище ошибки и устанавливаем статус 'success'
                .then((r) => {
                    setResult(r)
                    setError(null)
                    setStatus(AsyncStatus.SUCCESS)
                })
                //При отклонении промиса сохраняем в state сообщение об ошибке
                //и устанавливаем статус 'error' в state
                //опционально, можно очищать result в state
                .catch((error) => {
                    setError(error)
                    setStatus(AsyncStatus.ERROR)
                })
        }, [status, asyncFunc],
    );
    return [run, status, result, error]
}