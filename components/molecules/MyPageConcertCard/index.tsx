import { Img } from 'components/atoms';
import React from 'react';
import {
  CardContainer,
  Content,
  DateInfo,
  ImageWrapper,
  InfoContainer,
  InfoTag,
  MyPageConcertCardWrapper,
  Title,
} from './style';

export interface IProps {
  imagePath?: string;
  tagName: string;
  tagColor?: string;
  title: string;
  content: string;
  date: string;
  id: string;
}

function MyPageConcertCard({
  imagePath = '',
  tagName,
  tagColor = '5',
  title,
  content,
  date,
  id,
}: IProps): React.ReactElement {
  return (
    <MyPageConcertCardWrapper to={`/concert/${id}`}>
      <span>
        <CardContainer>
          <ImageWrapper>
            <Img src={imagePath} />
          </ImageWrapper>
          <InfoContainer>
            <InfoTag name={tagName} color={tagColor} isSelected={false} />
            <Title>{title}</Title>
            <Content dangerouslySetInnerHTML={{ __html: `${content}` }}></Content>
            <DateInfo>{date}</DateInfo>
          </InfoContainer>
        </CardContainer>
      </span>
    </MyPageConcertCardWrapper>
  );
}

export default MyPageConcertCard;
