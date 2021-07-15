import { postNoticeComment } from 'apis/ShareTogether';
import CommentWrite from 'components/molecules/CommentWrite';
import NoticeSingleComment from 'components/molecules/NoticeSingleComment';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

interface IData {
  childrenComment: {
    _id: string;
    nickname: string;
    text: string;
    createdAt?: string;
  }[];
  isDeleted?: boolean;
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
}

interface INewComment {
  parentID?: string;
  text: string;
}

interface IProps {
  commentList: Array<IData>;
  noticeID?: string;
  reLoadComment: (newComment: INewComment) => void;
}

function NoticeCommentList({ commentList, noticeID, reLoadComment }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const userStatusData = useRecoilValue(userStatusState);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const variables = {
      text: commentValue,
    };
    if (userStatusData) {
      const postData = await postNoticeComment(userStatusData.token, noticeID, variables);
      reLoadComment(variables);
      setCommentValue('');
    } else {
      alert('로그인 후 이용하세요');
    }
  };
  return (
    <SCommentList>
      <CommentWrite
        className="comment__write"
        value={commentValue}
        isComment={true}
        onChange={handleChange}
        onClick={onSubmit}
        onSubmit={onSubmit}
      ></CommentWrite>
      {commentList?.map((data: IData) => (
        <NoticeSingleComment
          key={data._id}
          _id={data._id}
          userID={data.userID}
          childrenComment={data.childrenComment}
          text={data.text}
          noticeID={noticeID}
        ></NoticeSingleComment>
      ))}
    </SCommentList>
  );
}
const SCommentList = Styled.div`
  .comment__write{
    margin-bottom:68px;
  }
`;
export default NoticeCommentList;
