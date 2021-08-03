import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Text = Styled.div`
  display: flex;
  color: ${palette('grayscale', 7)};
`;

export const Info = Styled.div`
  & span:nth-of-type(1) {
    ${theme('font.subhead3_eng')};
  }
  span {
    margin-right:20px;
    ${theme('font.body3')};
  }
  p {
    margin-top: 10px;
    ${theme('font.body2_eng')};
  }
`;

export const Member = Styled.div`
  display: flex;
  margin-left: 140px;
  ${theme('font.body1_eng')};
`;

export const Planner = Styled.div`
  margin-right: 50px;
  & p:nth-of-type(1) {
    ${theme('font.subhead1_eng')};
  }
`;
export const Designer = Styled.div`
  margin-right: 50px;
  & p:nth-of-type(1) {
    ${theme('font.subhead1_eng')};
  }
`;
export const Developer = Styled.div`
  margin-right: 50px;
  & p:nth-of-type(1) {
    ${theme('font.subhead1_eng')};
  }
`;
export const Server = Styled.div`
  margin-right: 50px;
  & p:nth-of-type(1) {
    ${theme('font.subhead1_eng')};
  }
`;

export const FooterWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  width: 100%;
  height: 278px;
  img {
    margin-right: 985px;
    margin-bottom: 27px;
  }
`;
