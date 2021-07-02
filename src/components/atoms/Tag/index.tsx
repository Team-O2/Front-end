import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  name: string;
  className?: string;
  color?: string;
}

function Tag({ name, ...props }: IProps): React.ReactElement {
  return <STag {...props}>{name}</STag>;
}

const STag = Styled.span`
  display: inline-block;
  border: 1px solid;
  padding: 1.2rem 3rem;
  border-radius: 60px;
  text-align: center;
`;

export default Tag;
