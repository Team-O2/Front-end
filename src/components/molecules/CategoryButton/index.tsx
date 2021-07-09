import React from 'react';
import Styled from 'styled-components';
import Button from 'components/atoms/Button';

interface IProps {
  tag: string;
  isEntire: boolean;
  className?: string | undefined;
  ref?: React.RefObject<HTMLInputElement>;
}
interface IData {
  isWhole: boolean;
}

function CategoryButton({ tag, isEntire }: IProps): React.ReactElement {
  return (
    <SCategoryButton isWhole={isEntire}>
      <Button className="button">{tag}</Button>
    </SCategoryButton>
  );
}

const SCategoryButton = Styled.label`

  height: 46px;
  border-radius: 60px;
  padding: 12px 25px;
  margin-right: 10px;
  background-color: ${({ isWhole }: IData) => (isWhole ? '#03b6ce' : 'white')};
  border: ${({ isWhole }: IData) => (isWhole ? '1px solid #03b6ce' : '1px solid #03b6ce')};
  .button {
    white-space : nowrap; 
    font-size: 16px;
    color: ${({ isWhole }: IData) => (isWhole ? 'white' : '#03b6ce')};
    font-family: 'AppleSDGothicNeo';
    font-weight: bold;
  }
  
`;

export default CategoryButton;
