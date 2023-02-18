export interface UserFormProps {
  firstName: string;
  lastName: string;
  age: string;
}

export interface UserData extends UserFormProps {
  updateFields: (fields: Partial<UserData>) => void;
}
