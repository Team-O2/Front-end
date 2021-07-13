import {
  CommunicationKing,
  CommunicationKingFill,
  Empathizing,
  EmpathizingFill,
  FirstComment,
  FirstCommentFill,
  GetChallenge,
  GetChallengeFill,
  GrowingTogether,
  GrowingTogetherFill,
  NaturalBornO2,
  NaturalBornO2Fill,
  Percent100Img,
  Percent20Img,
  Percent40Img,
  Percent60Img,
  Percent80Img,
  ReadyForCommunication,
  ReadyForCommunicationFill,
  ReadyForGrow,
  ReadyForGrowFill,
  ShyEmail,
  ShyEmailFill,
  SympathyKing,
  SympathyKingFill,
  UsefulLearnMyself,
  UsefulLearnMyselfFill,
  UsefulShareTogether,
  UsefulShareTogetherFill,
  WelcomeToO2,
  WelcomeToO2Fill,
} from 'assets/images';
import { ReactComponent as LeftArrow } from 'assets/images/largeLeftArrow.svg';
import { ReactComponent as RightArrow } from 'assets/images/largeRightArrow.svg';
import { fadeIn, fadeOut } from 'assets/styles/animation';
import { Button, DotText, Img, Label, MyPageCard } from 'components/atoms';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import Styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import { IMyPageHeader, IMyPageShareTogether } from 'types/myPage';

export interface IProps {
  userInfo: IMyPageHeader | null;
}

function MyPageSlider({ userInfo }: IProps): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(!currentSlide);
  const globalUserInfo = useRecoilValue(userState);
  const slideRef = useRef<HTMLInputElement>(null);

  const nextSlide = (): void => {
    if (currentSlide <= 0) {
      setCurrentSlide(currentSlide + 426);
    }
  };

  const prevSlide = (): void => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 426);
    }
  };

  useEffect(() => {
    if (slideRef?.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}px)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    if ((localVisible && currentSlide) || (localVisible && !currentSlide)) {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 500);
    }

    setLocalVisible(!currentSlide);
  }, [localVisible, currentSlide]);

  const getLevelIcon = (percent: number): string => {
    if (percent <= 20) return Percent20Img;
    else if (percent <= 50) return Percent40Img;
    else if (percent <= 80) return Percent60Img;
    else if (percent <= 99) return Percent80Img;
    else return Percent100Img;
  };

  return (
    <Wrapper disappear={!!currentSlide}>
      <Button className="prevButton" onClick={prevSlide}>
        <LeftArrow stroke="#fff" />
      </Button>
      <div className="slider">
        <div className="slider__box" ref={slideRef}>
          <MyPageCard title="Learn Myself" width="350">
            {userInfo?.learnMyselfAchieve ? (
              <div className="slider__learnMyself">
                <p className="slider__learnMyself--date subhead3_eng">
                  {`${dayjs(userInfo.learnMyselfAchieve.startDT).format('YY.MM.DD')} - ${dayjs(
                    userInfo.learnMyselfAchieve.endDT,
                  ).format('YY.MM.DD')}`}
                </p>
                <div className="slider__learnMyself--img">
                  <Img src={getLevelIcon(userInfo.learnMyselfAchieve.percent)} />
                </div>
                <p className="slider__learnMyself--percent subhead5_eng">{userInfo.learnMyselfAchieve.percent}% 달성</p>
                <p className="slider__learnMyself--count body2">
                  내가 쓴 개수 &nbsp; &nbsp;<span>{userInfo.learnMyselfAchieve.completeNum}</span> &nbsp;/ &nbsp;
                  {userInfo.learnMyselfAchieve.totalNum}
                </p>
              </div>
            ) : (
              <div className="slider__noContents">
                <p className="body2">현재 참여한 챌린지가 없어요!</p>
              </div>
            )}
          </MyPageCard>
          <MyPageCard title="Share Together" width="310">
            {userInfo?.shareTogether ? (
              <div className="slider__shareTogether">
                <div className="slider__shareTogether--title subhead3">
                  {globalUserInfo?.nickname}님이 하셨던
                  <br /> 강연의 주제들이에요!
                </div>
                {userInfo?.shareTogether.map((item: IMyPageShareTogether) => (
                  <DotText key={item._id} content={item.title} />
                ))}
              </div>
            ) : (
              <div className="slider__noContents">
                <p className="body2">현재 참여한 강연이 없어요!</p>
              </div>
            )}
          </MyPageCard>
          <MyPageCard title="Coupon Book" width="550">
            <div className="slider__couponBook">
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.welcomeBadge ? WelcomeToO2Fill : WelcomeToO2} />
                <Label className="body1">웰컴 투 오투</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.firstJoinBadge ? ReadyForGrowFill : ReadyForGrow} />
                <Label className="body1">성장 준비 완료</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.firstWriteBadge ? GrowingTogetherFill : GrowingTogether} />
                <Label className="body1">함께 성장 중</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.oneCommentBadge ? ReadyForCommunicationFill : ReadyForCommunication} />
                <Label className="body1">소통 준비 완료</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.challengeBadge === 1 ? GetChallengeFill : GetChallenge} />
                <Label className="body1">1차 챌린지 달성</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.fiveCommentBadge ? CommunicationKingFill : CommunicationKing} />
                <Label className="body1">나는야 소통왕</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.oneLikeBadge ? EmpathizingFill : Empathizing} />
                <Label className="body1">당신은 공감중</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.fiveLikeBadge ? SympathyKingFill : SympathyKing} />
                <Label className="body1">당신은 공감왕</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.loginBadge ? NaturalBornO2Fill : NaturalBornO2} />
                <Label className="body1">뼛속부터 오투인</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.challengeBadge === 2 ? GetChallengeFill : GetChallenge} />
                <Label className="body1">2차 챌린지 달성</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.marketingBadge ? ShyEmailFill : ShyEmail} />
                <Label className="body1">수줍은 이메일</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.learnMySelfBadge ? UsefulLearnMyselfFill : UsefulLearnMyself} />
                <Label className="body1">유용한 런마쎌</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.concertScrapBadge ? UsefulShareTogetherFill : UsefulShareTogether} />
                <Label className="body1">유용한 쉐투</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.firstReplyBadge ? FirstCommentFill : FirstComment} />
                <Label className="body1">설레는 첫 답글</Label>
              </div>
              <div className="slider__coupon">
                <Img src={userInfo?.couponBook.challengeBadge === 3 ? GetChallengeFill : GetChallenge} />
                <Label className="body1">3차 챌린지 달성</Label>
              </div>
            </div>
          </MyPageCard>
        </div>
      </div>
      {(!localVisible || animation) && <div className="slider__gradientBack--left"></div>}
      {(localVisible || animation) && <div className="slider__gradientBack--right"></div>}
      <Button className="nextButton" onClick={nextSlide}>
        <RightArrow stroke="#fff" />
      </Button>
    </Wrapper>
  );
}

