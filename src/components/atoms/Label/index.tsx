import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  children: React.ReactElement | string;
  className?: string;
  for?: string;
}

function Label({ children, ...props }: IProps): React.ReactElement {
  return <SLabel {...props}>{children}</SLabel>;
}

const SLabel = Styled.p`
    margin : 0;
`;

export default Label;
