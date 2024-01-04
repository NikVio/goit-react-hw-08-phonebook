import {
  FormGroup,
  FilterBox,
  FilterInput,
} from 'components/ContactForm/ContactForm.styled';
import { filterContact } from 'components/Redux/PhoneBook/filtersSlice';
import { selectFilters } from 'components/Redux/PhoneBook/selectors';

import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <FilterBox>
      <FormGroup>
        Find contacts by name{' '}
        <FilterInput
          type="text"
          value={filter}
          onChange={evt => dispatch(filterContact(evt.target.value))}
        />
      </FormGroup>
    </FilterBox>
  );
};
