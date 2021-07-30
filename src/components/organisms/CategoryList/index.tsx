import { MoreClickedIcon, MoreIcon, NextIcon } from 'assets/images';
import { CategoryButton } from 'components/molecules';
import React, { useEffect, useRef, useState } from 'react';
import { interestList } from 'resources/string';
import Styled from 'styled-components';

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
    <SCategoryList>
      <div className="main">
        <CategoryButton
          tag="전체"
          isMore={false}
          selectedCategory={selectedCategory}
          onClickInterest={onClickInterest}
        ></CategoryButton>
        <div className="hashtag__container">
          <div className="hashtags" ref={slideRef}>
            {interestList.map((tag, index) => (
              <CategoryButton
                key={index}
                tag={tag}
                isMore={false}
                selectedCategory={selectedCategory}
                onClickInterest={onClickInterest}
              ></CategoryButton>
            ))}
          </div>
        </div>
        <div className="shadow"></div>
        <img className="next" src={NextIcon} onClick={nextSlide} alt="" />
        <img src={isMoreClicked ? MoreClickedIcon : MoreIcon} onClick={onClickOpenMore} alt="" />
      </div>

      <div className="more">
        {isOpenMore && (
          <>
            <div className="more__box">
              {interestList.map((tag, index) => (
                <CategoryButton
                  key={index}
                  tag={tag}
                  isMore={true}
                  selectedCategory={selectedCategory}
                  onClickInterest={onClickInterest}
                ></CategoryButton>
              ))}
            </div>
          </>
        )}
      </div>
    </SCategoryList>
  );
}

const SCategoryList = Styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 50px;
  .main {
    display: flex;
    align-items: center;
    width: 815px;
  }
  .hashtag__container{
    display: flex;
    width: 645px;
    overflow: hidden;
  }
  .hashtags {
    display: flex;
  }
  .shadow {
    position: absolute;
    right: 120px;
    margin-right: -20px;
    background: linear-gradient(270deg, #FFFFFF 33.87%, rgba(255, 255, 255, 0) 94.35%);
    width: 81px;
    height: 46px;
  } 
  .next {
    z-index:5;
  }
  .more__box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    border: solid 1px rgba(223, 223, 223, 0.5);
    border-radius: 16px;
    box-shadow: 0 0 15px 0 rgba(23, 22, 91, 0.08);
    padding: 25px 25px;
    width: 844px;
    height: 328px;
    
  }
`;

export default CategoryList;
