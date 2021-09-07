import React from 'react';
import { Card, Text, Wrapper } from './style';

export interface IProps {
  title: string;
  children: string | React.ReactElement;
  width: string;
}

function MyPageCard({ title, children, width }: IProps): React.ReactElement {
  return (
    <Wrapper>
      <Text>{title}</Text>
      <Card width={width}>{children}</Card>
    </Wrapper>
  );
}

export default MyPageCard;
