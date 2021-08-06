import { keyframes } from '@emotion/react';
import { getGeneration } from 'apis';
import {
  CommunicationKingFillIcon,
  Concert1Img,
  Concert2Img,
  EmpathizingFillIcon,
  GrowingTogetherFillIcon,
  LandingBackImg,
  MainCard1Img,
  MainCard2Img,
  MainCard3Img,
  MainCard4Img,
  NaturalBornO2FillIcon,
  ReadyForGrowFillIcon,
  ShyEmailFillIcon,
  SpeakerBadge1Img,
  SpeakerBadge2Img,
  SpeakerBadge3Img,
  UsefulLearnMyselfFillIcon,
  WelcomeToO2FillIcon,
} from 'assets/images';
import { BadgeCard } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import {
  BadgeWrapper,
  ChallengeBtn,
  ChallengeCard,
  ChallengeCardWrapper,
  ChallengeWrapper,
  ConcertContent,
  ConcertExpContainer1,
  ConcertExpContainer2,
  ConcertExpType,
  ConcertImage1,
  ConcertImage2,
  ConcertTitle,
  ConcertWrapper,
  ConcertWrapper1,
  ConcertWrapper2,
  LinkBtn,
  LinkCardWrapper,
  LinkExp,
  LinkTitle,
  LinkWrapper,
  MiddleExp,
  MiddleSubTitle,
  MiddleTitle,
  O2BadgeSubTitle,
  O2BadgeTitle,
  O2BadgeWrapper,
  O2SpaekerExp,
  O2SpeakerBadgeImage,
  O2SpeakerInnerWrapper,
  O2SpeakerOuterWrapper,
  O2SpeakerSubTitle,
  O2SpeakerTitle,
  O2SpeakerWrapper,
  O2Title,
  TopExp,
  TopSubTitle,
  TopWrapper,
} from './style';

const moveUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

