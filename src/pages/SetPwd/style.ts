import Styled, { css } from 'styled-components';

export const Container = Styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IBtn {
  isActive: boolean;
}

export const Btn = Styled.div<IBtn>`
  cursor: pointer;
  width: 406px;
  height: 60px;
  border-radius: 4px;
  background-color: #dfdfdf;
  ${(props) =>
    props.isActive &&
    css`
      background-image: linear-gradient(to right, #36c8f5, #13e2dd);
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: #ffffff;
`;

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
  border-image-source: linear-gradient(to top, #36c8f5, #13e2dd);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #36c8f5, #13e2dd), linear-gradient(to top, #36c8f5, #13e2dd);
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
  background-image: linear-gradient(to right, #36c8f5, #13e2dd);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColoredTxt = Styled.div`
  width: 83px;
  height: 68px;
  position: relative;
  top: -8px;
  margin-bottom: 1.2rem;
  font-size: 4.6rem;
  font-weight: 700;
  text-align: center;
  line-height: 68px;
  background: linear-gradient(to right, #36c8f5, #13e2dd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
