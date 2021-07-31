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
import { Button } from 'components/atoms';
import { BadgeCard } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

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
    <JoinWrap>
      <Reveal keyframes={moveUp} cascade>
        <div className="top">
          <h1 className="top__title--O2 ">O2</h1>
          <h2 className="dp2 top__title--subtitle">
            함께 성장하는 공간, <br />
            창업가들이 마시는 산소
          </h2>
          <p className="top__exp body4">답답한 창업 여정에 시원한 산소 한 모금</p>
          <Link to={`/challenge/${generationNum}`}>
            <Button className="top__button subhead2">챌린지 보러가기</Button>
          </Link>
        </div>
      </Reveal>
      <div className="learnMyself">
        <Reveal keyframes={moveUp}>
          <h2 className="middle__title--title dp1_eng">Learn Myself</h2>
          <h3 className="middle__title--subtitle h1">나에게 배우다, 나를 배우다.</h3>
          <p className="middle__exp body4">
            오늘의 잘한 점과 못한 점, 배운 점을 기록해요.
            <br />
            배운 점을 적용하며 더 성장한 내일의 나를 만들어요.
          </p>
        </Reveal>
        <Reveal cascade damping={0.3} keyframes={moveUp} triggerOnce>
          <ul className="learnMyself__container--card">
            <img className="learnMyself__img--card" src={MainCard1Img} />
            <img className="learnMyself__img--card" src={MainCard2Img} />
            <img className="learnMyself__img--card" src={MainCard3Img} />
            <img className="learnMyself__img--card" src={MainCard4Img} />
          </ul>
        </Reveal>
      </div>
      <div className="shareTogether">
        <Reveal keyframes={moveUp}>
          <h2 className="middle__title--title dp1_eng">Share Together</h2>
          <h3 className="middle__title--subtitle h1">경험을 나누다, 함께 성장하다.</h3>
          <p className="middle__exp body4">
            누구나 O2 Speaker가 될 수 있어요.
            <br />
            O2 People 앞에서 당신의 이야기를 나눠주세요.
          </p>
        </Reveal>
        <div className="shareTogether__container--photo1">
          <img className="shareTogether__image1" src={Concert1Img}></img>
          <div className="shareTogether__container--exp1">
            <Reveal keyframes={moveUp}>
              <p className="body3 shareTogether__exp--type">Share Together 인기글</p>
              <h1 className="h1 shareTogether__title">
                내가 힘들 때 버틸 수 있었던 <br />
                3가지
              </h1>
              <p className="shareTogether__content">
                창업을 하다보면 정말 생각하지 못했던 어려운 일들이 <br />
                많이 일어나는건 누구나 알고계실거라 생각합니다. <br />
                중간에 포기하고 싶어지는 순간에 앵엘님의
                <br />
                [내가 힘들 때 버틸 수 있었던 3가지] 강연으로 나만의 <br />
                버팀목도 한번 만들어보세요.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="shareTogether__container--photo2">
          <div className="shareTogether__container--exp2">
            <Reveal keyframes={moveUp}>
              <p className="body3 shareTogether__exp--type">Share Together 인기글</p>
              <h1 className="h1 shareTogether__title">
                CEO라는 꿈. <br />
                정말 나를 위한 유일한 길일까?
              </h1>
              <p className="shareTogether__content">
                여러분은 자신의 꿈에 얼마나 큰 확신을 가지고있나요? <br />
                아마 꿈을 향해 나아가면서도 끊임없이 ‘내가 잘 하고 있는 것인가?‘, <br />
                ‘이게 정말 나를 위한 길인가?’ 이런 생각이 드실거라 생각합니다. <br />
                깡토님의 [CEO라는 꿈. 정말 나를 위한 유일한 길일까?] 강연에서는 불안
                <br />
                하기만 CEO라는 꿈을 어떻게 이룰 수 있었는지, <br />
                깡토님의 실제 스토리를 여러분들께 들려드립니다.
              </p>
            </Reveal>
          </div>
          <img className="shareTogether__image2" src={Concert2Img}></img>
        </div>
      </div>
      <div className="o2speaker">
        <Reveal keyframes={moveUp}>
          <h1 className="dp1_eng o2speaker__title">To Be an O2 Speaker</h1>
          <h2 className="subhead4 o2speaker__subtitle">뱃지를 모아 O2 Speaker가 되어보세요!</h2>
        </Reveal>
        <Reveal cascade damping={0.5} keyframes={moveUp} triggerOnce>
          <ul className="o2speaker__container--outer">
            <li className="o2speaker__container--inner">
              <img className="o2speaker__image--badge" src={SpeakerBadge1Img} />
              <p className="body4 o2speaker__exp">
                챌린지 개수를 주당 <br />
                3개 이상으로 설정
              </p>
            </li>
            <li className="o2speaker__container--inner">
              <img className="o2speaker__image--badge" src={SpeakerBadge2Img} />
              <p className="body4 o2speaker__exp">
                런마쎌을 80%이상 작성 후 <br />
                챌린지뱃지를 획득
              </p>
            </li>
            <li className="o2speaker__container--inner">
              <img className="o2speaker__image--badge" src={SpeakerBadge3Img} />
              <p className="body4 o2speaker__exp">
                챌린지뱃지 3개 + 활동뱃지 12개 <br />
                얻을 시 연사가능
              </p>
            </li>
          </ul>
        </Reveal>
      </div>
      <div className="o2badge">
        <Reveal keyframes={moveUp}>
          <h1 className="o2badge__title dp1_eng">O2 Badge</h1>
          <h2 className="o2badge__subtitle subhead4">열심히 활동하면 멋진 오투의 뱃지들을 받을 수 있어요.</h2>
        </Reveal>
        <Reveal cascade damping={0.2} keyframes={moveUp} triggerOnce>
          <ul className="o2badge__container--badge">
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
          </ul>
        </Reveal>
      </div>
      <div className="linkTo">
        <div className="linkTo__container--card">
          <h1 className="h1_eng linkTo__title">
            Learn Myself <br />
            Register
          </h1>
          <p className="body4 linkTo__exp">
            Learn Myself에 <br />
            참여해 보세요!
          </p>
          <Link to="/challenge/register">
            <Reveal keyframes={moveUp}>
              <Button className="subhead4_eng linkTo__button">More</Button>
            </Reveal>
          </Link>
        </div>
        <div className="linkTo__container--card">
          <h1 className="h1_eng linkTo__title">Learn Myself</h1>
          <p className="body4 linkTo__exp">
            나만의
            <br />
            챌린지를 시작해 보세요
          </p>
          <Reveal keyframes={moveUp}>
            <Link to={`/challenge/${generationNum}`}>
              <Button className="subhead4_eng linkTo__button">More</Button>
            </Link>
          </Reveal>
        </div>
        <div className="linkTo__container--card">
          <h1 className="h1_eng linkTo__title">Share Together</h1>
          <p className="body4 linkTo__exp">
            O2 People의 이야기를
            <br />
            들어보세요!
          </p>
          <Reveal keyframes={moveUp}>
            <Link to="/concert">
              <Button className="subhead4_eng linkTo__button">More</Button>
            </Link>
          </Reveal>
        </div>
      </div>
    </JoinWrap>
  );
}

