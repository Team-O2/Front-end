import React from 'react';
import { CategoryButtonWrapper, SButton } from './style';

interface IProps {
  tag: string;
  isMore: boolean;
  selectedCategory?: string;
  onClickInterest?: (tag: string) => void;
}

function CategoryButton({ tag, isMore, selectedCategory, onClickInterest }: IProps): React.ReactElement {
  const isSelected = tag === selectedCategory ? true : false;
  const onSelectInterest = () => {
    onClickInterest && onClickInterest(tag);
  };
  return (
    <CategoryButtonWrapper readMore={isMore} isCategoryClicked={isSelected}>
      <SButton readMore={isMore} isCategoryClicked={isSelected} onClick={onSelectInterest} className="button">
        {tag}
      </SButton>
    </CategoryButtonWrapper>
  );
}

export default CategoryButton;
