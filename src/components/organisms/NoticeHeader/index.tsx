import { NoticeBackgroundIcon } from 'assets/images';
import { Button, Link } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';
function NoticeHeader(): React.ReactElement {
  return (
    <SNoticeHeader>
      <img className="background" src={NoticeBackgroundIcon} alt="" />
      <div className="text">
        <p>다음 강연이에요</p>
        <p>창업에 대한 모든 것</p>
        <Link to={`/concert`}>
          <Button className="button">더 알아보기</Button>
        </Link>
      </div>
    </SNoticeHeader>
  );
}
const SNoticeHeader = Styled.div`
  position: relative;
  margin-bottom: 50px;
  .background {
    width: 100%;
  }
  .text {
    display: flex;
    position:absolute;
    top: 50%;
	left: 30%;
    flex-direction: column;
	transform: translate( -50%, -50% );
    color: white;
    & p:nth-of-type(1) {
      line-height: 1.42;
      font-size: 48px;
      font-weight: bold;
    }
    & p:nth-of-type(2) {
      line-height: 1.33;
      font-size: 18px;
      font-weight: bold;
    }
  .button {
    margin-top:37px;
    margin-bottom:85px;
    border-radius: 4px;
    background-color: white;
    width: 175px;
    height: 44px;
    color: #13e2dd;
    font-family: 'AppleSDGothicNeo';
    font-size: 18px;
    font-weight: bold;
  }
}
`;
export default NoticeHeader;
