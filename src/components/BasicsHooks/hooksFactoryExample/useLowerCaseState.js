import {createMapState} from "./createMapState";

/**
 * хук, преобразующий входящую строку к нижнему регистру
 * @type {(function(*): [unknown,(function(*): void)|*])|*}
 */
export const useLowerCaseState = createMapState((newValue) => {
    return newValue?.toLowerCase()
})