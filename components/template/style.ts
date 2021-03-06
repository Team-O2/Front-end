import { Button, Img } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const LogoWrapper = Styled.div`
  margin-bottom : 79px;
`;

export const TopWrapper = Styled.div`
  display : flex;
  width : 100vw;
  padding-left : calc(50% - 555px);
`;

export const TopInnerWrapper = Styled.div`
  display : flex;
 width : 1404px;
 min-width : 1404px;
 max-width : 1404px
`;

export const TitleWrapper = Styled.div`
  padding-top : 178px;
  width : 545px;
`;

export const HomeContainer = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  overflow-x: hidden;
`;

export const TopSubTitle = Styled.h2`
  ${theme('font.dp2')};
  color : ${palette('grayscale', 9)};
`;

export const TopExp = Styled.p`
  ${theme('font.body4')};
  margin-top : 20px;
  color : ${palette('grayscale', 7)};
`;

export const ChallengeBtn = Styled(Button)<{
  margin: string;
}>`
  ${theme('font.subhead2')};
  width : 164px;
  height : 40px;
  color : ${palette('grayscale', 0)};
  background-color : ${palette('grayscale', 7)};
  border-radius: 50px;
  margin : ${(props) => props.margin};
`;

export const ChallengeWrapper = Styled.div`
  padding-top : 247px;
  width : 1109px;
`;

export const MiddleTitle = Styled.h2`
  ${theme('font.dp1_eng')};
  color : ${palette('grayscale', 9)};
`;

export const MiddleSubTitle = Styled.h3`
  ${theme('font.h1')};
  color : ${palette('grayscale', 5)};
  margin-top : 20px;
  margin-bottom : 40px;
`;

export const MiddleExp = Styled.p`
  ${theme('font.body4')};
  color : ${palette('grayscale', 4)};
`;

export const ChallengeCardWrapper = Styled.ul`
  margin-top :80px;
  display : flex;
  width : 1109px;
  justify-content : space-between;
`;

export const ChallengeCard = Styled(Img)`
  width : 254px;
  height : 259px;
  width: 254px;
  height: 259px;
`;

export const ConcertWrapper = Styled.div`
  width : 1109px;
  padding-top : 234.2px;
  padding-bottom : 302.1px;
  display : flex;
  gap: 64.9px;
`;

export const ConcertWrapper1 = Styled.div`
  margin-top : 90px;
  display : flex;
  flex-direction : row;
`;

export const ConcertWrapper2 = Styled.div`
  margin-top : 153px;
  display : flex;
  flex-direction : row;
  justify-content : space-between;
`;

export const ConcertImage1 = Styled(Img)`
  width : 672px;
  height : 449px;
  margin-right : 93px;
`;

export const ConcertImage2 = Styled(Img)`
  width: 464px;
  height: 745px;
`;

export const ConcertExpContainer1 = Styled.div`
  display : flex;
  flex-direction: column;
  align-items : flex-start;
  padding-top : 58px;
`;

export const ConcertExpContainer2 = Styled.div`
  display : flex;
  flex-direction: column;
  align-items : flex-start;
  padding-top : 141px;
`;

export const ConcertExpType = Styled.p`
  ${theme('font.body3')};
  color : ${palette('grayscale', 4)};
`;

export const ConcertTitle = Styled.h1`
  ${theme('font.h1')};
  color : ${palette('grayscale', 7)};
  margin-top : 10px;
`;

export const ConcertContent = Styled.p`
  margin-top : 32px;
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: -0.5px;
  color : ${palette('grayscale', 6)};
`;

export const O2SpeakerWrapper = Styled.div`
  width : 100vw;
  background-color : ${palette('grayscale', 9)};;
  display : flex;
  flex-direction : column;
  align-items : center;
  padding : 120px 0;
`;

export const O2SpeakerTitle = Styled.h1`
  ${theme('font.dp1_eng')};
   color : ${palette('grayscale', 0)};
`;

export const O2SpeakerSubTitle = Styled.h2`
  ${theme('font.subhead4')};
  color : ${palette('grayscale', 3)};
  margin-top : 20px;
  margin-bottom : 138px;
`;

export const O2SpeakerCardWrapper = Styled.ul`
  width : 1100px;
  display : flex;
  flex-direction : row;
  justify-content : space-between;
`;

export const O2BadgeWrapper = Styled.div`
  padding-top : 150px;
  display : flex;
  flex-direction: column;
  align-items : center;
`;

export const O2BadgeTitle = Styled.h1`
  ${theme('font.dp1_eng')};
  color : ${palette('grayscale', 9)};
  margin-bottom : 20px;
`;

export const O2BadgeSubTitle = Styled.h2`
  ${theme('font.subhead4')};
  color : ${palette('grayscale', 5)};
  margin-bottom : 150px;
`;

export const BadgeWrapper = Styled.ul`
  display : grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 468px;
  grid-row-gap: 100px;
`;

export const LinkWrapper = Styled.div`
  width : 100%;
  padding-top : 208px;
  margin-top : 150px;
  padding-bottom : 187px;
  background-color : ${palette('grayscale', 9)};;
  display : flex;
  justify-content : center;
  align-items : center;
  gap : 110px;
`;

export const LinkCardWrapper = Styled.div`
  display : flex;
  flex-direction : column;
`;

export const LinkTitle = Styled.h1`
  ${theme('font.h1_eng')};
  color : ${palette('grayscale', 0)};
  height : 68px;
`;

export const LinkExp = Styled.p`
  ${theme('font.body4')};
  color : ${palette('grayscale', 1)};
  margin : 31px 0;
`;

export const LinkBtn = Styled(Button)`
  ${theme('font.subhead4_eng')};
  width: 200px;
  height: 60px;
  background-color : ${palette('primary', 3)};
  color : ${palette('grayscale', 0)};
`;
