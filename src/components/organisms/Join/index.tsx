import React, { useContext, useState, useEffect } from 'react';
import Styled from 'styled-components';
import Joinform from '../../molecules/Joinform/index';
import Label from 'components/atoms/Label';
import Button from 'components/atoms/Button';
import Modal from 'components/atoms/Modal';

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
const selectedStyleList = [
  { backgroundColor: '#13E2DD', border: '1px solid #13E2DD', color: '#ffffff' },
  { backgroundColor: '#36C8F5', border: '1px solid #36C8F5', color: '#ffffff' },
  { backgroundColor: '#58E2FF', border: '1px solid #58E2FF', color: '#ffffff' },
  { backgroundColor: '#03B6CE', border: '1px solid #03B6CE', color: '#ffffff' },
  { backgroundColor: '#00BAFA', border: '1px solid #00BAFA', color: '#ffffff' },
];

function CJoin(): React.ReactElement {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(true);
  const [isConditionMet, setIsConditionMet] = useState({
    email: false,
    password: false,
    passwordCheck: false,
    nickname: false,
    interest: false,
    policyMust: false,
    gender: false,
  });
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    gender: 'unchecked',
    interest: [''],
    marpolicy: false,
    policyMust: false,
  });
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    if (
      isConditionMet.email &&
      isConditionMet.password &&
      isConditionMet.passwordCheck &&
      isConditionMet.nickname &&
      isConditionMet.gender &&
      isConditionMet.policyMust
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isConditionMet]);

  return (
    <JoinWrap>
      <Label className="join_label" name="회원가입"></Label>
      <Joinform
        setIsConditionMet={setIsConditionMet}
        isConditionMet={isConditionMet}
        userData={userData}
        setUserData={setUserData}
      />
      <Button
        className="join_button"
        disabled={isButtonDisabled}
        style={!isButtonDisabled ? { backgroundImage: 'linear-gradient(to right, #36c8f5,#13e2dd )' } : {}}
        onClick={() => {
          setIsInterestModalOpen(true);
        }}
      >
        가입 완료
      </Button>
      <Modal isOpen={isInterestModalOpen} setIsOpen={setIsInterestModalOpen} isBlur={true}>
        <div className="interestModal">
          <Label className="interestModal__label" name="관심있는 분야를 5개 선택해 주세요"></Label>
          <div className="interestModal__btnContainer">
            {interestList.map((interest, id) => {
              return (
                <Button
                  className="interestModal__button--interest"
                  key={id}
                  value={interest}
                  onClick={() => {
                    if (selectedInterest.length === 0) {
                      setSelectedInterest([interest]);
                    }
                    if (selectedInterest.length < 5) {
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
                  }}
                  style={
                    interest == selectedInterest[0]
                      ? selectedStyleList[0]
                      : interest == selectedInterest[1]
                      ? selectedStyleList[1]
                      : interest == selectedInterest[2]
                      ? selectedStyleList[2]
                      : interest == selectedInterest[3]
                      ? selectedStyleList[3]
                      : interest == selectedInterest[4]
                      ? selectedStyleList[4]
                      : {}
                  }
                >
                  {interest}
                </Button>
              );
            })}
          </div>
          <Button
            className="interestModal__button--fin"
            disabled={selectedInterest.length > 0 ? false : true}
            style={selectedInterest.length > 0 ? { backgroundColor: '#0d0d0d' } : { backgroundColor: '#dfdfdf' }}
            onClick={() => {
              setUserData({ ...userData, interest: selectedInterest });
              setIsInterestModalOpen(false);
            }}
          >
            <div>확인 ({selectedInterest.length}/5)</div>
          </Button>
        </div>
      </Modal>
    </JoinWrap>
  );
}

const JoinWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  .join{
    &_label{
      font-size: 40px;
      font-weight: bold;
      margin-bottom : 20px;
    }
    &_button{
      width: 406px;
      height: 60px;
      background-color : #dfdfdf;
      border-radius: 4px;
      font-size : 16px;
      font-weight : bold;     
      color : #ffffff; 
      margin-top : 60px;
    }
  }
  .interestModal{
    position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    margin : auto;
    width : 1030px;
    height : 614px;
    border-radius: 16px;
    padding: 40px 100px;
    box-shadow: -4px 11px 24px 0 rgba(13, 12, 63, 0.1);
    background-color : #ffffff;
    display : flex;
    flex-direction : column;
    align-items : center;
    
    &__label{
      font-size: 28px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: -0.5px;
      color : #0d0d0d;
      margin-bottom : 38px;
    }
    &__button{
      &--interest{
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
      }
      &--fin{
        width: 406px;
        height: 60px;
        padding: 19px 172px 19px 170px;
        border-radius: 4px;
        background-color : #dfdfdf; 
        font-size: 16px;
        font-weight: bold;
        line-height: 1.38;
        letter-spacing: -0.5px;
        color : #ffffff;
        margin-top : 38px;
      }
    }
    &__btnContainer{
      display : flex;
      flex-direction : row;
      justify-content : center;
      flex-wrap: wrap;

    }
  }
`;

export default CJoin;
