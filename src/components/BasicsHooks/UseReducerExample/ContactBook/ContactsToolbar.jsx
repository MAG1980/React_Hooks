import {useContacts} from "./useContacts";
import {Types} from "./ContactsContent";

export const ContactsToolbar = () => {
    const [state, dispatch] = useContacts()
    const {selectedId} = state

    const removeSelected = () => {
        dispatch({
            type: Types.REMOVE,
            payload: {id: selectedId}
        })
    }

    const rollbackChanges = () => {
        dispatch({
            type: Types.ROLLBACK
        })
    }

    const buttonStyle = {
        margin: 10,
        padding: 10,
        backgroundColor: '#FFF',
        border: 'cadetblue 1px solid',
        borderRadius: 6
    }

    return (
        <div>
            {selectedId ? (
                <button style={buttonStyle} onClick={removeSelected}>
                    Remove selected
                </button>
            ) : null}
            <button style={buttonStyle} onClick={rollbackChanges}>
                Rollback changes
            </button>
        </div>
    )
}
