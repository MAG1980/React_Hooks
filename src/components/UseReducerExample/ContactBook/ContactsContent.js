import {v4 as uuidv4} from "uuid";

export const initialState = {
    contacts: [
        {id: uuidv4(), firstName: 'John', lastName: 'Smith', phone: '555-123-123'},
        {id: uuidv4(), firstName: 'Jane', lastName: 'Smith', phone: '555-123-123'},
        {id: uuidv4(), firstName: 'Jack', lastName: 'Sparrow', phone: '555-123-155'},
        {id: uuidv4(), firstName: 'John', lastName: 'Connor', phone: '555-333-123'},
    ],
    selectedId: null
}

export const Types = {
    ADD: 'ADD', REMOVE: 'REMOVE', SELECT: 'SELECT', ROLLBACK: 'ROLLBACK'
}




