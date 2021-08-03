import { getGeneration } from 'apis';
import { HamChallengeIcon, HamUnchallengeIcon, LoginIcon, UserImg } from 'assets/images';
import { Button } from 'components/atoms';
import { HamDropDown } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';
import {
  HamburgerContainer,
  BottomContainer,
  ChallengeEndUser,
  EngTitleBtn,
  Hide,
  Line,
  LoginButton,
  LoginExp,
  LoginImage,
  LogOutBtn,
  MiddleContainer,
  NoLoginSubTitle,
  Padding,
  SettingBtn,
  SubTitleImage,
  TitleBtn,
  TopContainer,
  UnChallengeUserSubTitle,
  UserIcon,
  UserNameLabel,
} from './style';

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
    <HamburgerContainer>
      <TopContainer>
        <UserIcon src={userImage} />
        {(userStateNum === 0 || userStateNum === 4) && (
          <NoLoginSubTitle>
            함께 성장하는 공간
            <br />
            창업가들이 마시는 산소
          </NoLoginSubTitle>
        )}
        {userStateNum === 0 && (
          <Link to="/login">
            <LoginButton>
              <>
                <LoginImage src={LoginIcon}></LoginImage>
                <LoginExp>로그인</LoginExp>
              </>
            </LoginButton>
          </Link>
        )}
        {userStateNum === 4 && (
          <Link to="/mypage">
            <LoginButton>
              <>
                <LoginImage src={LoginIcon}></LoginImage>
                <LoginExp>마이페이지</LoginExp>
              </>
            </LoginButton>
          </Link>
        )}
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <UserNameLabel>
            <span>{userName}</span> CEO님
          </UserNameLabel>
        )}
        {userStateNum === 1 && (
          <Link to="/challenge/register">
            <UnChallengeUserSubTitle color="#36c8f5">
              <>
                <SubTitleImage src={HamUnchallengeIcon}></SubTitleImage>
                {userStatusData?.registGeneration && changeIndextoName(userStatusData.registGeneration)} Learn Myself
                신청
              </>
            </UnChallengeUserSubTitle>
          </Link>
        )}
        {userStateNum === 2 && (
          <ChallengeEndUser>
            <div>
              <span>Next Learn Myself</span> <br />
              Comming Soon...
            </div>
          </ChallengeEndUser>
        )}
        {userStateNum === 3 && (
          <Link to="/challenge/write">
            <UnChallengeUserSubTitle color="#03b6ce">
              <>
                <SubTitleImage src={HamChallengeIcon}></SubTitleImage>
                오늘의 Learn Myself 작성
              </>
            </UnChallengeUserSubTitle>
          </Link>
        )}
      </TopContainer>
      <MiddleContainer>
        {(userStateNum === 0 || userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <>
            <HamDropDown isEnglish={true} title="Learn Myself" itemList={challengeList} />
            <div style={{ marginBottom: '10px' }}></div>
            <Link to="/concert">
              <EngTitleBtn>Share Together</EngTitleBtn>
            </Link>
            <Line />
            <Link to="/notice">
              <TitleBtn>공지사항</TitleBtn>
            </Link>
          </>
        )}
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <Link to="/mypage">
            <TitleBtn>나의 O2</TitleBtn>
          </Link>
        )}
        {userStateNum === 4 && (
          <>
            <Link to="/admin/challenge/open">
              <TitleBtn>챌린지 오픈하기</TitleBtn>
            </Link>
            <Link to="/admin/challenge/list">
              <TitleBtn>챌린지 정보</TitleBtn>
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
        <Padding>for Hide</Padding>
      </MiddleContainer>
      <BottomContainer>
        <Hide />
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3) && (
          <Link to="/setting">
            <Button>
              <SettingBtn>설정</SettingBtn>
            </Button>
          </Link>
        )}
        {(userStateNum === 1 || userStateNum === 2 || userStateNum === 3 || userStateNum === 4) && (
          <Button onClick={handleLogOut}>
            <LogOutBtn>로그아웃</LogOutBtn>
          </Button>
        )}
      </BottomContainer>
    </HamburgerContainer>
  );
}

export default Hamburger;
