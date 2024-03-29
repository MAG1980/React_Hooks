import {useRef, useEffect} from "react";

export const useUpdateEffect = (callback) => {
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            callback()
        }
    }, [callback]);
}