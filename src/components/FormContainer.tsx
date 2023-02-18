import { ReactNode } from 'react';

type FormProps = {
  children: ReactNode;
};

const FormContainer = ({ children }: FormProps) => {
  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '.5rem',
        fontFamily: 'Arial',
        maxWidth: 'max-content',
      }}
    >
      {children}
    </div>
  );
};

export default FormContainer;
