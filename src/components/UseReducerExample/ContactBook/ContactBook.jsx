import {ContactsProvider} from "./ContactsProvider";
import {ContactGreed} from "./ContactGreed";
import {ContactsToolbar} from "./ContactsToolbar";

export function ContactBook(){
    return(
        <ContactsProvider>
            <ContactGreed />
            <ContactsToolbar />
        </ContactsProvider>
    )
}
