import CommentIcon from 'assets/images/thumnailComment.svg';
import dayjs from 'dayjs';
import React from 'react';
import Styled from 'styled-components';

interface IProps {
  imgThumbnail: string;
  authorNickname: string;
  interestList: string[];
  createdAt: string;
  title: string;
  text: string;
  commentNum: number;
  likes: number;
  onClickFunc: () => void;
}

function Notice({
  imgThumbnail,
  authorNickname,
  interestList,
  createdAt,
  title,
  text,
  commentNum,
  onClickFunc,
}: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');
  return (
    <>
      <SNotice>
        <div className="content__left">
          <p>{authorNickname}</p>
          <p>{interestDivide}</p>
          <p>{`${dayjs(createdAt).format('YY.MM.DD')}`}</p>
        </div>
        <div className="content__middle" onClick={onClickFunc}>
          <p>{title}</p>
          <p dangerouslySetInnerHTML={{ __html: `${text}` }} />
        </div>
        <div className="content__right">
          <img className="content__right--img" src={imgThumbnail} alt="" />
          <div className="overlay overlayFade">
            <div className="content">
              <img src={CommentIcon} alt="" />
              <p> {commentNum}</p>
            </div>
          </div>
        </div>
      </SNotice>
    </>
  );
}

const SNotice = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #DFDFDF;
  height: 144px;
  font-family: 'AppleSDGothicNeo';
  .content__left {
    display: flex;
    flex-direction: column;
    width: 111px;
    height: 84px;
    line-height: 1.5;
    color: #404040;
    font-size: 12px;
    & p:nth-of-type(1) {
        margin: 0 38px 12px 0;
        line-height: 1.38;
        font-size: 16px;
        font-weight: bold;
    }
  }
  .content__middle {
    display: flex;
    flex-direction: column;
    width: 524px;
    height: 84px;
    line-height: 1.38;
    color: #0d0d0d;
    font-size: 16px;
    font-weight: bold;
    & p:nth-of-type(2) {
      margin-top: 12px;
      line-height: 1.5;
      color: #3d3d3d;
      font-size: 14px;
      font-weight: normal;
    }
  }
  .content__right {
    position: relative;
    &--img {
      width: 170px;
      height: 84px;
      object-fit: cover;
    }
  }
  .overlay{
    position: absolute;
    transition: all .3s ease;
    opacity: 0;
  }
  .content__right:hover .overlay{
    opacity: .6;
  }
  .content {
    display: flex;
    position:absolute;
    top: 50%;
    left: 50%;
    align-items:center;
    transform: translate(-50%, -50%);
    color: white;
    font-family: 'HomepageBaukasten';
    font-size: 14px;
    img {
      margin-right:5px;
    }
    p {
      margin-right:10px;
    }
  }
  .overlayFade{
    top: 0;
    left: 0;
    opacity: 0;
    width:100%;
    height: 100%;
  }
  .content__right:hover .overlayFade{
    opacity: .7;
  }
`;

export default Notice;
