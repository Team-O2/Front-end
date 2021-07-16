import React from 'react';
import Styled from 'styled-components';

interface IProps {
  imgThumbnail: string;
  title: string;
  authorNickname: string;
  interestList: string[];
  onClickFunc: () => void;
}

function ConcertCard({ imgThumbnail, title, authorNickname, interestList, onClickFunc }: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');
  return (
    <>
      <SConcertCard>
        <div className="card__main" onClick={onClickFunc}>
          <img className="card__main--img" src={imgThumbnail} alt="" />
          <p>{title}</p>
          <div className="overlay"></div>
        </div>
        <div className="card__detail" onClick={onClickFunc}>
          <p>{authorNickname}</p>
          <p>{interestDivide}</p>
        </div>
      </SConcertCard>
    </>
  );
}

const SConcertCard = Styled.div`
  border-radius: 7px;
  box-shadow: 0px 0px 24px rgba(13, 12, 63, 0.1);
  width: 271px;
  height: 299px;
  .card__main {
    position: relative;
    width: 271px;
    height: 220px;
    text-align: left;
    color: white;
    font-size: 20px;
    &--img {
      border-radius: 7px 7px 0px 0px;
      width: 271px;
      height: 220px;
    }
    & p{
      position: absolute;
      bottom: 29px;
      z-index: 2;
      margin: auto 16px;
      font-family: 'AppleSDGothicNeo';
      font-weight: bold;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.5;
      z-index: 1;
      border-radius: 7px 7px 0px 0px;
      background-color: #000;
      width: 100%;
      height: 220px;
    }

  }
  .card__detail {
    margin : 16px;
    line-height: 22px;
    color: #555555;
    font-family: 'AppleSDGothicNeo';
    font-size: 16px;
    font-weight: bold;
    & p:nth-of-type(2) {
        line-height: 21px;
        color: #8B8B8B;
        font-family: 'AppleSDGothicNeo-Regular';
        font-size: 14px;
    }
  }
`;

export default ConcertCard;
