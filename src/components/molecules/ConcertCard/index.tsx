import React from 'react';
import Styled from 'styled-components';
import ConcertCardText from '../../atoms/ConcertCardText';
import test from '../../../assets/images/test.svg';

function ConcertCard(): React.ReactElement {
  const imgDesc = '창업 속 살아남기 오늘도 눈물 짓는 소쩍새가 되는 방법 공유';
  const title = '앵그리엘모';
  const category = '그래픽 및 디자인/AR앱/기타';
  return (
    <>
      <SConcertCard>
        <div className="card__main">
          <img className="card__main--img" src={test} alt="" />
          <ConcertCardText content={imgDesc}></ConcertCardText>
        </div>
        <div className="card__detail">
          <ConcertCardText content={title}></ConcertCardText>
          <ConcertCardText content={category}></ConcertCardText>
        </div>
      </SConcertCard>
    </>
  );
}

const SConcertCard = Styled.div`
  width: 271px;
  height: 299px;
  border-radius: 7px;
  box-shadow: 0px 0px 24px rgba(13, 12, 63, 0.1);
  .card__main {
    width: 271px;
    height: 220px;
    font-size: 20px;
    color: white;
    position: relative;
    text-align: left;
    &--img {
        border-radius: 7px 7px 0px 0px;
    }
    & p{
        position: absolute;
        bottom: 29px;
        margin: auto 16px;
        font-family: 'AppleSDGothicNeo';
    }
  }
  .card__detail {
    font-size: 16px;
    color: #555555;
    font-weight: bold;
    line-height: 22px;
    margin : 16px;
    font-family: 'AppleSDGothicNeo';
    & p:nth-of-type(2) {
        font-size: 14px;
        color: #8B8B8B;
        line-height: 21px;
        font-family: 'AppleSDGothicNeo-Regular';
    }
  }
`;

export default ConcertCard;
