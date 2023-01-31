import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from 'components/ContactList/ContactList.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      {contact.name}: {contact.phone}
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};
