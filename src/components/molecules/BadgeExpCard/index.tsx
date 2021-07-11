import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  className?: string;
  title: string;
  explain: any; //줄바꿈때문에 <p> </p> 가져오는데 타입 모르겠음
  img: string;
}

function BadgeCard({ title, explain, img }: IProps): React.ReactElement {
  return (
    <SBadgeCard>
      <img src={img} className="image"></img>
      <h1 className="title subhead4">{title}</h1>
      <p className="explain body3"> {explain}</p>
    </SBadgeCard>
  );
}

const SBadgeCard = Styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    .image{
        width : 130px;
        height : 130px;
    }
    .title{
        color : #555555;
        margin-top: 10px;
        margin-bottom : 15px;
    }
    .explain{
        color : #555555;
        text-align : center;
        white-space : nowrap;
    }
`;

export default BadgeCard;
