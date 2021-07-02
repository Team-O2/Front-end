import React from 'react';
import Styled from 'styled-components';

interface IProps {
  image: any;
  speaker: string;
  category: string;
  date: string;
  title: string;
  desc: string;
}

function Concert({ image, speaker, category, date, title, desc }: IProps): React.ReactElement {
  return (
    <>
      <SConcert>
        <div className="content__left">
          <p>{speaker}</p>
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <div className="content__middle">
          <p>{title}</p>
          <p>{desc}</p>
        </div>
        <div className="content__right">
          <img className="content__right--img" src={image} alt="" />
        </div>
      </SConcert>
    </>
  );
}

const SConcert = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 144px;
  align-items: center;
  border-bottom: 1px solid #DFDFDF;
  font-family: 'AppleSDGothicNeo';
  .content__left {
    display: flex;
    flex-direction: column;
    width: 111px;
    height: 84px;
    font-size: 12px;
    color: #404040;
    line-height: 1.5;
    & p:nth-of-type(1) {
        margin: 0 38px 12px 0;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.38;
    }
  }
  .content__middle {
    display: flex;
    flex-direction: column;
    width: 524px;
    height: 84px;
    font-size: 16px;
    font-weight: bold;
    color: #0d0d0d;
    line-height: 1.38;
    & p:nth-of-type(2) {
      margin-top: 12px;
      font-size: 14px;
      font-weight: normal;
      color: #3d3d3d;
      line-height: 1.5;
    }
  }
  .content__right {
    &--img {
      width: 170px;
      height: 84px;
      object-fit: cover;
    }
  }
`;

export default Concert;
