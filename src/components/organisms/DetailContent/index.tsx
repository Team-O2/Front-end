import CommentIcon from 'assets/images/comment.svg';
import LikeIcon from 'assets/images/heart.svg';
import LikeIconFilled from 'assets/images/heart_filled.svg';
import ScrapIcon from 'assets/images/scrap.svg';
import ScrapFilledIcon from 'assets/images/scrap_filled.svg';
import HashTag from 'components/atoms/HashTag';
import React from 'react';
import Styled from 'styled-components';

interface IProps {
  video?: string;
  desc?: string;
  hashtag?: string[];
  like?: number;
  comments?: number;
  scrap?: number;
  onLike?: () => void;
  likeClick?: boolean;
  onScrap?: () => void;
  scrapClick?: boolean;
}

function DetailContent({
  video,
  desc,
  hashtag,
  like,
  comments,
  scrap,
  onLike,
  likeClick,
  onScrap,
  scrapClick,
}: IProps): React.ReactElement {
  return (
    <SDetailContent>
      <div className="image">
        <video className="image__video" src={video} controls></video>
      </div>
      <div className="text">{desc}</div>
      <div className="hashtag">
        {hashtag?.map((tag, index) => (
          <HashTag key={index}>{tag}</HashTag>
        ))}
      </div>
      <div className="icons">
        <div className="like">
          <img className="like__img" src={likeClick ? LikeIconFilled : LikeIcon} onClick={onLike} alt="" />
          {like}
        </div>
        <div className="comments">
          <img className="comments__img" src={CommentIcon} alt="" />
          {comments}
        </div>
        <div className="scrap">
          <img className="scrap__img" src={scrapClick ? ScrapFilledIcon : ScrapIcon} onClick={onScrap} alt="" />
          {scrap}
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
