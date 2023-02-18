import FormWrapper from '../components/FormWrapper';
import { AddressData } from '../types/AddressFormProps';

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressData) => {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        name="street"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="City">City</label>
      <input
        required
        type="text"
        value={city}
        name="city"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="State">State</label>
      <input
        required
        type="text"
        value={state}
        name="state"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="zip">Zip</label>
      <input
        required
        type="text"
        value={zip}
        name="zip"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
