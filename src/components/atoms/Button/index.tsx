import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  children: React.ReactElement | string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  value?: string;
  disabled?: boolean;
}

function Button({ children, ...props }: IProps): React.ReactElement {
  return <SButton {...props}>{children}</SButton>;
}

const SButton = Styled.button`
    background : none;
    border : none;
    padding : 0;
    :focus {
      outline : none;
    }
  `;

export default Button;
