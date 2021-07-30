import { CommentIcon, LikeFilledIcon, LikeIcon, ScrapFilledIcon, ScrapIcon } from 'assets/images';
import { HashTag } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';

interface IProps {
  video?: string;
  desc?: string;
  hashtag?: string[];
  likeNum?: number;
  commentNum?: number;
  scrapNum?: number;
  onLike?: () => void;
  onScrap?: () => void;
  userLike?: boolean;
  userScrap?: boolean;
}

function DetailContent({
  video,
  desc,
  hashtag,
  likeNum,
  commentNum,
  scrapNum,
  onLike,
  onScrap,
  userLike,
  userScrap,
}: IProps): React.ReactElement {
  return (
    <SDetailContent>
      <div className="image">
        <video className="image__video" src={video} controls></video>
      </div>
      <div className="text" dangerouslySetInnerHTML={{ __html: `${desc}` }} />
      <div className="hashtag">
        {hashtag?.map((tag, index) => (
          <HashTag key={index}>{tag}</HashTag>
        ))}
      </div>
      <div className="icons">
        <div className="like">
          <img className="like__img" src={userLike ? LikeFilledIcon : LikeIcon} onClick={onLike} alt="" />
          {likeNum}
        </div>
        <div className="comments">
          <img className="comments__img" src={CommentIcon} alt="" />
          {commentNum}
        </div>
        <div className="scrap">
          <img className="scrap__img" src={userScrap ? ScrapFilledIcon : ScrapIcon} onClick={onScrap} alt="" />
          {scrapNum}
        </div>
      </div>
    </SDetailContent>
  );
}

const SDetailContent = Styled.div`
  .image {
    margin-top: 60px;
    height: 468px;
    &__video{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
    margin-top: 40px;
    line-height: 1.56;
    color: #555555;
    font-family: 'AppleSDGothicNeo';
    font-size: 18px;
  }
  .hashtag {
    margin-top: 60px;
  }
  .icons {
    display: flex;
    flex-direction: row;
    margin: 60px 0 18px;
    color:#3d3d3d;
    font-family: 'HomepageBaukasten';
    font-size: 18px;
  }
  .like{
    display: flex;
    align-items:center;
    margin-right: 20px;
    &__img
    {
        margin-right: 10px;
    }
  }
  .comments{
    display: flex;
    align-items:center;
    margin-right: 20px;
    &__img
    {
        margin-right: 10px;
    }
  }
  .scrap{
    display: flex;
    align-items:center;
    &__img
    {
        margin-right: 10px;
    }
  }


`;

export default DetailContent;
