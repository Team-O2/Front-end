import { getGeneration } from 'apis';
import { HamChallengeIcon, HamUnchallengeIcon, LoginIcon, UserImg } from 'assets/images';
import { Button } from 'components/atoms';
import { HamDropDown } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';

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
  const [userImage, setUserImage] = useState(userData ? userData.img : UserImg); //유저&사진이 존재 하면 이미지변경
  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);
  const [generationNum, setGenerationNum] = useState<{ registGeneration: number | null; progressGeneration: number }>();
  const [userName, setUserName] = useState(userData?.nickname);
  const [challengeList, setChallengeList] = useState<{ name: string; link: string }[]>([{ name: '', link: '' }]);
  const changeIndextoName = (index: number) => {
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
    const arr: { name: string; link: string }[] = [];
    if (generationNum) {
      for (let i = 1; i <= generationNum.progressGeneration; i++) {
        arr.push({ name: changeIndextoName(i), link: `/challenge/${i}` });
      }
      if (generationNum.registGeneration) {
        arr.push({ name: changeIndextoName(generationNum.registGeneration), link: '/challengeRegister' });
      }
    }
    setChallengeList(arr);
  };
  const handleLogOut = () => {
    setUserStatusData(null);
    setUserData(null);
    alert('로그아웃 되었습니다');
    history.push('/');
  };
  const getGenerationNum = async () => {
    //비로그인 유저일 시 런마셀 기수 가져오기
    const data = await getGeneration();
    setGenerationNum(data);
  };

  useEffect(() => {
    userData ? setUserName(userData.nickname) : setUserName('');
    if (userStatusData && userData) {
      setUserState(userStatusData.userType);
      setGenerationNum({
        progressGeneration: userStatusData.progressGeneration,
        registGeneration: userStatusData.registGeneration,
      });
      getChallengeList();
      setUserImage(userData.img);
    } else {
      setUserState(0);
      getGenerationNum();
      getChallengeList();
      setUserImage(userImage);
    }
  }, [userStatusData]);

  useEffect(() => {
    getChallengeList();
  }, [generationNum]);

  return (
    <HamburgerWrap>
      <div className="top">
        <img className="top__image--usericon" src={userImage}></img>
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
                <img className="loginBtn_icon" src={LoginIcon}></img>
                <div className="loginBtn_login">로그인</div>
              </>
            </Button>
          </Link>
        )}
        {userStateNum === 4 && (
          <Link to="/mypage">
            <Button className="loginBtn">
              <>
                <img className="loginBtn_icon" src={LoginIcon}></img>
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
          <Link to="/challenge/register">
            <Button className="top__subtitle top__subtitle--unchallengeUser">
              <>
                <img className="top__icon--subtitle" src={HamUnchallengeIcon}></img>
                <div style={{ color: '#36c8f5', fontWeight: 'bold' }}>
                  {userStatusData?.registGeneration && changeIndextoName(userStatusData.registGeneration)} Learn Myself
                  신청
                </div>
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
          <Link to="/challenge/write">
            <Button className="top__subtitle top__subtitle--unchallengeUser">
              <>
                <img className="top__icon--subtitle" src={HamChallengeIcon}></img>
                <div style={{ color: '#03b6ce', fontWeight: 'bold' }}>오늘의 Learn Myself 작성</div>
              </>
            </Button>
          </Link>
        )}
      </div>
      <div className="middle">
        {(userStateNum === 0 || userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <>
            <HamDropDown isEnglish={true} title="Learn Myself" itemList={challengeList} />
            <div style={{ marginBottom: '10px' }}></div>
            <Link to="/concert">
              <Button className="middle__button--title middle__button--engTitle">Share Together</Button>
            </Link>
            <div className="middle__line"></div>
            <Link to="/notice">
              <Button className="middle__button--title">공지사항</Button>
            </Link>
          </>
        )}
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <Link to="/mypage">
            <Button className="middle__button--title">나의 O2</Button>
          </Link>
        )}
        {userStateNum === 4 && (
          <>
            <Link to="/admin/challenge/open">
              <Button className="middle__button--title body3">챌린지 오픈하기</Button>
            </Link>
            <Link to="/admin/challenge/list">
              <Button className="middle__button--title body3">챌린지 정보</Button>
            </Link>
            <div style={{ marginBottom: '10px' }}></div>
            <HamDropDown
              isEnglish={false}
              title="글 올리기"
              itemList={[
                { name: 'Share Together', link: '/admin/write/sharetogether' },
                { name: '공지사항', link: '/admin/write/notice' },
              ]}
            />
          </>
        )}
        <div className="middle__padding--forHide">for Hide</div>
      </div>
      <div className="bottom">
        <div className="middle--forHide"></div>
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <Link to="/setting">
            <Button>
              <div className="bottom__button" style={{ color: '#3d3d3d' }}>
                설정
              </div>
            </Button>
          </Link>
        )}
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3 || userStateNum === 4) && (
          <Button onClick={handleLogOut}>
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
  display : flex;
  position : fixed;
  top :0;
  flex-direction:column;
  z-index : 999;
  box-shadow: 0 4px 40px 0 rgba(30, 37, 98, 0.1);
  background-color : #ffffff;
  width: 282px;
  height : 100vh;
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
    display : flex;
    flex:none;
    flex-direction : column;
    align-items : center;
    background-color: #edfeff;
    height : 376px;
    &__icon--subtitle{
      margin-right : 6px;
      width : 20px;
      height : 20px;
    }
    &__label{
      &--userName{
        margin-top : 28px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color : #3d3d3d;
        font-size: 16px;
        font-stretch: normal;
        font-weight: normal;
        font-style: normal;
      }
    }
    &__image{
      &--usericon{
        margin : 120px 91px 0 91px;
        border : 1px solid #dfdfdf;
        border-radius:50px;
        width : 100px;
        height : 100px;
        object-fit:cover;
      }
    }
    &__subtitle{
      line-height: 1.25;
      letter-spacing: normal;
      font-family: HomepageBaukasten;
      font-size: 16px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
      &--nologin{
        margin-top : 16px;
        margin-bottom : 30px;
        -webkit-background-clip: text;
        background-clip: text;
        background-image:linear-gradient(to right, #34caf4, #13e2dd);
        text-align : center;
        line-height: 1.5;
        letter-spacing: -0.5px;
        -webkit-text-fill-color: transparent;
      }
      &--unchallengeUser{
        display : flex;
        align-items : center;
        margin-top : 30px;
        line-height: 1.5;
        letter-spacing: -0.5px;
      }
      &--challengeEndUser{
        margin-top : 30px;
      }
    }
  }

  .loginBtn{
      display : flex;
      align-items : center;
      justify-content : center;
      width : 100%;
      &_icon{
        margin-right : 6px;
        width : 20px;
        height : 20px;
      }
      &_login{
        height: 18px;
        line-height: 1.38;
        letter-spacing: -0.5px;
        color : #3d3d3d;
        font-size : 16px;
        font-stretch: normal;
        font-weight: bold;
        font-style: normal;
      }
  }
  .middle{
    display : flex;
    flex:1;
    flex-direction : column;
    align-items : center;
    padding-top : 70px;
    overflow : scroll;
    ::-webkit-scrollbar {
      width: 0.8rem;
      height: 1rem;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      box-sizing: border-box;
      border-radius: 0.5rem;
      background: #c1c1c1;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #c1c1c1;
    }
    &__button{
      &--title{
        margin : 10px 0;
        height : 20px;
        color : #3d3d3d;
        font-family : AppleSDGothicNeo;
        font-size : 16px;
        :hover {
          font-weight: bold;
        }
      }
      &--engTitle{
        font-family : HomepageBaukasten;
      }
    }
    &__line{
      margin : 20px 0;
      background-color: #c1c1c1;
      width :164px;
      height: 1px;
    }
    &--forHide{
      position : absolute;
      top:-50px;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
      width : 100%;
      height : 50px;
    }
    &__padding--forHide{
      line-height : 60px;
      color:rgba(0,0,0,0);
    }
  }
  .bottom{
    display: flex;
    position:relative;
    flex:none;
    align-items:flex-start;
    justify-content:flex-end;
    height : 84px;
    &__button{
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: AppleSDGothicNeo;
      font-size: 16px;
      font-size : 16px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    }
  }
`;

export default Hamburger;
