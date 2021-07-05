import React from 'react';
import Styled from 'styled-components';

interface IProps {
  image: string;
  title: string;
  speaker: string;
  interest: string[];
  onClickFunc: () => void;
}

function ConcertCard({ image, title, speaker, interest, onClickFunc }: IProps): React.ReactElement {
  return (
    <>
      <SConcertCard>
        <div className="card__main">
          <img className="card__main--img" onClick={onClickFunc} src={image} alt="" />
          <p>{title}</p>
        </div>
        <div className="card__detail">
          <p>{speaker}</p>
          <p>{interest}</p>
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