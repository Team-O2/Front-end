import { MoreClickedIcon, MoreIcon, NextIcon, PrevIcon } from 'assets/images';
import { CategoryButton } from 'components/molecules';
import React, { useEffect, useRef, useState } from 'react';
import { interestList } from 'resources/string';
import {
  CategoryListWrapper,
  GradientLeft,
  Hashtag,
  HashtagContainer,
  Main,
  More,
  NextButton,
  PrevButton,
  Shadow,
} from './style';

interface IProps {
  reRenderCategory?: (interest: string) => void;
  selectedCategory?: string;
  categoryChange?: () => void;
}
function CategoryList({ reRenderCategory, selectedCategory, categoryChange }: IProps): React.ReactElement {
  const totalSlide = 6;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(!currentSlide);
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
  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const handleNext = () => {
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
  useEffect(() => {
    if ((localVisible && currentSlide) || (localVisible && !currentSlide)) {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 500);
    }
    setLocalVisible(!currentSlide);
  }, [localVisible, currentSlide]);

  return (
    <CategoryListWrapper>
      <Main>
        {(!localVisible || animation) && (
          <PrevButton disappear={!!currentSlide} src={PrevIcon} onClick={handlePrev} alt="" />
        )}
        {(!localVisible || animation) && <GradientLeft disappear={!!currentSlide}></GradientLeft>}
        <HashtagContainer disappear={!!currentSlide}>
          <Hashtag ref={slideRef}>
            <CategoryButton
              tag="전체"
              isMore={false}
              selectedCategory={selectedCategory}
              onClickInterest={onClickInterest}
            ></CategoryButton>
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
          <img src={NextIcon} onClick={handleNext} alt="" />
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
