export interface AddressFormProps {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface AddressData extends AddressFormProps {
  updateFields: (fields: Partial<AddressFormProps>) => void;
}
