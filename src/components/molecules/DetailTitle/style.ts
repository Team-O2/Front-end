import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Top = Styled.div`
  margin-bottom: 20px;
  color: ${palette('grayscale', 3)};
  ${theme('font.subhead4')};
`;

export const Middle = Styled.div`
  margin-bottom: 30px;
  border-bottom: 4px solid #3d3d3d;
  padding-bottom: 14px;
  color: ${palette('grayscale', 8)};
  ${theme('font.dp1')};
`;

export const Bottom = Styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  color: black;
  ${theme('font.body4')};
  p:nth-of-type(2) {
    flex: 1;
    margin-left: 14px;
    color: ${palette('grayscale', 7)};
    ${theme('font.body2_eng')};
  }
  p:nth-of-type(3) {
    color: ${palette('grayscale', 3)};
    ${theme('font.body3')};
  }
`;

export const DetailTitleWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 164px;
`;
