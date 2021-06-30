import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  children: React.ReactElement | string;
  onClick?: () => void;
  className?: string;
}

function Button({ children, ...props }: IProps): React.ReactElement {
  return <SButton {...props}>{children}</SButton>;
}

const SButton = Styled.button`
    background : none;
    border : none;
  `;

export default Button;
