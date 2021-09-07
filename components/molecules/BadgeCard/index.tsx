import { Img } from 'components/atoms';
import React from 'react';
import { Exp, SBadgeCard, Title } from './style';

export interface IProps {
  className?: string;
  title: string;
  explain: JSX.Element; //줄바꿈때문에 <p> </p> 가져오는데 타입 모르겠음
  img: string;
}

function BadgeCard({ title, explain, img }: IProps): React.ReactElement {
  return (
    <SBadgeCard>
      <Img src={img} width={130} height={130} />
      <Title>{title}</Title>
      <Exp> {explain}</Exp>
    </SBadgeCard>
  );
}

export default BadgeCard;
