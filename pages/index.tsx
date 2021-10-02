import { keyframes } from '@emotion/react';
import { getGeneration } from 'apis';
import { Img, Link } from 'components/atoms';
import { BadgeCard, LandingLottie, SpeakerExpCard } from 'components/molecules';
import {
  CommunicationKingFillIcon,
  ConcertImg,
  EmpathizingFillIcon,
  GrowingTogetherFillIcon,
  MainCard1Img,
  MainCard2Img,
  MainCard3Img,
  MainCard4Img,
  NaturalBornO2FillIcon,
  opentogetherLogo,
  ReadyForGrowFillIcon,
  ShyEmailFillIcon,
  SpeakerBadge1Img,
  SpeakerBadge2Img,
  SpeakerBadge3Img,
  UsefulLearnMyselfFillIcon,
  WelcomeToO2FillIcon,
} from 'public/assets/images';
import React, { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import {
  BadgeWrapper,
  ChallengeBtn,
  ChallengeCard,
  ChallengeCardWrapper,
  ChallengeWrapper,
  ConcertWrapper,
  HomeContainer,
  LinkBtn,
  LinkCardWrapper,
  LinkExp,
  LinkTitle,
  LinkWrapper,
  LogoWrapper,
  MiddleExp,
  MiddleSubTitle,
  MiddleTitle,
  O2BadgeSubTitle,
  O2BadgeTitle,
  O2BadgeWrapper,
  O2SpeakerCardWrapper,
  O2SpeakerSubTitle,
  O2SpeakerTitle,
  O2SpeakerWrapper,
  TitleWrapper,
  TopExp,
  TopInnerWrapper,
  TopSubTitle,
  TopWrapper,
} from '../components/template/style';

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
      <TopWrapper>
        <TopInnerWrapper>
          <TitleWrapper>
            <LogoWrapper>
              <Img src={opentogetherLogo} width={516} height={56} />
            </LogoWrapper>
            <TopSubTitle>
              함께 성장하는 공간, <br />
              창업가들이 마시는 산소
            </TopSubTitle>
            <TopExp>답답한 창업 여정에 시원한 산소 한 모금</TopExp>
            <Link to={`/challenge/${generationNum}`}>
              <ChallengeBtn margin="30px 0 0 0">챌린지 시작하기</ChallengeBtn>
            </Link>
          </TitleWrapper>
          <LandingLottie />
        </TopInnerWrapper>
      </TopWrapper>
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
        <ChallengeCardWrapper>
          <ChallengeCard src={MainCard1Img} />
          <ChallengeCard src={MainCard2Img} />
          <ChallengeCard src={MainCard3Img} />
          <ChallengeCard src={MainCard4Img} />
        </ChallengeCardWrapper>
      </ChallengeWrapper>
      <ConcertWrapper>
        <Img src={ConcertImg} width={675.1} height={279.7} />
        <Reveal keyframes={moveUp}>
          <div>
            <MiddleTitle>Share Together</MiddleTitle>
            <MiddleSubTitle>경험을 나누다, 함께 성장하다. </MiddleSubTitle>
            <MiddleExp>
              누구나 O2 Speaker가 될 수 있어요.
              <br />
              O2 People 앞에서 당신의 이야기를 나눠주세요.
            </MiddleExp>
            <Link to={`/challenge/${generationNum}`}>
              <ChallengeBtn margin="37px 0 0 0">챌린지 시작하기</ChallengeBtn>
            </Link>
          </div>
        </Reveal>
      </ConcertWrapper>
      <O2SpeakerWrapper>
        <Reveal keyframes={moveUp}>
          <O2SpeakerTitle>To Be an O2 Speaker</O2SpeakerTitle>
          <O2SpeakerSubTitle>뱃지를 모아 O2 Speaker가 되어보세요!</O2SpeakerSubTitle>
        </Reveal>
        <O2SpeakerCardWrapper>
          <SpeakerExpCard
            img={SpeakerBadge1Img}
            width={259}
            height={230}
            exp1="챌린지 개수를 주당"
            exp2="3개 이상으로 설정"
          />
          <SpeakerExpCard
            img={SpeakerBadge2Img}
            width={246}
            height={166}
            exp1="런마쎌을 80%이상 작성 후"
            exp2="챌린지뱃지를 획득"
          />
          <SpeakerExpCard
            img={SpeakerBadge3Img}
            width={204}
            height={204}
            exp1="챌린지뱃지 3개 + 활동뱃지 12개"
            exp2="얻을 시 연사가능"
          />
        </O2SpeakerCardWrapper>
      </O2SpeakerWrapper>
      <O2BadgeWrapper>
        <Reveal keyframes={moveUp}>
          <O2BadgeTitle>O2 Badge</O2BadgeTitle>
          <O2BadgeSubTitle>열심히 활동하면 멋진 오투의 뱃지들을 받을 수 있어요.</O2BadgeSubTitle>
        </Reveal>
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

export default Home;
