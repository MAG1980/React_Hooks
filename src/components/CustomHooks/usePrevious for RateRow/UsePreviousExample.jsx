import {useState} from "react";
import {usePrevious} from "./usePrevious";
import {RateRow} from "./RateRow";

export const UsePreviousExample = () => {
    const [score, setScore] = useState(0);
    const previousScore = usePrevious(score)
    return (
        <>
            <h2>usePrevious example</h2>
            <RateRow score={previousScore}/>
            <RateRow score={score} onChange={setScore}/>
        </>
    )
}
