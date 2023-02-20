import { List, Item } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { selectFilter } from "redux/filter/selectors" 
import { Contact } from "components/Contact/Contact";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    // console.log(contacts);
    const filter = useSelector(selectFilter);
    // console.log(filter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        // console.log(normalizedFilter);
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    const filteredContacts = getFilteredContacts();
    // console.log(filteredContacts);
    return (
        <List>
            {filteredContacts.map(contact => (
                <Item key={contact.id}>
                    <Contact contact={contact} />
                </Item>))}
        </List>
    )
};

export default ContactList;