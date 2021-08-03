import { NoticeHeaderIcon } from 'assets/images';
import { Link } from 'components/atoms';
import React from 'react';
import { Background, NoticeHeaderWrapper, SButton, Text } from './style';

function NoticeHeader(): React.ReactElement {
  return (
    <NoticeHeaderWrapper>
      <Background />
      <img src={NoticeHeaderIcon} alt="" />
      <Text>
        <p>다음 강연이에요</p>
        <p>창업에 대한 모든 것</p>
        <Link to={`/concert`}>
          <SButton>더 알아보기</SButton>
        </Link>
      </Text>
    </NoticeHeaderWrapper>
  );
}

export default NoticeHeader;
