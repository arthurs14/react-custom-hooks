import FormWrapper from '../components/FormWrapper';
import { AddressData } from '../types/AddressFormProps';

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressData) => {
  const updateFormData = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    updateFields({ [name]: e.target.value });
  };

  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFormData(e, 'street')}
      />
      <label htmlFor="City">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFormData(e, 'city')}
      />
      <label htmlFor="State">State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFormData(e, 'state')}
      />
      <label htmlFor="zip">Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateFormData(e, 'zip')}
      />
    </FormWrapper>
  );
};

export default AddressForm;
