import Button from 'components/atoms/Button';
import React from 'react';
import Styled from 'styled-components';

interface IProps {
  tag: string;
  isMore?: boolean;
  selectedCategory?: string;
  onClickInterest?: ((tag: string) => void) | undefined;
  ref?: React.RefObject<HTMLInputElement>;
}
interface IData {
  readMore?: boolean;
  isCategoryClicked?: boolean;
}

function CategoryButton({ tag, isMore, selectedCategory, onClickInterest }: IProps): React.ReactElement {
  const isSelected = tag === selectedCategory ? true : false;
  const onSelectInterest = () => {
    onClickInterest && onClickInterest(tag);
  };
  return (
    <SCategoryButton readMore={isMore} isCategoryClicked={isSelected}>
      <Button onClick={onSelectInterest} className="button">
        {tag}
      </Button>
    </SCategoryButton>
  );
}

const SCategoryButton = Styled.label`
  height: 46px;
  border-radius: 60px;
  padding: 12px 25px;
  margin-right: 10px;
  background-color:${({ isCategoryClicked }: IData) => (isCategoryClicked ? '#03b6ce' : '#ffffff')};
  border: ${({ isCategoryClicked }: IData) =>
    isCategoryClicked ? '#03b6ce' : ({ readMore }: IData) => (readMore ? '1px solid #8b8b8b' : '1px solid #03b6ce')};
  .button {
    white-space : nowrap; 
    font-size: 16px;
    color: ${({ isCategoryClicked }: IData) =>
      isCategoryClicked ? '#ffffff' : ({ readMore }: IData) => (readMore ? '#8b8b8b' : '#03b6ce')};
    font-family: 'AppleSDGothicNeo';
    font-weight: bold;
  }
  
`;

export default CategoryButton;
