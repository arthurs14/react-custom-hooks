export interface AccountFormProps {
  email: string;
  password: string;
}

export interface AccountData extends AccountFormProps {
  updateFields: (fields: Partial<AccountFormProps>) => void;
}
