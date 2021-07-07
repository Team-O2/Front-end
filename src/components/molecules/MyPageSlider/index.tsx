import React, { useEffect, useRef, useState } from 'react';
import Styled, { css } from 'styled-components';
import MyPageCard from '../../atoms/MyPageCard/index';
import { ReactComponent as LeftArrow } from 'assets/images/largeLeftArrow.svg';
import { ReactComponent as RightArrow } from 'assets/images/largeRightArrow.svg';
import Button from '../../atoms/Button/index';
import { fadeIn, fadeOut } from 'assets/styles/animation';

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
            <div></div>
          </MyPageCard>
          <MyPageCard title="Share Together" width="310">
            <div></div>
          </MyPageCard>
          <MyPageCard title="Coupon Book" width="550">
            <div></div>
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
  position: relative;
  background-color: black;
  display: flex;
  align-items: center;
  width: 1386px;

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
      width: 100%;
      display: flex;
    }

    &__gradientBack--left {
      position: absolute;
      width: 224px;
      height: 313px;
      margin: 28px 0 0 68px;
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
      animation-name: ${fadeOut};
      ${(props) =>
        props.disappear &&
        css`
          animation-name: ${fadeIn};
        `}
    }

    &__gradientBack--right {
      position: absolute;
      width: 100px;
      height: 313px;
      margin: 28px 0 0 793px;
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      background-image: linear-gradient(to left, #fff, rgba(255, 255, 255, 0));
      animation-name: ${fadeIn};
      ${(props) =>
        props.disappear &&
        css`
          animation-name: ${fadeOut};
        `}
    }
  }
  
  button {
    width: 48px;
    height: 48px;
    background-color: inherit;
    all: unset;
    color: coral;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }
`;

export default MyPageSlider;
