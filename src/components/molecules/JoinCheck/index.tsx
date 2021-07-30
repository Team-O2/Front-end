import { checkall_off, checkall_on, checkOff, checkOn, modalClose } from 'assets/images';
import { Button, CheckBox, Modal } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

interface userDataType {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  gender: number;
  interest: Array<string>;
  marpolicy: boolean;
  policyMust: boolean;
}

export interface IProps {
  className?: string;
  setUserData: (value: userDataType) => void;
  userData: userDataType;
}

function JoinCheck({ setUserData, userData }: IProps): React.ReactElement {
  const [checkAll, setCheckAll] = useState(false);
  const [isChecked, setIsChecked] = useState({
    check1: false,
    check2: false,
    check3: false,
  });
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const handleCheckAll = (): void => {
    if (!checkAll) {
      setCheckAll(true);
      setIsChecked({
        check1: true,
        check2: true,
        check3: true,
      });
    }
    if (checkAll) {
      setCheckAll(false);
      setIsChecked({
        check1: false,
        check2: false,
        check3: false,
      });
    }
  };
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case 'policy1':
        setIsChecked({
          ...isChecked,
          check1: !isChecked.check1,
        });
        break;
      case 'policy2':
        setIsChecked({
          ...isChecked,
          check2: !isChecked.check2,
        });
        break;

      case 'policy3':
        setIsChecked({
          ...isChecked,
          check3: !isChecked.check3,
        });
        break;
    }
  };
  const modalHandler = (): void => {
    setIsPolicyOpen(!isPolicyOpen);
  };

  useEffect(() => {
    setUserData({ ...userData, marpolicy: isChecked.check3 });
  }, [isChecked.check3]);

  useEffect(() => {
    if (isChecked.check1 && isChecked.check2) {
      setUserData({ ...userData, policyMust: true });
    } else {
      setUserData({ ...userData, policyMust: false });
    }
  }, [isChecked.check1, isChecked.check2]);

  interface Policy {
    title: string;
    content: string;
  }
  const policyList: Policy[] = [
    {
      //리스트 인덱스에 따라 내용다르게,
      //content 꾸미는건 내용 확정돼서 나오면 그때 수정할 것
      title: '서비스 이용약관',
      content: `*제1조(목적)

    본 약관은 디긴 투자정보서비스 (이하 회사라고 합니다)가 제공하는 인터넷 기반의 모바일 어플리케이션 디긴(DIGIN) 서비스의 이용과 관련하여 회원과 회사 간에 필요한 사항을 규정하기 위함을 목적으로 합니다.
    
    *제2조(용어의 정의)
    
    ① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
    1. “서비스”라 함은 회사가 개발하여 인터넷을 통하여 서비스하고 있는 서비스 및 기타 서비스 일체를 의미합니다.
    2. “회원”이라 함은 회사가 운영하는 사이트에 접속하여 본 약관에 동의하고 회원 가입을 한 자로서, 회사와 서비스 이용 계약을 체결하고 서비스 이용 아이디와 비밀번호를 부여 받아 서비스를 이용하는 고객을 말합니다.
    3. "아이디"라 함은 회원의 식별과 회원의 서비스 이용을 위하여 "회원"이 가입 시 사용한 이메일 주소를 말한다.
    ② 본 약관에서 사용하는 용어의 정의에 대하여 본 조 제1항에서 정하는 것을 제외하고는 관계법령 및 서비스별 정책에서 정하는 바에 의하며, 관계법령과 서비스별 정책에서 정하지 아니한 것은 일반적인 상관례에 의합니다.
    
    *제3조(약관의 게시와 개정)
    
    ① 회사는 본 약관의 내용을 회원이 쉽게 확인할 수 있도록 서비스 내 또는 연결화면을 통하여 게시합니다.
    ① 회사는 본 약관의 내용을 회원이 쉽게 확인할 수 있도록 서비스 내 또는 연결화면을 통하여 게시합니다.
    ① 회사는 본 약관의 내용을 회원이 쉽게 확인할 수 있도록 서비스 내 또는 연결화면을 통하여 게시합니다.
    `,
    },
  ];

  return (
    <JoinCheckWrap>
      <div>
        <div className="flex" style={{ margin: '16px 0 0 0' }}>
          <CheckBox className="check_icon1" checked={checkAll} onChange={handleCheckAll} id="policyAll" />
          <label htmlFor="policyAll" className="policy_exp1">
            {checkAll ? (
              <img src={checkall_on} className="checkAllImg" />
            ) : (
              <img src={checkall_off} className="checkAllImg" />
            )}
            전체 동의 (선택 정보 포함)
          </label>
        </div>
        <div className="line"></div>
        <div className="policy_check">
          <div className="flex">
            <CheckBox
              className="check_icon2"
              checked={isChecked.check1}
              name="policy1"
              onChange={handleCheck}
              id="policy1"
            />
            <label htmlFor="policy1" className="policy_exp2">
              {isChecked.check1 ? (
                <img src={checkOn} className="checkimg" />
              ) : (
                <img src={checkOff} className="checkimg" />
              )}
              (필수) 서비스 이용약관 동의
            </label>
          </div>
          <Button className="btn_more" onClick={modalHandler}>
            보기
          </Button>
        </div>
        <div className="policy_check">
          <div className="flex">
            <CheckBox
              className="check_icon2"
              checked={isChecked.check2}
              name="policy2"
              onChange={handleCheck}
              id="policy2"
            />
            <label htmlFor="policy2" className="policy_exp2">
              {isChecked.check2 ? (
                <img src={checkOn} className="checkimg" />
              ) : (
                <img src={checkOff} className="checkimg" />
              )}
              (필수) 개인정보 수집 이용 동의
            </label>
          </div>
          <Button className="btn_more" onClick={modalHandler}>
            보기
          </Button>
        </div>
        <div className="policy_check">
          <div className="flex">
            <CheckBox
              className="check_icon2"
              checked={isChecked.check3}
              name="policy3"
              onChange={handleCheck}
              id="policy3"
            />
            <label htmlFor="policy3" className="policy_exp2">
              {isChecked.check3 ? (
                <img src={checkOn} className="checkimg" />
              ) : (
                <img src={checkOff} className="checkimg" />
              )}
              (선택) 광고성 정보 수신 및 마케팅 활용 동의
            </label>
          </div>
          <Button className="btn_more" onClick={modalHandler}>
            보기
          </Button>
        </div>
      </div>
      <Modal isOpen={isPolicyOpen} setIsOpen={setIsPolicyOpen} isBlur={true}>
        <div className="modal__container">
          <Button
            onClick={() => {
              setIsPolicyOpen(false);
            }}
          >
            <img className="modal__button--close" src={modalClose}></img>
          </Button>
          <div className="modal__title">{policyList[0].title}</div>
          <p className="modal__content">{policyList[0].content}</p>
        </div>
      </Modal>
    </JoinCheckWrap>
  );
}

