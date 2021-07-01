import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  name: string;
  className?: string;
}

function Label({ name, ...props }: IProps): React.ReactElement {
  return <SLabel {...props}>{name}</SLabel>;
}

const SLabel = Styled.label``;

export default Label;
