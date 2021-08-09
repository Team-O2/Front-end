import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const PhotoUploadBottomDesc = Styled.div`
  ${theme('font.body2_eng')}
  color : ${palette('grayscale', 3)};
`;

export const PhotoUploadMiddleDesc = Styled.div`
  ${theme('font.subhead3')}
  color : ${palette('grayscale', 3)};
  text-align: center;
  margin-top :4px;
  margin-bottom : 20px;
`;

export const PhotoUploadImage = Styled.img`
  width : 38px;
  height : 38px;
`;

export const PhotoUploadContainer = Styled.div`
  width: 262px;
  height: 216px;
  background-color : #f2f2f2;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;
