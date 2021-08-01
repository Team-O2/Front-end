import React from 'react';
import { SLabel } from './style';

export interface IProps {
  children: React.ReactElement | string;
  className?: string;
  htmlFor?: string;
}

function Label({ children, ...props }: IProps): React.ReactElement {
  return <SLabel {...props}>{children}</SLabel>;
}

export default Label;
