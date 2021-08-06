import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const TopWrapper = Styled.div`
  padding-top : 178px;
  width : 1109px;
`;

export const O2Title = Styled.h1`
  font-size: 90px;
  font-weight: bold;
  line-height: 0.62;
  letter-spacing: -0.5px;
  font-family: HomepageBaukasten;
  margin-bottom : 50px;
  color : #0d0d0d;
`;

export const TopSubTitle = Styled.h2`
  ${theme('font.dp2')};
  color : #0d0d0d;
`;

export const TopExp = Styled.p`
  ${theme('font.body4')};
  margin-top : 20px;
  margin-bottom : 30px;
  color : #3d3d3d;
`;

export const ChallengeBtn = Styled(Button)`
  ${theme('font.subhead2')};
  width : 164px;
  height : 40px;
  color : #ffffff;
  background-color : #3d3d3d;
  border-radius: 50px;
`;

export const ChallengeWrapper = Styled.div`
  padding-top : 435px;
  width : 1109px;
`;

export const MiddleTitle = Styled.h2`
  ${theme('font.dp1_eng')};
  color : #0d0d0d;
`;

export const MiddleSubTitle = Styled.h3`
  ${theme('font.h1')};
  color : #6f6f6f;
  margin-top : 20px;
  margin-bottom : 40px;
`;

export const MiddleExp = Styled.p`
  ${theme('font.body4')};
  color : #8b8b8b;
`;

export const ChallengeCardWrapper = Styled.ul`
  margin-top :80px;
  display : flex;
  width : 1109px;
  justify-content : space-between;
`;

export const ChallengeCard = Styled.img`
  width : 254px;
  height : 259px;
  width: 254px;
  height: 259px;
`;

export const ConcertWrapper = Styled.div`
  width : 1109px;
  padding-top : 270px;
  padding-bottom : 151px;
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

export const ConcertImage1 = Styled.img`
  width : 672px;
  height : 449px;
  margin-right : 93px;
`;

export const ConcertImage2 = Styled.img`
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
  color : #8b8b8b;
`;

export const ConcertTitle = Styled.h1`
  ${theme('font.h1')};
  color : #3d3d3d;
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
  color : #555555;
`;

export const O2SpeakerWrapper = Styled.div`
  width : 100vw;
  background-color : #2f3438;
  display : flex;
  flex-direction : column;
  align-items : center;
  padding : 120px 0;
`;

export const O2SpeakerTitle = Styled.h1`
  ${theme('font.dp1_eng')};
   color : #ffffff;
`;

export const O2SpeakerSubTitle = Styled.h2`
  ${theme('font.subhead4')};
  color : #a5a5a5;
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
  color : #0d0d0d;
  margin-bottom : 20px;
`;

export const O2BadgeSubTitle = Styled.h2`
  ${theme('font.subhead4')};
  color : #6f6f6f;
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
  background-color : #2f3438;
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
  color : #ffffff;
  height : 68px;
`;

export const LinkExp = Styled.p`
  ${theme('font.body4')};
  color : #dfdfdf;
  margin : 31px 0;
`;

export const LinkBtn = Styled(Button)`
  ${theme('font.subhead4_eng')};
  width: 200px;
  height: 60px;
  background-color : #36c8f5;
  color : #ffffff;
`;
