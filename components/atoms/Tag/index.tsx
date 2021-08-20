import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  name: string;
  paddingX?: string;
  paddingY?: string;
  className?: string;
  color: string;
  isSelected: boolean;
}

function Tag({ name, ...props }: IProps): React.ReactElement {
  return <STag {...props}>{name}</STag>;
}

interface ITagProps {
  color: string;
  paddingX?: string;
  paddingY?: string;
  isSelected: boolean;
}

const STag = Styled.span<ITagProps>`
  display: inline-block;
  border: 1px solid ${({ color }) => palette('primary', parseInt(color))};
  color: ${({ color, isSelected }) => (isSelected ? '#fff' : palette('primary', parseInt(color)))};
  background-color: ${({ color, isSelected }) => (isSelected ? palette('primary', parseInt(color)) : '#fff')};
  padding: ${({ paddingY }) => paddingY || '0.5rem'} ${({ paddingX }) => paddingX || '1.5rem'};
  /* padding: 1.2rem 3rem; (회원가입 태그)*/
  border-radius: 60px;
  text-align: center;
`;

export default Tag;
