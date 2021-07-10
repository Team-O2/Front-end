import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from '../../atoms/Button';
import MoreIcon from '../../../assets/images/moreIcon.svg';

const interestList: string[] = [
  '건강 및 피트니스',
  '게임',
  '교육',
  '그래픽 및 디자인',
  '금융',
  'K-pop',
  '뉴스, 신문',
  '데이트',
  '날씨',
  '네비게이션',
  '출판,도서',
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
  'AR앱',
  '여행',
  '유틸리티',
  '음식 및 음료',
  '음악',
  '의료',
  '기타',
];
const selectedStyleList = [{ backgroundColor: '#6f6f6f', color: '#FFFFFF' }];

const ChallengeTag = () => {
  const [isOpenTag, setIsOpenTag] = useState(false);
  const [isClickTag, setIsClickTag] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);

  const [userData, setUserData] = useState({
    interest: [''],
  });
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const modalInterestHandler = (interest: string) => {
    if (selectedInterest.length === 0) {
      setSelectedInterest([interest]);
    }
    if (selectedInterest.length < 30) {
      if (!selectedInterest.includes(interest)) {
        setSelectedInterest([...selectedInterest, interest]);
      } else {
        setSelectedInterest(selectedInterest.filter((v) => v !== interest));
      }
    } else {
      if (selectedInterest.includes(interest)) {
        setSelectedInterest(selectedInterest.filter((v) => v !== interest));
      }
    }
  };

  const modalBtnHandler = () => {
    setUserData({ ...userData, interest: selectedInterest });
    setIsInterestModalOpen(false);
  };

  return (
    <STag>
      <div className="tag">
        해시태그
        <div>
          <Button
            onClick={() => {
              setIsOpenTag(!isOpenTag);
            }}
          >
            <img className="tag__moreIcon" src={MoreIcon} alt=""></img>
          </Button>
          {isOpenTag === true ? (
            interestList.map((interest, id) => {
              return (
                <button
                  className="tag__interest"
                  key={id}
                  onClick={() => {
                    modalInterestHandler(interest);
                    setIsClickTag(!isClickTag);
                    console.log(interest);
                    console.log('확인 ' + userData);
                  }}
                  style={interest == selectedInterest[0] ? selectedStyleList[0] : {}}
                >
                  {interest}
                </button>
              );
            })
          ) : (
            <div className="modal__base"></div>
          )}
        </div>
      </div>
    </STag>
  );
};

const STag = Styled.div`

.tag{
    width:844px;
    align-items:center;
    margin:0 auto;
    padding-top:60px;
    font-family: AppleSDGothicNeo;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
    letter-spacing: -0.5px;
    text-align: left;
    color: var(--colors-grayscale-6-f);

    &__interest{
        padding : 12px 30px;
        margin : 12px 5px;
        height : 48px;
        border-radius: 60px;
        border: solid 1px #8b8b8b;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.33;
        letter-spacing: -0.5px;
        color : #8b8b8b;
        background-color:#FFFFFF;
      }

    &__moreIcon{
  

    }


`;

export default ChallengeTag;
