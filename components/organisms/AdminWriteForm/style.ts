import { Img, Label } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const UploadDescription = Styled.div`
  ${theme('font.subhead3')};
  color : ${palette('grayscale', 3)};
  text-align: center;
  margin-top :4px;
  margin-bottom : 20px;
`;
export const Icon = Styled(Img)`
  width : 38px;
  height : 38px;
`;
export const UploadContainer = Styled.div`
  display : flex;
  flex-direction : column;
  margin-right : 20px;
`;
export const RowUploadContainer = Styled.div`
  display : flex;
  flex-direction: row;
  width : 100%;
  justify-content : flex-start;
  margin-bottom : 40px;
`;
export const ThumbnailUploadSpace = Styled.div`
  background-color : #f2f2f2;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  width: 262px;
  height: 225px;
`;
export const VideoUploadSpace = Styled.div`
  background-color : #f2f2f2;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  width: 400px;
  height: 225px; 
`;
export const RowContainer = Styled.div`
  display : flex;
  justify-content : space-between;
  margin-top : 42px;
  width : 844px;
`;
export const NicknameContainer = Styled.div`
  width : 224px;
  display : flex;
  flex-direction : column;
`;
export const TitleContainer = Styled.div`
  width : 600px;
  display : flex;
  flex-direction : column;
`;
export const TopRowContainer = Styled.div`
  width : 100%;
  display : flex;
  justify-content : space-between;
`;

export const WriteLabel = Styled(Label)`
  ${theme('font.subhead4')};
  width : 100%;
  color: ${palette('grayscale', 9)};
  margin-bottom : 8px;
`;

export const CategoryChipsContainer = Styled.div`
  width : 412px;
  display : flex;
  column-gap: 10px;
  row-gap : 10px;
  flex-direction: row;
  justify-content : flex-start;
  flex-wrap : wrap;
  margin-top : 20px;
  min-height : 46px;
  color : rgba(0,0,0,0);
`;
export const Wrapper = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  width : 844px;
  input{
    border : none;
    :focus{
        outline : none;
      }
  }
`;
