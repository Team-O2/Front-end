import CommentIcon from 'assets/images/comment.svg';
import React from 'react';
import Styled from 'styled-components';

interface IProps {
  imgThumbnail?: string;
  desc?: string;
  comments?: number;
}

function NoticeDetailContent({ imgThumbnail, desc, comments }: IProps): React.ReactElement {
  return (
    <SNoticeDetailContent>
      <div className="image">
        <img className="image__video" src={imgThumbnail} />
      </div>
      <div className="text" dangerouslySetInnerHTML={{ __html: `${desc}` }} />
      <div className="icons">
        <div className="comments">
          <img className="comments__img" src={CommentIcon} alt="" />
          {comments}
        </div>
      </div>
    </SNoticeDetailContent>
  );
}

const SNoticeDetailContent = Styled.div`
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

  .icons {
    display: flex;
    flex-direction: row;
    margin: 60px 0 18px;
    color:#3d3d3d;
    font-family: 'HomepageBaukasten';
    font-size: 18px;
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
`;

export default NoticeDetailContent;
