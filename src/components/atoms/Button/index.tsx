import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  children: React.ReactElement | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  value?: string;
  disabled?: boolean;
}

function Button({ children, ...props }: IProps): React.ReactElement {
  return <SButton {...props}>{children}</SButton>;
}

const SButton = Styled.button`
  border: 0;
  background-color: inherit;
  padding : 0;
  :focus {
    outline : none;
  }
`;

export default Button;
