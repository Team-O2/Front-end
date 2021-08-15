import React from 'react';
import Styled from 'styled-components';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  autoComplete?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

function Input({ autoComplete = 'off', ...props }: IProps): React.ReactElement {
  return <SInput autoComplete={autoComplete} {...props} />;
}

const SInput = Styled.input`
    margin : 0;
`;

export default Input;
