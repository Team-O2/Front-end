import React from 'react';
import Styled from 'styled-components';
import LikeIcon from 'assets/images/heart.svg';
import CommentIcon from 'assets/images/comment.svg';
import ScrapIcon from 'assets/images/scrap.svg';
import LikeIconFilled from 'assets/images/heart_filled.svg';
import CommentIconFilled from 'assets/images/comment_filled.svg';
import ScrapIconFilled from 'assets/images/scrap_filled.svg';
import HashTag from 'components/atoms/HashTag';

interface IProps {
  image?: string;
  desc?: string;
  hashtag?: string[];
  like?: number;
  comments?: number;
  scrap?: number;
  onLike?: () => void;
  likeClick: boolean;
}

function DetailContent({ image, desc, hashtag, like, comments, scrap, onLike, likeClick }: IProps): React.ReactElement {
  return (
    <SDetailContent>
      <div className="image">
        <img className="image__video" src={image} alt="" />
      </div>
      <div className="text">{desc}</div>
      <div className="hashtag">
        {hashtag?.map((tag, index) => (
          <HashTag key={index}>{tag}</HashTag>
        ))}
      </div>
      <div className="icons">
        <div className="like">
          {likeClick ? (
            <img className="like__img" src={LikeIconFilled} onClick={onLike} alt="" />
          ) : (
            <img className="like__img" src={LikeIcon} onClick={onLike} alt="" />
          )}
          {like}
        </div>
        <div className="comments">
          <img className="comments__img" src={CommentIcon} alt="" />
          {comments}
        </div>
        <div className="scrap">
          <img className="scrap__img" src={ScrapIcon} alt="" />
          {scrap}
        </div>
      </div>
    </SDetailContent>
  );
}

const SDetailContent = Styled.div`
  .image {
    height: 468px;
    margin-top: 60px;
    &__video{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
    margin-top: 40px;
    font-size: 18px;
    color: #555555;
    font-family: 'AppleSDGothicNeo';
    line-height: 1.56;
  }
  .hashtag {
    margin-top: 60px;
  }
  .icons {
    margin: 60px 0 18px;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color:#3d3d3d;
    font-family: 'HomepageBaukasten';
  }
  .like{
    margin-right: 20px;
    display: flex;
    align-items:center;
    &__img
    {
        margin-right: 10px;
    }
  }
  .comments{
    margin-right: 20px;
    display: flex;
    align-items:center;
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
