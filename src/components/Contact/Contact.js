import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from 'components/Button.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    toast.error('Contact has been deleted!');
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      {contact.name}: {contact.number}
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
