import React from 'react';
import { SButton } from './style';

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

export default Button;
