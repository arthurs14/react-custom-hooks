import FormWrapper from '../components/FormWrapper';
import { AccountData } from '../types/AccountFormProps';

const AccountForm = ({ email, password, updateFields }: AccountData) => {
  return (
    <FormWrapper title="Account">
      <label htmlFor="email">Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        name="email"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        value={password}
        name="password"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
