import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import Modal from 'components/atoms/Modal';
import Joinform from 'components/molecules/Joinform';
import { postJoin } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { interestList } from 'resources/string';
import Styled from 'styled-components';

const selectedStyleList = [
  { backgroundColor: '#13E2DD', border: '1px solid #13E2DD', color: '#ffffff' },
  { backgroundColor: '#36C8F5', border: '1px solid #36C8F5', color: '#ffffff' },
  { backgroundColor: '#58E2FF', border: '1px solid #58E2FF', color: '#ffffff' },
  { backgroundColor: '#03B6CE', border: '1px solid #03B6CE', color: '#ffffff' },
  { backgroundColor: '#00BAFA', border: '1px solid #00BAFA', color: '#ffffff' },
];

function CJoin(): React.ReactElement {
  const history = useHistory();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
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
    gender: -1,
    interest: [''],
    marpolicy: false,
    policyMust: false,
  });
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const modalInterestHandler = (interest: string) => {
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
  };
  const modalBtnHandler = async () => {
    //여기서 api호출!!
    setUserData({ ...userData, interest: selectedInterest });
    const postData = {
      email: userData.email,
      password: userData.password,
      nickname: userData.nickname,
      interest: userData.interest,
      gender: userData.gender,
      marpolicy: userData.marpolicy,
    };
    const getData = await postJoin(postData);
    if (getData !== undefined) {
      if (getData.status === 201) {
        history.push('/');
      } else {
        alert(getData.message);
      }
    } else {
      alert('네트워크가 좋지 않습니다');
    }
  };
  const joinBtnHandler = () => {
    setIsInterestModalOpen(true);
  };

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
    <JoinWrap isButtonDisabled={isButtonDisabled} selectedInterest={selectedInterest}>
      <Label className="join__label">회원가입</Label>
      <Joinform
        setIsConditionMet={setIsConditionMet}
        isConditionMet={isConditionMet}
        userData={userData}
        setUserData={setUserData}
      />
      <Button className="join__button--fin" disabled={isButtonDisabled} onClick={joinBtnHandler}>
        가입 완료
      </Button>
      <Modal isOpen={isInterestModalOpen} setIsOpen={setIsInterestModalOpen} isBlur={true}>
        <div className="interestModal">
          <Label className="interestModal__label">관심있는 분야를 5개 선택해 주세요</Label>
          <div className="interestModal__btnContainer">
            {interestList.map((interest, id) => {
              return (
                <button
                  className="interestModal__button--interest"
                  key={id}
                  onClick={() => {
                    modalInterestHandler(interest);
                  }}
                  style={
                    //이부분 styled-component로 빼는방법 모르겠음
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
                </button>
              );
            })}
          </div>
          <Button
            className="interestModal__button--fin"
            disabled={selectedInterest.length > 0 ? false : true}
            onClick={modalBtnHandler}
          >
            <div>확인 ({selectedInterest.length}/5)</div>
          </Button>
        </div>
      </Modal>
    </JoinWrap>
  );
}

const JoinWrap = Styled.div<{ isButtonDisabled?: boolean; selectedInterest: string[] }>`
  display : flex;
  flex-direction : column;
  align-items : center;
  .join{
    &__label{
      font-size: 40px;
      font-weight: bold;
      margin-bottom : 20px;
    }
    &__button--fin{
      width: 406px;
      height: 60px;
      border-radius: 4px;
      font-size : 16px;
      font-weight : bold;     
      color : #ffffff; 
      margin-top : 60px;
      background-color : ${(props) => (props.isButtonDisabled ? '#dfdfdf' : undefined)};
      background-image : ${(props) =>
        !props.isButtonDisabled ? 'linear-gradient(to right, #36c8f5,#13e2dd )' : undefined};
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
        background-color : ${(props) => (props.selectedInterest.length > 0 ? '#0d0d0d' : '#dfdfdf')};
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
