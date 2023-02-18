import FormWrapper from '../components/FormWrapper';
import { AccountData } from '../types/AccountFormProps';

const AccountForm = ({ email, password, updateFields }: AccountData) => {
  const updateForm = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    updateFields({ [name]: e.target.value });
  };

  return (
    <FormWrapper title="Account">
      <label htmlFor="email">Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateForm(e, 'email')}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateForm(e, 'password')}
      />
    </FormWrapper>
  );
};

export default AccountForm;
