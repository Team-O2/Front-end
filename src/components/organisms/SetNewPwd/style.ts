import styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const InputWrapper = styled.div`
  margin-bottom: 14px;
`;

export const Title = styled.div`
  ${theme('font.dp1')};
  margin-bottom: 60px;
  color: ${palette('grayscale', 9)};
`;

export const Container = styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  ${theme('font.body3')};
  width: 320px;
  height: 73px;
  text-align: center;
  color: ${palette('grayscale', 9)};
`;

interface IBtn {
  isActive: boolean;
}

export const Btn = styled.div<IBtn>`
  ${theme('font.subhead3')};
  cursor: pointer;
  width: 406px;
  height: 60px;
  border-radius: 4px;
  background-color: ${palette('grayscale', 1)};
  ${(props) =>
    props.isActive &&
    css`
      background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette('grayscale', 0)};
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrap = styled.div`
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

export const InnerModalWrap = styled.div`
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

export const CheckIcon = styled.div`
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

export const ColoredTxt = styled.div`
  width: 83px;
  height: 68px;
  position: relative;
  top: -8px;
  margin-bottom: 1.2rem;

  font-size: 4.6rem;
  font-weight: 700;
  text-align: center;
  line-height: 68px;
  background: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