const JoinWrap = Styled.div`
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
  /* @keyframes moveUp {
    from {
      transform: translateY(8%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  } */
  .linkTo{
    width : 100%;
    padding-top : 208px;
    margin-top : 150px;
    padding-bottom : 187px;
    background-color : #2f3438;
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 110px;
    &__container--card{
      display : flex;
      flex-direction : column;
    }
    &__title{
      color : #ffffff;
      height : 68px;
    }
    &__exp{
      color : #dfdfdf;
      margin : 31px 0;
    }
   &__button{
    width: 200px;
    height: 60px;
    background-color : #36c8f5;
    color : #ffffff;
   }
  }
  .o2badge{
    padding-top : 150px;
    display : flex;
    flex-direction: column;
    align-items : center;
    &__title{
      color : #0d0d0d;
      margin-bottom : 20px;
    }
    &__subtitle{
      color : #6f6f6f;
      margin-bottom : 150px;
    }
    &__container--badge{
      display : grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 468px;
      grid-row-gap: 100px;
    }
  }
  .o2speaker{
    width : 100vw;
    background-color : #2f3438;
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 120px 0;
    &__title{
      color : #ffffff;
    }
    &__subtitle{
      color : #a5a5a5;
      margin-top : 20px;
      margin-bottom : 138px;
    }
    &__exp{
      color : #ffffff;
      text-align: center;
      margin-top : 48px;
    }
    &__container{
      &--outer{
        width : 1100px;
        display : flex;
        flex-direction : row;
        justify-content : space-between;
      }
      &--inner{
        display : flex;
        flex-direction : column;
        align-items : center;
      }
    }
    &__image--badge{
      width: 260px;
      height: 260px;
    }
  }
  .top{
    padding-top : 178px;
    width : 1109px;
    /* animation-name: moveUp;
    animation-duration: 1.5s; */
    &__title{
      &--O2{
        font-size: 90px;
        font-weight: bold;
        line-height: 0.62;
        letter-spacing: -0.5px;
        font-family: HomepageBaukasten;
        margin-bottom : 50px;
        color : #0d0d0d;
      }
      &--subtitle{
        color : #0d0d0d;
      }
    }
    &__exp{
      margin-top : 20px;
      margin-bottom : 30px;
      color : #3d3d3d;
    }
    &__button{
      width : 164px;
      height : 40px;
      color : #ffffff;
      background-color : #3d3d3d;
      border-radius: 50px;
    }
  }
  .middle{
    &__title{
      &--title{
        color : #0d0d0d;
      }
      &--subtitle{
        color : #6f6f6f;
        margin-top : 20px;
        margin-bottom : 40px;
      }
    }
    &__exp{
      color : #8b8b8b;
    }
  }
  .learnMyself{
    padding-top : 435px;
    width : 1109px;
    &__container--card{
      margin-top :80px;
      display : flex;
      width : 1109px;
      justify-content : space-between;
    }
    &__img--card{
      width : 254px;
      height : 259px;
      width: 254px;
      height: 259px;
    }
  }
  .shareTogether{
    width : 1109px;
    padding-top : 270px;
    padding-bottom : 151px;
    &__title{
      color : #3d3d3d;
      margin-top : 10px;
    }
    &__container{
      &--photo1{
        margin-top : 90px;
        display : flex;
        flex-direction : row;
      }
      &--photo2{
        margin-top : 153px;
        display : flex;
        flex-direction : row;
        justify-content : space-between;
      }
      &--exp1{
        display : flex;
        flex-direction: column;
        align-items : flex-start;
        padding-top : 58px;
      }
      &--exp2{
        display : flex;
        flex-direction: column;
        align-items : flex-start;
        padding-top : 141px;
      }
    }
    &__image1{
      width : 672px;
      height : 449px;
      margin-right : 93px;
    }
    &__image2{
      width: 464px;
      height: 745px;
    }
    &__exp{
      &--type{
        color : #8b8b8b;
      }
    }
    &__content{
      margin-top : 32px;
      font-family: AppleSDGothicNeo;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.79;
      letter-spacing: -0.5px;
      color : #555555;
    }
  }

`;

export default Home;
