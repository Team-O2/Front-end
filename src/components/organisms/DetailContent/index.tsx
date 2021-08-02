import { CommentIcon, LikeFilledIcon, LikeIcon, ScrapFilledIcon, ScrapIcon } from 'assets/images';
import { HashTag } from 'components/atoms';
import React from 'react';
import { Comment, HashTagList, IconList, Like, Scrap, Text, Video } from './style';

interface IProps {
  video?: string;
  imgThumbnail?: string;
  desc: string;
  hashtag?: string[];
  likeNum?: number;
  commentNum: number;
  scrapNum?: number;
  onLike?: () => void;
  onScrap?: () => void;
  isUserLike?: boolean;
  isUserScrap?: boolean;
}

function DetailContent({
  video,
  imgThumbnail,
  desc,
  hashtag,
  likeNum,
  commentNum,
  scrapNum,
  onLike,
  onScrap,
  isUserLike,
  isUserScrap,
}: IProps): React.ReactElement {
  return (
    <>
      <Video>{video ? <video src={video} controls></video> : <img src={imgThumbnail} />}</Video>
      <Text dangerouslySetInnerHTML={{ __html: `${desc}` }} />
      {hashtag ? (
        <HashTagList>
          {hashtag?.map((tag, index) => (
            <HashTag key={index}>{tag}</HashTag>
          ))}
        </HashTagList>
      ) : (
        <div></div>
      )}
      <IconList>
        {likeNum === undefined ? (
          <div></div>
        ) : (
          <Like>
            <img className="like__img" src={isUserLike ? LikeFilledIcon : LikeIcon} onClick={onLike} alt="" />
            {likeNum}
          </Like>
        )}
        <Comment>
          <img className="comments__img" src={CommentIcon} alt="" />
          {commentNum}
        </Comment>
        {scrapNum === undefined ? (
          <div></div>
        ) : (
          <Scrap>
            <img className="scrap__img" src={isUserScrap ? ScrapFilledIcon : ScrapIcon} onClick={onScrap} alt="" />
            {scrapNum}
          </Scrap>
        )}
      </IconList>
    </>
  );
}

export default DetailContent;
