import React, {useState} from 'react';

export const useMergedState = (initState, changes) => {
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
