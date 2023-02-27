import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import { Label, Button } from "./PhonebookForm.styled";
import styled from "styled-components";
import { addContact } from "redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const InputName = styled(Field)`
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    &:hover, &:focus {
        border: 5px solid rgb(147, 243, 229);
    }
`;

const FormEl = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    width: 300px;
    
    border: 5px solid  rgb(147, 243, 229);
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
`;

const initialValues = {
    id: "",
    name: "",
    number: "",
};

let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required()
});

const PhonebookForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        const contact = {  name: values.name, number: values.number };
        toast.success("Contact has been created!");
        dispatch(addContact(contact));
        resetForm();
    }

        return (
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
               <FormEl>
                    <Label htmlFor="name">
                        <span>Name</span>
                        <InputName
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
                        />
                        <ErrorMessage name="name" />
                    </Label>
                    <Label htmlFor="number">
                        <span>Number</span>
                        <InputName
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with + and min length 7"
                            required
                            minLength={7}
                        />
                        <ErrorMessage name="number" />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </FormEl>
            </Formik>
        )
}

PhonebookForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}

export default PhonebookForm;