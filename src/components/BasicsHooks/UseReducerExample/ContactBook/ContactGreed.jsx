import {useContacts} from "./useContacts";
import {Types} from "./ContactsContent";
import {ContactTile} from "./ContactTile";

export const ContactGreed = () => {
    //Получаем доступ к contactsReducer с помощью кастомного хука
    const [state, dispatch] = useContacts()
    //Получаем поля из объекта state contactsReducer методом деструктуризации объекта
    const {contacts, selectedId} = state

    const selectContact = (id) => {
        dispatch({
            type: Types.SELECT,
            //Помещаем в свойство payload объект,
            //содержащий поле id со значением, полученным в качестве аргумента
            payload: {id}
        })
    }
    return (
        <div className="contacts-grid" style={{display: 'flex'}}>
            {contacts.map(contact => (
                <ContactTile
                    key={contact.id}
                    contact={contact}
                    /*Получает значение true, если является выбранным*/
                    selected={selectedId === contact.id}
                    onClick={() => selectContact(contact.id)}
                />
            ))}
        < /div>
    )
}
