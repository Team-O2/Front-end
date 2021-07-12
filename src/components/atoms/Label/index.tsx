import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  children: React.ReactElement | string;
  className?: string;
  htmlFor?: string;
}

function Label({ children, ...props }: IProps): React.ReactElement {
  return <SLabel {...props}>{children}</SLabel>;
}

const SLabel = Styled.label`
  margin : 0;
`;

export default Label;