const Wrapper = Styled.div<{ disappear: boolean }>`
  display: flex;
  position: relative;
  align-items: center;

  .prevButton {
    margin-right: 20px;
  }

  .nextButton {
    margin-left: 20px;
  }

  .slider {
    width: 824px;
    overflow: hidden;

    &__box {
      display: flex;
      width: 100%;
    }

    &__noContents {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: ${palette('grayscale', 5)};
      }
    }

    &__learnMyself {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;

      &--date {
        margin: 40px 0 20px 0;
        color: ${palette('grayscale', 4)};
      }

      &--img {
        margin-bottom: 20px;
        width: 180px;
        height: 115px;
      }

      &--percent {
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
      }

      &--count {
        margin-top: 5px;
        color: ${palette('grayscale', 5)};

        span {
          color: ${palette('grayscale', 7)};
        }
      }
    }

    &__shareTogether {
      display: flex;
      flex-direction: column;

      &--title {
        margin: 30px 0 49px 20px;
      }
    }

    &__coupon {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin: 0;
      }

      label {
        margin-top: 4px;
        color: ${palette('grayscale', -4)};
      }
    }

    &__couponBook {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(4, 1fr) 140px;
      align-items: center;
      justify-items: center;
      width: 100%;
      height: 100%;
    }

    &__gradientBack--left {
      position: absolute;
      margin: 28px 0 0 68px;
      background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
      width: 224px;
      height: 313px;
      animation-name: ${fadeOut};
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      ${(props) =>
        props.disappear &&
        css`
          animation-name: ${fadeIn};
        `}
    }

    &__gradientBack--right {
      position: absolute;
      margin: 28px 0 0 793px;
      background-image: linear-gradient(to left, #fff, rgba(255, 255, 255, 0));
      width: 100px;
      height: 313px;
      animation-name: ${fadeIn};
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      ${(props) =>
        props.disappear &&
        css`
          animation-name: ${fadeOut};
        `}
    }
  }

  button {
    all: unset;
    border-radius: 10px;
    background-color: inherit;
    width: 48px;
    height: 48px;
    color: coral;
    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }
`;

export default MyPageSlider;
