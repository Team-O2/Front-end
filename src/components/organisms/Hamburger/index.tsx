import challengeIcon from 'assets/images/hamChallengeicon.svg';
import unChallengeIcon from 'assets/images/hamUnchallengeicon.svg';
import loginIcon from 'assets/images/loginIcon.svg';
import userImage from 'assets/images/userImage.png';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';
import Button from '../../atoms/Button/index';
import HamDropDown from '../../molecules/HamDropDown';

interface IHamDrop {
  name: string;
  link: string;
}

function Hamburger(): React.ReactElement {
  // user상태 :
  // 0: 비회원,
  // 1: 챌린지안하는유저 (기간은 신청기간 중)
  // 2: 챌린지 안하는 유저 (기간은 신청기간이 아님)
  // 3: 챌린지 하는 유저 (기간은 챌린지 중)
  // 4: 관리자
  const history = useHistory();
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [userData, setUserData] = useRecoilState(userState);

  const [userImg, setUserImg] = useState(userData ? userData.img : userImage); //유저&사진이 존재 하면 이미지변경
  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);
  // const [userStateNum, setUserState] = useState(1);
  const [userName, setUserName] = useState(userData?.nickname);
  const [challengeList, setChallengeList] = useState<IHamDrop[]>([{ name: '', link: '' }]);
  const indextoName = (index: number) => {
    switch (index) {
      case 1:
        return '1st';
      case 2:
        return `2nd`;
      case 3:
        return `3rd`;
      default:
        return `${index}th`;
    }
  };

  const getChallengeList = () => {
    console.log('시작');
    const arr: IHamDrop[] = [];
    if (userStatusData) {
      for (let i = 1; i <= userStatusData.progressGeneration; i++) {
        //TODO: 링크 연결
        arr.push({ name: indextoName(i), link: '/' });
      }
      if (userStatusData.registGeneration) {
        arr.push({ name: indextoName(userStatusData.registGeneration), link: '/challengeRegister' });
      }
    }
    setChallengeList(arr);
  };
  const logOutHandler = () => {
    setUserStatusData(null);
    setUserData(null);
    alert('로그아웃 되었습니다');
    history.push('/');
  };

  useEffect(() => {
    userData ? setUserName(userData.nickname) : setUserName('');
    if (userStatusData) {
      setUserState(userStatusData.userType);
      getChallengeList();
    } else {
      setUserState(0);
      getChallengeList();
    }
  }, [userStatusData]);

  return (
    <HamburgerWrap>
      <div className="top">
        <img className="top__image--usericon" src={userImg}></img>
        {(userStateNum === 0 || userStateNum === 4) && (
          <div className="top__subtitle top__subtitle--nologin">
            함께 성장하는 공간
            <br />
            창업가들이 마시는 산소
          </div>
        )}
        {userStateNum === 0 && (
          <Link to="/login">
            <Button className="loginBtn">
              <>
                <img className="loginBtn_icon" src={loginIcon}></img>
                <div className="loginBtn_login">로그인</div>
              </>
            </Button>
          </Link>
        )}
        {userStateNum === 4 && (
          <Link to="/">
            {/* TODO: 마이페이지 연결해야함 */}
            <Button className="loginBtn">
              <>
                <img className="loginBtn_icon" src={loginIcon}></img>
                <div className="loginBtn_login ">마이페이지</div>
              </>
            </Button>
          </Link>
        )}
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <div className="top__label--userName">
            <span>{userName}</span> CEO님
          </div>
        )}
        {userStateNum === 1 && (
          <Link to="/challengeRegister">
            <Button className="top__subtitle top__subtitle--unchallengeUser">
              <>
                <img className="top__icon--subtitle" src={unChallengeIcon}></img>
                <div style={{ color: '#36c8f5', fontWeight: 'bold' }}>1st Learn Myself 신청</div>
              </>
            </Button>
          </Link>
        )}
        {userStateNum === 2 && (
          <Button className="top__subtitle top__subtitle--challengeEndUser">
            <div style={{ color: '#03b6ce' }}>
              <span>Next Learn Myself</span> <br />
              Comming Soon...
            </div>
          </Button>
        )}
        {userStateNum === 3 && (
          <Link to="/write">
            <Button className="top__subtitle top__subtitle--unchallengeUser">
              <>
                <img className="top__icon--subtitle" src={challengeIcon}></img>
                <div style={{ color: '#03b6ce', fontWeight: 'bold' }}>오늘의 Learn Myself 작성</div>
              </>
            </Button>
          </Link>
        )}
      </div>
      <div className="middle">
        {(userStateNum === 0 || userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <>
            <HamDropDown
              isEnglish={true}
              title="Learn Myself"
              // TODO: 아이템리스트 1st, 2nd 이런거로 수정하고
              // 링크도 연결해줘야함
              itemList={challengeList}
            />
            <div style={{ marginBottom: '10px' }}></div>
            <Link to="/ShareTogether">
              <Button className="middle__button--title middle__button--engTitle">Share Together</Button>
            </Link>
            <div className="middle__line"></div>
            <Link to="/">
              {/* TODO: 공지사항 연결해야함 */}
              <Button className="middle__button--title">공지사항</Button>
            </Link>
          </>
        )}
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <Link to="/">
            {/* TODO: 마이페이지 연결해야함 */}
            <Button className="middle__button--title">나의 O2</Button>
          </Link>
        )}
        {userStateNum === 4 && (
          <>
            <Link to="/adminchallengeopen">
              <Button className="middle__button--title body3">챌린지 오픈하기</Button>
            </Link>
            <Link to="/">
              {/* TODO: 어느페이지로 이동하는지 물어보고 링크 연결해야함 */}
              <Button className="middle__button--title body3">챌린지 정보</Button>
            </Link>
            <div style={{ marginBottom: '10px' }}></div>
            <HamDropDown
              isEnglish={false}
              title="글 올리기"
              itemList={[
                { name: 'Share Together', link: '/adminwrite' },
                { name: '공지사항', link: '/adminwrite' },
              ]}
            />
          </>
        )}
        <div className="middle__padding--forHide">for Hide</div>
      </div>
      <div className="bottom">
        <div className="middle--forHide"></div>
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <Link to="/">
            {/* TODO: 세팅 페이지 연결해야함 */}
            <Button>
              <div className="bottom__button" style={{ color: '#3d3d3d' }}>
                설정
              </div>
            </Button>
          </Link>
        )}
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3 || userStateNum === 4) && (
          <Button onClick={logOutHandler}>
            <div className="bottom__button" style={{ color: '#8b8b8b', marginLeft: '8px', marginRight: '24px' }}>
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
  display : flex;
  flex-direction:column;
  animation : slideIn 0.5s;
  @keyframes slideIn {
    from {
      left : -282px;
    }
    to {
      left : 0%;
    }
  }

  span{
    font-weight : bold;
  }

  .top{
    background-color: #edfeff;
    height : 376px;
    flex:none;
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
      font-family: HomepageBaukasten;
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
    overflow : scroll;
    flex:1;
    &__button{
      &--title{
        color : #3d3d3d;
        margin : 10px 0;
        font-size : 16px;
        font-family : AppleSDGothicNeo;
        height : 20px;
        :hover {
          font-weight: bold;
        }
      }
      &--engTitle{
        font-family : HomepageBaukasten;
      }
    }
    &__line{
      width :164px;
      height: 1px;
      background-color: #c1c1c1;
      margin : 20px 0;
    }
    &--forHide{
      width : 100%;
      height : 50px;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
      position : absolute;
      top:-50px;
    }
    &__padding--forHide{
      line-height : 60px;
      color:rgba(0,0,0,0);
    }
  }
  .bottom{
    display: flex;
    height : 84px;
    flex:none;
    align-items:flex-start;
    justify-content:flex-end;
    position:relative;
    &__button{
      font-family: AppleSDGothicNeo;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-size : 16px;
    }
  }
`;

export default Hamburger;
