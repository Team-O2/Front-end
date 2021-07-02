import React from 'react';
import Styled from 'styled-components';
import ConcertText from '../../atoms/ConcertText';

interface IProps {
  speaker: string;
  category: string;
  date: string;
  title: string;
}

function ConcertDetailTitle({ speaker, category, date, title }: IProps): React.ReactElement {
  return (
    <>
      <SConcertDetailTitle>
        <div className="title__top">
          <p>Share Together</p>
        </div>
        <div className="title__middle">
          <ConcertText content={title}></ConcertText>
        </div>
        <div className="title__bottom">
          <ConcertText content={speaker}></ConcertText>
          <ConcertText content={date}></ConcertText>
          <ConcertText content={category}></ConcertText>
        </div>
      </SConcertDetailTitle>
    </>
  );
}

const SConcertDetailTitle = Styled.div`
  display: flex;
  flex-direction: column;
  height: 164px;
  margin-top: 100px;
  .title__top {
    font-size: 18px;
    color: #a5a5a5;
    font-weight: bold;
    line-height: 1.33;
    font-family: 'HomepageBaukasten';
    margin-bottom: 20px;
  }
  .title__middle {
    font-size: 36px;
    color: #242424;
    font-weight: bold;
    line-height: 1.22;
    font-family: 'AppleSDGothicNeo';
    border-bottom: 4px solid #3d3d3d;
    padding-bottom: 14px;
    margin-bottom: 30px;
  }
  .title__bottom {
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    font-size: 18px;
    color: black;
    line-height: 1.56;
    font-family: 'AppleSDGothicNeo';
    & p:nth-of-type(2) {
        flex: 1;
        font-size: 14px;
        color: #3d3d3d;
        line-height: 1.29;
        font-family: 'HomepageBaukasten;';
        margin-left: 14px;
    }
    & p:nth-of-type(3) {
        font-size: 16px;
        color: #a5a5a5;
        line-height: 1.5;
    }
  }

`;

export default ConcertDetailTitle;
