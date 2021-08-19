import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Background = Styled.div`
position: fixed;
top: 0;
z-index: 1000;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrap = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  width: 500px;
  height: 273px;
  border-radius: 16px;
  border-width: 0.1rem;
  border-style: solid;
  border-image-source: linear-gradient(to top, ${palette('primary', 3)}, ${palette('primary', 0)});
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, ${palette('primary', 3)}, ${palette('primary', 0)}),
    linear-gradient(to top, ${palette('primary', 3)}, ${palette('primary', 0)});
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const InnerModalWrap = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;

  width: 49.6rem;
  height: 26.9rem;
  border-radius: 15px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckIcon = Styled.div`
  position: relative;
  top: -2.8rem;

  width: 9rem;
  height: 9rem;
  border-radius: 4.5rem;
  background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColoredTxt = Styled.div`
  ${theme('font.dp4')};
  width: 83px;
  height: 68px;
  position: relative;
  top: -8px;
  margin-bottom: 1.2rem;
  text-align: center;
  background: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Message = Styled.div`
  ${theme('font.body3')};
  width: 320px;
  height: 73px;
  text-align: center;
  color: ${palette('grayscale', 9)};
`;