function Home(): React.ReactElement {
  const [generationNum, setGenerationNum] = useState<number>(0);
  const getGenerationNum = async () => {
    //비로그인 유저일 시 런마셀 기수 가져오기
    const data = await getGeneration();
    setGenerationNum(data.progressGeneration);
  };
  useEffect(() => {
    getGenerationNum();
  }, []);

  return (
    <HomeContainer>
      <Reveal keyframes={moveUp} cascade>
        <TopWrapper>
          <O2Title>O2</O2Title>
          <TopSubTitle>
            함께 성장하는 공간, <br />
            창업가들이 마시는 산소
          </TopSubTitle>
          <TopExp>답답한 창업 여정에 시원한 산소 한 모금</TopExp>
          <Link to={`/challenge/${generationNum}`}>
            <ChallengeBtn>챌린지 보러가기</ChallengeBtn>
          </Link>
        </TopWrapper>
      </Reveal>
      <ChallengeWrapper>
        <Reveal keyframes={moveUp}>
          <MiddleTitle>Learn Myself</MiddleTitle>
          <MiddleSubTitle>나에게 배우다, 나를 배우다.</MiddleSubTitle>
          <MiddleExp>
            오늘의 잘한 점과 못한 점, 배운 점을 기록해요.
            <br />
            배운 점을 적용하며 더 성장한 내일의 나를 만들어요.
          </MiddleExp>
        </Reveal>
        <Reveal cascade damping={0.3} keyframes={moveUp} triggerOnce>
          <ChallengeCardWrapper>
            <ChallengeCard src={MainCard1Img} />
            <ChallengeCard src={MainCard2Img} />
            <ChallengeCard src={MainCard3Img} />
            <ChallengeCard src={MainCard4Img} />
          </ChallengeCardWrapper>
        </Reveal>
      </ChallengeWrapper>
      <ConcertWrapper>
        <Reveal keyframes={moveUp}>
          <MiddleTitle>Share Together</MiddleTitle>
          <MiddleSubTitle>경험을 나누다, 함께 성장하다.</MiddleSubTitle>
          <MiddleExp>
            누구나 O2 Speaker가 될 수 있어요.
            <br />
            O2 People 앞에서 당신의 이야기를 나눠주세요.
          </MiddleExp>
        </Reveal>
        <ConcertWrapper1>
          <ConcertImage1 src={Concert1Img}></ConcertImage1>
          <ConcertExpContainer1>
            <Reveal keyframes={moveUp}>
              <ConcertExpType>Share Together 인기글</ConcertExpType>
              <ConcertTitle>
                내가 힘들 때 버틸 수 있었던 <br />
                3가지
              </ConcertTitle>
              <ConcertContent>
                창업을 하다보면 정말 생각하지 못했던 어려운 일들이 <br />
                많이 일어나는건 누구나 알고계실거라 생각합니다. <br />
                중간에 포기하고 싶어지는 순간에 앵엘님의
                <br />
                [내가 힘들 때 버틸 수 있었던 3가지] 강연으로 나만의 <br />
                버팀목도 한번 만들어보세요.
              </ConcertContent>
            </Reveal>
          </ConcertExpContainer1>
        </ConcertWrapper1>
        <ConcertWrapper2>
          <ConcertExpContainer2>
            <Reveal keyframes={moveUp}>
              <ConcertExpType>Share Together 인기글</ConcertExpType>
              <ConcertTitle>
                CEO라는 꿈. <br />
                정말 나를 위한 유일한 길일까?
              </ConcertTitle>
              <ConcertContent>
                여러분은 자신의 꿈에 얼마나 큰 확신을 가지고있나요? <br />
                아마 꿈을 향해 나아가면서도 끊임없이 ‘내가 잘 하고 있는 것인가?‘, <br />
                ‘이게 정말 나를 위한 길인가?’ 이런 생각이 드실거라 생각합니다. <br />
                깡토님의 [CEO라는 꿈. 정말 나를 위한 유일한 길일까?] 강연에서는 불안
                <br />
                하기만 CEO라는 꿈을 어떻게 이룰 수 있었는지, <br />
                깡토님의 실제 스토리를 여러분들께 들려드립니다.
              </ConcertContent>
            </Reveal>
          </ConcertExpContainer2>
          <ConcertImage2 src={Concert2Img}></ConcertImage2>
        </ConcertWrapper2>
      </ConcertWrapper>
      <O2SpeakerWrapper>
        <Reveal keyframes={moveUp}>
          <O2SpeakerTitle>To Be an O2 Speaker</O2SpeakerTitle>
          <O2SpeakerSubTitle>뱃지를 모아 O2 Speaker가 되어보세요!</O2SpeakerSubTitle>
        </Reveal>
        <Reveal cascade damping={0.5} keyframes={moveUp} triggerOnce>
          <O2SpeakerOuterWrapper>
            <O2SpeakerInnerWrapper>
              <O2SpeakerBadgeImage src={SpeakerBadge1Img} />
              <O2SpaekerExp>
                챌린지 개수를 주당 <br />
                3개 이상으로 설정
              </O2SpaekerExp>
            </O2SpeakerInnerWrapper>
            <O2SpeakerInnerWrapper>
              <O2SpeakerBadgeImage src={SpeakerBadge2Img} />
              <O2SpaekerExp>
                런마쎌을 80%이상 작성 후 <br />
                챌린지뱃지를 획득
              </O2SpaekerExp>
            </O2SpeakerInnerWrapper>
            <O2SpeakerInnerWrapper>
              <O2SpeakerBadgeImage src={SpeakerBadge3Img} />
              <O2SpaekerExp>
                챌린지뱃지 3개 + 활동뱃지 12개 <br />
                얻을 시 연사가능
              </O2SpaekerExp>
            </O2SpeakerInnerWrapper>
          </O2SpeakerOuterWrapper>
        </Reveal>
      </O2SpeakerWrapper>
      <O2BadgeWrapper>
        <Reveal keyframes={moveUp}>
          <O2BadgeTitle>O2 Badge</O2BadgeTitle>
          <O2BadgeSubTitle>열심히 활동하면 멋진 오투의 뱃지들을 받을 수 있어요.</O2BadgeSubTitle>
        </Reveal>
        <Reveal cascade damping={0.2} keyframes={moveUp} triggerOnce>
          <BadgeWrapper>
            <BadgeCard
              img={WelcomeToO2FillIcon}
              title="웰컴 투 오투"
              explain={
                <>
                  첫 회원가입을 했을 때<br />
                  받을 수 있는 뱃지예요.
                </>
              }
            />
            <BadgeCard
              img={UsefulLearnMyselfFillIcon}
              title="유용한 런마쎌"
              explain={
                <>
                  타인의 Learn Myself를 처음 스크랩
                  <br />
                  했을 때 받을 수 있는 뱃지에요.
                </>
              }
            />
            <BadgeCard
              img={CommunicationKingFillIcon}
              title="나는야 소통왕"
              explain={
                <>
                  타인의 Learn Myself에 댓글 5개를 <br />
                  작성할 시 받을 수 있는 뱃지에요.
                </>
              }
            />
            <BadgeCard
              img={EmpathizingFillIcon}
              title="당신은 공감왕"
              explain={
                <>
                  타인의 글의 좋아요를 처음 <br />
                  눌렀을 때 받을 수 있는 뱃지에요.
                </>
              }
            />
            <BadgeCard
              img={ReadyForGrowFillIcon}
              title="성장준비 완료"
              explain={
                <>
                  타인의 글에 댓글을 처음 <br />
                  달았을 때 받을 수 있는 뱃지에요.
                </>
              }
            />
            <BadgeCard
              img={NaturalBornO2FillIcon}
              title="뼛속부터 오투인"
              explain={
                <>
                  오투에 3일 연속 로그인 <br />
                  했을 때 받을 수 있는 뱃지에요.
                </>
              }
            />
            <BadgeCard
              img={GrowingTogetherFillIcon}
              title="함께 성장 중"
              explain={
                <>
                  Learn Myself 첫 작성 시<br />
                  받을 수 있는 뱃지에요.
                </>
              }
            />
            <BadgeCard
              img={ShyEmailFillIcon}
              title="설레는 첫 답글"
              explain={
                <>
                  타인의 댓글의 답글을 처음 달았을 때 <br />
                  받을 수 있는 뱃지에요.
                </>
              }
            />
          </BadgeWrapper>
        </Reveal>
      </O2BadgeWrapper>
      <LinkWrapper>
        <LinkCardWrapper>
          <LinkTitle>
            Learn Myself <br />
            Register
          </LinkTitle>
          <LinkExp>
            Learn Myself에 <br />
            참여해 보세요!
          </LinkExp>
          <Link to="/challenge/register">
            <Reveal keyframes={moveUp}>
              <LinkBtn>More</LinkBtn>
            </Reveal>
          </Link>
        </LinkCardWrapper>
        <LinkCardWrapper>
          <LinkTitle>Learn Myself</LinkTitle>
          <LinkExp>
            나만의
            <br />
            챌린지를 시작해 보세요
          </LinkExp>
          <Reveal keyframes={moveUp}>
            <Link to={`/challenge/${generationNum}`}>
              <LinkBtn>More</LinkBtn>
            </Link>
          </Reveal>
        </LinkCardWrapper>
        <LinkCardWrapper>
          <LinkTitle>Share Together</LinkTitle>
          <LinkExp>
            O2 People의 이야기를
            <br />
            들어보세요!
          </LinkExp>
          <Reveal keyframes={moveUp}>
            <Link to="/concert">
              <LinkBtn>More</LinkBtn>
            </Link>
          </Reveal>
        </LinkCardWrapper>
      </LinkWrapper>
    </HomeContainer>
  );
}

const HomeContainer = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  background-image: url('${LandingBackImg}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 6114px;
  overflow-x: hidden;
  img{
    margin : 0;
    padding : 0;
  }
`;

export default Home;
