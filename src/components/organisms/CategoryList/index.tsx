import { MoreClickedIcon, MoreIcon, NextIcon } from 'assets/images';
import { CategoryButton } from 'components/molecules';
import React, { useEffect, useRef, useState } from 'react';
import { interestList } from 'resources/string';
import { CategoryListWrapper, Hashtag, HashtagContainer, Main, More, NextButton, Shadow } from './style';

interface IProps {
  reRenderCategory?: (interest: string) => void;
  selectedCategory?: string;
  categoryChange?: () => void;
}
function CategoryList({ reRenderCategory, selectedCategory, categoryChange }: IProps): React.ReactElement {
  const totalSlide = 6;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLInputElement>(null);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isMoreClicked, setIsMoreClicked] = useState(false);

  const onClickOpenMore = () => {
    setIsOpenMore(!isOpenMore);
    setIsMoreClicked(!isMoreClicked);
  };
  const onClickInterest = (category: string) => {
    reRenderCategory && reRenderCategory(category);
    categoryChange && categoryChange();
  };

  const nextSlide = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    if (slideRef?.current) {
      slideRef.current.style.transition = 'all 1s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide * 15}%)`;
    }
  }, [currentSlide]);

  return (
    <CategoryListWrapper>
      <Main>
        <CategoryButton
          tag="전체"
          isMore={false}
          selectedCategory={selectedCategory}
          onClickInterest={onClickInterest}
        ></CategoryButton>
        <HashtagContainer>
          <Hashtag ref={slideRef}>
            {interestList.map((tag, index) => (
              <CategoryButton
                key={index}
                tag={tag}
                isMore={false}
                selectedCategory={selectedCategory}
                onClickInterest={onClickInterest}
              ></CategoryButton>
            ))}
          </Hashtag>
        </HashtagContainer>
        <Shadow />
        <NextButton>
          <img src={NextIcon} onClick={nextSlide} alt="" />
        </NextButton>
        <img src={isMoreClicked ? MoreClickedIcon : MoreIcon} onClick={onClickOpenMore} alt="" />
      </Main>
      <div>
        {isOpenMore && (
          <More>
            {interestList.map((tag, index) => (
              <CategoryButton
                key={index}
                tag={tag}
                isMore={true}
                selectedCategory={selectedCategory}
                onClickInterest={onClickInterest}
              ></CategoryButton>
            ))}
          </More>
        )}
      </div>
    </CategoryListWrapper>
  );
}

export default CategoryList;
