import { fadeIn, fadeOut } from 'assets/styles/animation';
import Styled, { css } from 'styled-components';

export const Main = Styled.div`
  display: flex;
  align-items: center;
  width: 815px;
  position: relative;
`;

export const HashtagContainer = Styled.div<{ disappear: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ disappear }) => (disappear ? '645px' : '726px')};
  margin-left: ${({ disappear }) => (disappear ? '65px' : '0')};
  overflow: hidden;
`;

export const Hashtag = Styled.div`
  display: flex;
`;

export const GradientLeft = Styled.div<{ disappear: boolean }>`
  position: absolute;
  margin-left: 45px;
  background-image: linear-gradient(to right, #FFFFFF 33.87%, rgba(255, 255, 255, 0) 94.35%);
  width: 81px;
  height: 46px;
  animation-name: ${fadeOut};
  animation-fill-mode: forwards;
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeIn};
    `}
    z-index: 4;
`;

export const PrevButton = Styled.img<{ disappear: boolean }>`
  position: absolute;
  animation-name: ${fadeOut};
  animation-fill-mode: forwards;
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeIn};
    `}
    z-index: 5;
`;

export const Shadow = Styled.div`
  position: absolute;
  right: 120px;
  margin-right: -20px;
  background: linear-gradient(270deg, #FFFFFF 33.87%, rgba(255, 255, 255, 0) 94.35%);
  width: 81px;
  height: 46px;
`;

export const NextButton = Styled.div`
  z-index: 5;
`;

export const More = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  border: solid 1px rgba(223, 223, 223, 0.5);
  border-radius: 16px;
  box-shadow: 0 0 15px 0 rgba(23, 22, 91, 0.08);
  padding: 25px 25px;
  width: 844px;
  height: 328px;
`;

export const CategoryListWrapper = Styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 50px;
`;
