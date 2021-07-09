import React, { useState, useRef, useEffect } from 'react';
import Styled from 'styled-components';
import CategoryButton from 'components/molecules/CategoryButton';
import moreIcon from 'assets/images/moreIcon.svg';
import nextIcon from 'assets/images/nextIcon.svg';

function CategoryList(): React.ReactElement {
  const totalSlide = 6;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLInputElement>(null);

  const nextSlide = () => {
    console.log(currentSlide);
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
      <CategoryButton className="fix" tag="전체" isEntire={true}></CategoryButton>
      <div className="hashtag__container">
        <div className="hashtags" ref={slideRef}>
          {hashtagList.map((tag, index) => (
            <CategoryButton key={index} tag={tag} isEntire={false}></CategoryButton>
          ))}
        </div>
      </div>
      <div className="shadow"></div>
      <img className="next" src={nextIcon} onClick={nextSlide} alt="" />
      <img src={moreIcon} alt="" />
    </SCategoryList>
  );
}

const SCategoryList = Styled.label`
  display: flex;
  width: 815px;
  align-items: center;
  margin: 0 auto 50px;
  position: relative;
  .hashtag__container{
    width: 645px;
    display: flex;
    overflow: hidden;
  }
  .hashtags {
    display: flex;
  }
  .shadow {
    position: absolute;
    width: 81px;
    height: 46px;
    background: linear-gradient(270deg, #FFFFFF 33.87%, rgba(255, 255, 255, 0) 94.35%);
    margin-right: -20px;
    right: 120px;
    } 
    .next {
      z-index:5;
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
