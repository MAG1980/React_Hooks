import {AsyncStatus, useAsync} from "./useAsync";
import {asyncRequestRandomNumber} from "./asyncRequestRandomNumber";
import {AnimatedText} from "./AnimatedText";

export const UseAsyncExample = () => {
    const [run, status, result, error] = useAsync(asyncRequestRandomNumber)
    return (
        <>
            <h2>UseAsync example</h2>
            {status === AsyncStatus.IDLE ? (
                <button onClick={run}>Request random number</button>
            ) : status === AsyncStatus.PENDING ? (
                <AnimatedText text="Request in progress ..."/>
            ) : status === AsyncStatus.SUCCESS ? (
                <>
                    <button onClick={run}>Request again</button>
                    <p>Current random number: {result}</p>
                </>
            ) : (
                <>
                    <button onClick={run}>Request again</button>
                    <p style={{color: 'red'}}>
                        <b>Error {error}</b>
                    </p>
                </>
            )}
        </>
    )
}