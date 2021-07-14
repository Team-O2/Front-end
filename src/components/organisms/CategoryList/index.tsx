import moreIcon from 'assets/images/moreIcon.svg';
import moreClickedIcon from 'assets/images/more_filled.svg';
import nextIcon from 'assets/images/nextIcon.svg';
import CategoryButton from 'components/molecules/CategoryButton';
import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components';
interface IProps {
  reRender?: (interest: string) => void;
}
function CategoryList({ reRender }: IProps): React.ReactElement {
  const totalSlide = 6;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLInputElement>(null);
  const [openMore, setOpenMore] = useState(false);
  const [moreClicked, setMoreClicked] = useState(false);
  const [interest, setInterest] = useState('');

  const onClickOpenMore = () => {
    setOpenMore(!openMore);
    setMoreClicked(!moreClicked);
  };
  const onClickInterest = (newInterest: any) => {
    setInterest(newInterest);
    reRender && reRender(interest);
  };

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
      <div className="main">
        <CategoryButton className="fix" tag="전체"></CategoryButton>
        <div className="hashtag__container">
          <div className="hashtags" ref={slideRef}>
            {hashtagList.map((tag, index) => (
              <CategoryButton isMore={false} key={index} tag={tag}></CategoryButton>
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
                <CategoryButton key={index} tag={tag} onClickInterest={onClickInterest} isMore={true}></CategoryButton>
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
  flex-direction: column;
  align-items: center;
  margin: 0 auto 50px;
  position: relative;
  .main {
    width: 815px;
    display: flex;
    align-items: center;
  }
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
  .more__box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 844px;
    height: 328px;
    margin-top: 20px;
    padding: 25px 0;
    border-radius: 16px;
    box-shadow: 0 0 15px 0 rgba(23, 22, 91, 0.08);
    border: solid 1px rgba(223, 223, 223, 0.5);
    
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
