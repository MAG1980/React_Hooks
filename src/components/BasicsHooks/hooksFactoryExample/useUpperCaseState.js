import {createMapState} from "./createMapState";

/**
 * хук, преобразующий входящую строку к верхнему  регистру
 * @type {(function(*): [unknown,(function(*): void)|*])|*}
 */
export const useUpperCaseState = createMapState((newValue) => {
    return newValue?.toUpperCase()
})