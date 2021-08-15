import React from 'react';
import { SButton } from './style';

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | string;
}

function Button({ children, ...props }: IProps): React.ReactElement {
  return <SButton {...props}>{children}</SButton>;
}

export default Button;
