import {useState} from "react";

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            if (item) {
                return JSON.parse(item)
            }
        } catch (error) {
        }
    });
}
