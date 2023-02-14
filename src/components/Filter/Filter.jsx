import { Label } from "../PhonebookForm/PhonebookForm.styled";
import { Container, InputName } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/filter/selectors";
import { setFilter } from "redux/filter/filterSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value));
    const filter = useSelector(selectFilter);
    console.log(filter);
    
    return (
        <Container>
        <Label>
            Find contacts by name
            <InputName type="text" value={filter.filter} onChange={handleFilterChange} />
        </Label>
    </Container>
    )
    }


    
export default Filter;