const JoinCheckWrap = Styled.div`
display : flex;
flex-direction: column;
align-items : center;
.modal{
  &__container{
    position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    margin : auto;
    width : 600px;
    height : 730px;
    background-color : #ffffff;
    border-radius: 16px;
    padding : 50px 50px 40px 40px;
    display : flex;
    flex-direction : column;
    align-items : center;
  }
  &__title{
    margin-bottom : 40px;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: left;
    color : #0d0d0d;
  }
  &__content{
    font-size: 16px;
    height : 100%;
    overflow: scroll;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.5px;
    text-align: left;
    color: #525252;
  }
  &__button--close{
    width : 16px;
    height : 16px;
    position : absolute;
    right : 44px;
    top : 54px;
  }
}
.checkAllImg{
  width : 20px;
  height : 20px;
  margin-right : 16px;
}
.checkimg{
  width: 14.7px;
  height: 10.1px;
  margin-left : 3.7px;
  margin-right : 17px;
}
.check_icon2, .check_icon1{
  display:none;
}

.line{
  width: 406px;
  height: 2px;
  background-color: #c4c4c4;
  margin-top : 18px;
}
 .flex{
    display : flex;
    align-items : center;
 }
 .policy_check{
    margin-top : 19px;
    width : 406px;
    display : flex;
    justify-content : space-between;
    align-items : center;
 }
 .check_icon1{
    width : 22px;
    height : 22px;
    margin-right : 16px
 }
 .check_icon2{
    width : 22px;
    height : 22px;
    margin-right : 16px
 }
 .policy_exp1{
    font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.5px;
  display : flex;
    align-items : center;
 }
 .policy_exp2{
    font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.5px;

  vertical-align : center;
  display : flex;
    align-items : center;
}
.btn_more{
    font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color : #a5a5a5;
}

`;

export default JoinCheck;
