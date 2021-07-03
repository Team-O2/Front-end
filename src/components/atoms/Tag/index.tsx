import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  name: string;
  className?: string;
  color?: string;
}

function Tag({ name, ...props }: IProps): React.ReactElement {
  return <STag {...props}>{name}</STag>;
}

interface ITagProps {
  color?: string;
}

const STag = Styled.span<ITagProps>`
  display: inline-block;
  border: 1px solid ${(props) => palette('primary', props.color)};
  color: ${(props) => palette('primary', props.color)};
  padding: 0.5rem 1.5rem;
  /* padding: 1.2rem 3rem; (회원가입 태그)*/
  border-radius: 60px;
  text-align: center;
`;

export default Tag;
