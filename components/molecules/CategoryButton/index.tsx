import React from 'react';
import { CategoryBtn, CategoryButtonWrapper } from './style';

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
      <CategoryBtn readMore={isMore} isCategoryClicked={isSelected} onClick={onSelectInterest} className="button">
        {tag}
      </CategoryBtn>
    </CategoryButtonWrapper>
  );
}

export default CategoryButton;
