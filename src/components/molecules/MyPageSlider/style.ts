import { fadeIn, fadeOut } from 'assets/styles/animation';
import { Button, Label } from 'components/atoms';
import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const PrevButton = Styled(Button)`
  margin-right: 20px;
`;

export const NextButton = Styled(Button)`
  margin-left: 20px;
`;

export const CouponBookWrapper = Styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr) 140px;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
`;

export const SliderCoupon = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 0;
  }
`;

export const TextLabel = Styled(Label)`
  margin-top: 4px;
  color: ${palette('grayscale', -4)};
  ${theme('font.body1')};
`;
export const Slider = Styled.div`
  width: 824px;
  overflow: hidden;

`;

export const SliderBox = Styled.div`
  display: flex;
  width: 100%;
`;

export const SliderLearnMySelf = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  h1{
    margin: 40px 0 20px 0;
    color: ${palette('grayscale', 4)};
    ${theme('font.subhead3_eng')};
  }
  h2{
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
    ${theme('font.subhead5_eng')};
  }
  h3{
    margin-top: 5px;
    color: ${palette('grayscale', 5)};
    ${theme('font.body2')};
  }
  span {
    color: ${palette('grayscale', 7)};
  }
`;

export const SliderLearnMySelfImg = Styled.div`
  margin-bottom: 20px;
  width: 180px;
  height: 115px;
`;

export const SliderShareTogether = Styled.div`
  display: flex;
  flex-direction: column;

  h4{
      margin: 30px 0 49px 20px;
      ${theme('font.subhead3')};
  }
`;

export const SliderNoContent = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
      ${theme('font.body2')};
      color: ${palette('grayscale', 5)};
  }
`;

export const GradientLeft = Styled.div<{ disappear: boolean }>`
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
`;

export const GradientRight = Styled.div<{ disappear: boolean }>`
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
`;

export const Wrapper = Styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
