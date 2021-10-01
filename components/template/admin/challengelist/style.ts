import { Img, Label } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const AddExp = Styled.div`
  ${theme('font.subhead5')}
  color : ${palette('grayscale', 1)};
`;

export const AddImage = Styled(Img)`
  width : 140px;
  height : 140px;
`;

export const AddCard = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  border-radius: 18px;
  box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
  background-color : ${palette('grayscale', 0)};
  width: 402px;
  height: 484px;
  height: 484px;
  padding-top : 162px;
`;

export const ListContainer = Styled.div`
  display : grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  margin-bottom : 354px;
`;

export const PageLabel = Styled(Label)`
  margin-top : 60px;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color : ${palette('grayscale', 7)};
  font-size: 16px;
`;

export const Title = Styled(Label)`
  ${theme('font.dp4')}
  margin-top:10px;
  margin-bottom : 110px;
  color:${palette('grayscale', 7)};
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
`;
