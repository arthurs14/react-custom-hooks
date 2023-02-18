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
        name="firstName"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        name="lastName"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        name="age"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
