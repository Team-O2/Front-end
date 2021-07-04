import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  name: string;
  value?: string | number;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusOut?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<Element>) => void;
}

function Input({ name, autoComplete = 'off', ...props }: IProps): React.ReactElement {
  return <SInput name={name} autoComplete={autoComplete} {...props} />;
}

const SInput = Styled.input`
    margin : 0;
`;

export default Input;
