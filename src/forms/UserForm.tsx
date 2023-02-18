import FormWrapper from '../components/FormWrapper';
import { UserData } from '../types/UserFormProps';

const UserForm = ({ firstName, lastName, age, updateFields }: UserData) => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="firstName">First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
