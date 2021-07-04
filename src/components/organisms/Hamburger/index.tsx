import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from '../../atoms/Button/index';
import HamDropDown from '../../molecules/HamDropDown';

import userImage from 'assets/images/userImage.png';
import loginIcon from 'assets/images/loginIcon.svg';
import challengeIcon from 'assets/images/hamChallengeicon.svg';
import unChallengeIcon from 'assets/images/hamUnchallengeicon.svg';

export interface IProps {
  className?: string;
  show?: boolean;
  ref?: React.MutableRefObject<undefined>;
}

function Hamburger({ ...props }: IProps): React.ReactElement {
  //user상태 :
  // 0: 비회원,
  // 1: 챌린지안하는유저,
  // 2: 챌린지하는유저,
  // 3: 챌린지하는유저&챌린지종료,
  // 4: 관리자
  const { show } = props;
  const [userImg, setUserImg] = useState(userImage); //유저&사진이 존재 하면 이미지변경
  const [userState, setUserState] = useState(4);
  const [userName, setUserName] = useState('이은솔');

  return (
    <HamburgerWrap>
      <div className="top">
        <img className="top__image--usericon" src={userImg}></img>
        {(userState === 0 || userState === 4) && (
          <div className="top__subtitle top__subtitle--nologin">
            함께 성장하는 공간
            <br />
            창업가들이 마시는 산소
          </div>
        )}
        {userState === 0 && (
          <Button className="loginBtn">
            <>
              <img className="loginBtn_icon" src={loginIcon}></img>
              <div className="loginBtn_login">로그인</div>
            </>
          </Button>
        )}
        {userState === 4 && (
          <Button className="loginBtn">
            <>
              <img className="loginBtn_icon" src={loginIcon}></img>
              <div className="loginBtn_login">마이페이지</div>
            </>
          </Button>
        )}
        {(userState === 1 || userState === 2 || userState === 3) && (
          <div className="top__label--userName">
            <span>{userName}</span> CEO님
          </div>
        )}
        {userState === 1 && (
          <Button className="top__subtitle top__subtitle--unchallengeUser">
            <>
              <img className="top__icon--subtitle" src={unChallengeIcon}></img>
              <div style={{ color: '#36c8f5' }}>1st Learn Myself 신청</div>
            </>
          </Button>
        )}
        {userState === 2 && (
          <Button className="top__subtitle top__subtitle--unchallengeUser">
            <>
              <img className="top__icon--subtitle" src={challengeIcon}></img>
              <div style={{ color: '#03b6ce' }}>오늘의 Learn Myself 작성</div>
            </>
          </Button>
        )}
        {userState === 3 && (
          <Button className="top__subtitle top__subtitle--challengeEndUser">
            <div style={{ color: '#03b6ce' }}>
              <span>Next Learn Myself</span> <br />
              Comming Soon...
            </div>
          </Button>
        )}
      </div>
      <div className="middle">
        {(userState === 0 || userState === 1 || userState === 2 || userState === 3) && (
          <>
            <HamDropDown title="Learn Myself" list={['1st', '2nd', '3rd', '4st', '5th', '6th', '7th', '8th', '9th']} />
            <div style={{ marginBottom: '10px' }}></div>
            <Button className="middle__button--title">Share Together</Button>
          </>
        )}
        {userState === 2 && (
          <>
            <div style={{ marginBottom: '10px' }}></div>
            <HamDropDown title="아카이빙" list={['1st', '2nd', '3rd']} />
          </>
        )}
        {(userState === 0 || userState === 1 || userState === 2 || userState === 3) && (
          <>
            <div className="middle__line"></div>
            <Button className="middle__button--title">공지사항</Button>
          </>
        )}
        {(userState === 1 || userState === 2 || userState === 3) && (
          <Button className="middle__button--title">나의 O2</Button>
        )}
        {userState === 4 && (
          <>
            <Button className="middle__button--title">챌린지 오픈하기</Button>
            <Button className="middle__button--title">챌린지 정보</Button>
            <div style={{ marginBottom: '10px' }}></div>
            <HamDropDown title="글 올리기" list={['Share Together', '공지사항']} />
          </>
        )}
      </div>
      <div className="bottom">
        {(userState === 1 || userState === 2 || userState === 3) && (
          <Button>
            <div className="bottom__button" style={{ color: '#3d3d3d' }}>
              설정
            </div>
          </Button>
        )}
        {(userState === 1 || userState === 2 || userState === 3 || userState === 4) && (
          <Button>
            <div className="bottom__button" style={{ color: '#8b8b8b', marginLeft: '8px' }}>
              로그아웃
            </div>
          </Button>
        )}
      </div>
    </HamburgerWrap>
  );
}

const HamburgerWrap = Styled.div`
  position : fixed;
  top :0;
  width: 282px;
  height : 100vh;
  box-shadow: 0 4px 40px 0 rgba(30, 37, 98, 0.1);
  background-color : #ffffff;
  z-index : 999;

  span{
    font-weight : bold;
  }

  .top{
    background-color: #edfeff;
    height : 376px;
    display : flex;
    flex-direction : column;
    align-items : center;
    &__icon--subtitle{
      width : 20px;
      height : 20px;
      margin-right : 6px;
    }
    &__label{
      &--userName{
        margin-top : 28px;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color : #3d3d3d;
      }
    }
    &__image{
      &--usericon{
        margin : 120px 91px 0 91px;
        width : 100px;
        height : 100px;
        object-fit:cover;
        border-radius:50px;
        border : 1px solid #dfdfdf;
      }
    }
    &__subtitle{
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      &--nologin{
        margin-top : 16px;
        margin-bottom : 30px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        text-align : center;
        background-image:linear-gradient(to right, #34caf4, #13e2dd);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &--unchallengeUser{
        display : flex;
        align-items : center;
        line-height: 1.5;
        letter-spacing: -0.5px;
        margin-top : 30px;
      }
      &--challengeEndUser{
        margin-top : 30px;
      }
    }
  }

  .loginBtn{
      display : flex;
      align-items : center;
      width : 100%;
      justify-content : center;
      &_icon{
        width : 20px;
        height : 20px;
        margin-right : 6px;
      }
      &_login{
        height: 18px;
        font-size : 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: -0.5px;
        color : #3d3d3d;
      }
  }
  .middle{
    display : flex;
    flex-direction : column;
    align-items : center;
    padding-top : 70px;
    /* height : 100%; */
    position : relative;

    &__button--title{
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      color : #3d3d3d;
      margin : 10px 0;
      :hover {
        font-weight: bold;
      }
    }
    &__line{
      width :164px;
      height: 1px;
      background-color: #c1c1c1;
      margin : 20px 0;
    }
  }
  .bottom{
    display: flex;
    position : absolute;
    bottom : 50px;
    right : 30px;
    &__button{
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.5px;
    }
  }
`;

export default Hamburger;
