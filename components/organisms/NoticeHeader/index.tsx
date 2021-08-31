import { Img, Link } from 'components/atoms';
import { NoticeHeaderIcon } from 'public/assets/images';
import React from 'react';
import { Background, ConcertButton, IconContainer, NoticeHeaderWrapper, Text } from './style';
function NoticeHeader(): React.ReactElement {
  return (
    <NoticeHeaderWrapper>
      <Background />
      <IconContainer>
        <Img src={NoticeHeaderIcon} alt="" />
      </IconContainer>
      <Text>
        <p>다음 강연이에요</p>
        <p>창업에 대한 모든 것</p>
        <Link to="/concert">
          <ConcertButton>더 알아보기</ConcertButton>
        </Link>
      </Text>
    </NoticeHeaderWrapper>
  );
}

export default NoticeHeader;
