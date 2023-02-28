import { useSelector } from "react-redux";
import { List, Item } from "./ContactList.styled";
import { selectContacts } from "redux/contacts/selectors";
import { selectFilter } from "redux/filter/selectors" 
import { Contact } from "components/Contact/Contact";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    const filteredContacts = getFilteredContacts();

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