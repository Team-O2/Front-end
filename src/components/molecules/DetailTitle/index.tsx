import dayjs from 'dayjs';
import React from 'react';
import Styled from 'styled-components';

interface IProps {
  speaker?: string;
  interest?: string[];
  createdAt?: string;
  title?: string;
}

function DetailTitle({ title, speaker, createdAt, interest }: IProps): React.ReactElement {
  const interestDivide = interest?.join(' | ');
  return (
    <>
      <SDetailTitle>
        <div className="title__top">
          <p>Share Together</p>
        </div>
        <div className="title__middle">
          <p>{title}</p>
        </div>
        <div className="title__bottom">
          <p>{speaker}</p>
          <p>{`${dayjs(createdAt).format('YY.MM.DD')}`}</p>
          <p>{interestDivide}</p>
        </div>
      </SDetailTitle>
    </>
  );
}

const SDetailTitle = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 164px;
  .title__top {
    margin-bottom: 20px;
    line-height: 1.33;
    color: #a5a5a5;
    font-family: 'HomepageBaukasten';
    font-size: 18px;
    font-weight: bold;
  }
  .title__middle {
    margin-bottom: 30px;
    border-bottom: 4px solid #3d3d3d;
    padding-bottom: 14px;
    line-height: 1.22;
    color: #242424;
    font-family: 'AppleSDGothicNeo';
    font-size: 36px;
    font-weight: bold;
  }
  .title__bottom {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    line-height: 1.56;
    color: black;
    font-family: 'AppleSDGothicNeo';
    font-size: 18px;
    & p:nth-of-type(2) {
        flex: 1;
        margin-left: 14px;
        line-height: 1.29;
        color: #3d3d3d;
        font-family: 'HomepageBaukasten;';
        font-size: 14px;
    }
    & p:nth-of-type(3) {
        line-height: 1.5;
        color: #a5a5a5;
        font-size: 16px;
    }
  }

`;

export default DetailTitle;
