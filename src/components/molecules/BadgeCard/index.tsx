import React from 'react';
import Styled from 'styled-components';
import { Exp, Image, SBadgeCard, Title } from './style';

export interface IProps {
  className?: string;
  title: string;
  explain: any; //줄바꿈때문에 <p> </p> 가져오는데 타입 모르겠음
  img: string;
}

function BadgeCard({ title, explain, img }: IProps): React.ReactElement {
  return (
    <SBadgeCard>
      <Image src={img}></Image>
      <Title>{title}</Title>
      <Exp> {explain}</Exp>
    </SBadgeCard>
  );
}

export default BadgeCard;
