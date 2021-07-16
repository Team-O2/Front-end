import moreIcon from 'assets/images/moreButtonIcon.svg';
import moreClickedIcon from 'assets/images/moreIcon.svg';
import nextIcon from 'assets/images/nextIcon.svg';
import CategoryButton from 'components/molecules/CategoryButton';
import React, { useEffect, useRef, useState } from 'react';
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
  const [openMore, setOpenMore] = useState(false);
  const [moreClicked, setMoreClicked] = useState(false);

  const onClickOpenMore = () => {
    setOpenMore(!openMore);
    setMoreClicked(!moreClicked);
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
            {hashtagList.map((tag, index) => (
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
        <img className="next" src={nextIcon} onClick={nextSlide} alt="" />
        <img src={moreClicked ? moreClickedIcon : moreIcon} onClick={onClickOpenMore} alt="" />
      </div>

      <div className="more">
        {openMore && (
          <>
            <div className="more__box">
              {hashtagList.map((tag, index) => (
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

const hashtagList = [
  '건강 및 피트니스',
  '게임',
  '교육',
  '그래픽 및 디자인',
  '금융',
  '네비게이션',
  'K-pop',
  '뉴스, 신문',
  '데이트',
  '날씨',
  '출판, 도서',
  '뷰티',
  '라이프 스타일',
  '만화',
  '부동산 / 홈 인테리어',
  '사진 및 비디오',
  '쇼핑',
  '비즈니스',
  '생산성',
  '소셜 네트워킹',
  '스포츠',
  '어린이',
  '기타',
  '여행',
  '유틸리티',
  '음식 및 음료',
  '음악',
  '의료',
  'AR앱',
];
