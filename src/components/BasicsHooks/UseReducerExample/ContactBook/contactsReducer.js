import {initialState, Types} from "./ContactsContent";

export function contactsReducer(state, action) {
    switch (action.type) {
        case Types.ADD:
            return {
                ...state, contacts: [...state.contacts, action.payload]
            }
        case Types.REMOVE:
            const idToRemove = action.payload.id
            return {
                //Методу .filter() необходимо передать аргументом функцию-предикат (возвращающую Boolean)
                //В поле contacts помещаем отфильтрованный массив контактов
                ...state, contacts: state.contacts.filter((contact) => {
                    return contact.id !== idToRemove
                }),
                //Если удаляется выделенный элемент, то снимаем с него выделение
                selectedId: state.selectedId === idToRemove ? null : state.selectedId
            }
        case Types.SELECT:
            return {
                //Создаём в state новое свойство: id выбранного элемента
                ...state, selectedId: action.payload.id
            }
        case Types.ROLLBACK:
            return initialState
        default:
            console.log(`action.type ${action.type} was not recognized`)
            return state
    }
}
