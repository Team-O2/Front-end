import React from 'react';
import Styled from 'styled-components';
import Button from 'components/atoms/Button';

interface IProps {
  tag: string;
  isMore?: boolean;
  className?: string | undefined;
  ref?: React.RefObject<HTMLInputElement>;
}
interface IData {
  readMore?: boolean;
}

function CategoryButton({ tag, isMore }: IProps): React.ReactElement {
  return (
    <SCategoryButton readMore={isMore}>
      <Button className="button">{tag}</Button>
    </SCategoryButton>
  );
}

const SCategoryButton = Styled.label`
  height: 46px;
  border-radius: 60px;
  padding: 12px 25px;
  margin-right: 10px;
  background-color: white;
  border: ${({ readMore }: IData) => (readMore ? '1px solid #8b8b8b' : '1px solid #03b6ce')};
  .button {
    white-space : nowrap; 
    font-size: 16px;
    color: ${({ readMore }: IData) => (readMore ? '#8b8b8b' : '#03b6ce')};
    font-family: 'AppleSDGothicNeo';
    font-weight: bold;
  }
  
`;

export default CategoryButton;
