import {useState} from 'react';

export const useMergedState = (initState) => {
    const [state, setState] = useState(initState);

    const mergeState = (changes) => {
        setState((prevState) => {
            return {
                ...prevState,
                ...changes
            }
        })
    }

    return [state, mergeState]
}
