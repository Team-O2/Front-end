import {
  CommunicationKingFill,
  EmpathizingFill,
  FirstCommentFill,
  GetChallengeFill,
  GrowingTogetherFill,
  NaturalBornO2Fill,
  Percent100Img,
  ReadyForCommunicationFill,
  ReadyForGrowFill,
  ShyEmailFill,
  SympathyKingFill,
  UsefulLearnMyselfFill,
  UsefulShareTogetherFill,
  WelcomeToO2Fill,
} from 'assets/images';
import { ReactComponent as LeftArrow } from 'assets/images/largeLeftArrow.svg';
import { ReactComponent as RightArrow } from 'assets/images/largeRightArrow.svg';
import { fadeIn, fadeOut } from 'assets/styles/animation';
import { Button, DotText, Img, Label, MyPageCard } from 'components/atoms';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';
import Styled, { css } from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  learnMyselfData?: string;
}

function MyPageSlider(): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(!currentSlide);
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

  return (
    <Wrapper disappear={!!currentSlide}>
      <Button className="prevButton" onClick={prevSlide}>
        <LeftArrow stroke="#fff" />
      </Button>
      <div className="slider">
        <div className="slider__box" ref={slideRef}>
          <MyPageCard title="Learn Myself" width="350">
            <div className="slider__learnMyself">
              <p className="slider__learnMyself--date subhead3_eng">
                {`${dayjs().startOf('month').format('YY.MM.DD')} - ${dayjs().endOf('month').format('YY.MM.DD')}`}
              </p>
              <div className="slider__learnMyself--img">
                <Img src={Percent100Img} />
              </div>
              <p className="slider__learnMyself--percent subhead5_eng">100% 달성</p>
              <p className="slider__learnMyself--count body2">
                내가 쓴 개수 &nbsp; &nbsp;<span>36</span> &nbsp;/ &nbsp;36
              </p>
            </div>
          </MyPageCard>
          <MyPageCard title="Share Together" width="310">
            <div className="slider__shareTogether">
              <div className="slider__shareTogether--title subhead3">
                {'앵그리감자'}님이 하셨던
                <br /> 강연의 주제들이에요!
              </div>
              <DotText content={'PM이 되기 위해서 내가 한 노력 3가지'} />
            </div>
          </MyPageCard>
          <MyPageCard title="Coupon Book" width="550">
            <div className="slider__couponBook">
              <div className="slider__coupon">
                <Img src={WelcomeToO2Fill} />
                <Label className="body1">웰컴 투 오투</Label>
              </div>
              <div className="slider__coupon">
                <Img src={ReadyForGrowFill} />
                <Label className="body1">성장 준비 완료</Label>
              </div>
              <div className="slider__coupon">
                <Img src={GrowingTogetherFill} />
                <Label className="body1">함께 성장 중</Label>
              </div>
              <div className="slider__coupon">
                <Img src={ReadyForCommunicationFill} />
                <Label className="body1">소통 준비 완료</Label>
              </div>
              <div className="slider__coupon">
                <Img src={GetChallengeFill} />
                <Label className="body1">1차 챌린지 달성</Label>
              </div>
              <div className="slider__coupon">
                <Img src={CommunicationKingFill} />
                <Label className="body1">나는야 소통왕</Label>
              </div>
              <div className="slider__coupon">
                <Img src={EmpathizingFill} />
                <Label className="body1">당신은 공감중</Label>
              </div>
              <div className="slider__coupon">
                <Img src={SympathyKingFill} />
                <Label className="body1">당신은 공감왕</Label>
              </div>
              <div className="slider__coupon">
                <Img src={NaturalBornO2Fill} />
                <Label className="body1">뼛속부터 오투인</Label>
              </div>
              <div className="slider__coupon">
                <Img src={GetChallengeFill} />
                <Label className="body1">2차 챌린지 달성</Label>
              </div>
              <div className="slider__coupon">
                <Img src={ShyEmailFill} />
                <Label className="body1">수줍은 이메일</Label>
              </div>
              <div className="slider__coupon">
                <Img src={UsefulLearnMyselfFill} />
                <Label className="body1">유용한 런마쎌</Label>
              </div>
              <div className="slider__coupon">
                <Img src={UsefulShareTogetherFill} />
                <Label className="body1">유용한 쉐투</Label>
              </div>
              <div className="slider__coupon">
                <Img src={FirstCommentFill} />
                <Label className="body1">설레는 첫 답글</Label>
              </div>
              <div className="slider__coupon">
                <Img src={GetChallengeFill} />
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
