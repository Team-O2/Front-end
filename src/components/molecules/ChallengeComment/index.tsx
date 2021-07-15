import ChallengeCommentWrite from 'components/molecules/ChallengeCommentWrite';
import ChallengeSingleComment from 'components/molecules/ChallengeSingleWrite';
<<<<<<< refs/remotes/origin/feat/Challenge
// import { ICommentData } from 'components/organisms/ViewCardList';
import { ChallengeComment } from 'libs/getChallenge';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
=======
import { ICommentData } from 'components/organisms/ViewCardList';
import { postChallengeComment } from 'libs/getChallenge';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';
>>>>>>> Feat: 작성한 댓글 서버로 전송
import Styled from 'styled-components';

interface ICommentData {
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
<<<<<<< refs/remotes/origin/feat/Challenge
  commentList: Array<ICommentData>;
  challengeID?: string;
}

function ChallengeCommentFunc({ commentList, challengeID }: IProps): React.ReactElement {
=======
  commentList?: Array<ICommentData>;
  reLoadComment: (newComment: INewComment) => void;
  challengeID: string;
}

function ChallengeComment({ commentList, reLoadComment, challengeID }: IProps): React.ReactElement {
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
>>>>>>> Feat: 작성한 댓글 서버로 전송
  const [commentValue, setCommentValue] = useState('');
  const user = useRecoilValue(userState);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
<<<<<<< refs/remotes/origin/feat/Challenge
=======
    //여기서 api로 댓글(commentValue) 전송
>>>>>>> Feat: 작성한 댓글 서버로 전송
    event.preventDefault();
    const commentListLength = commentList?.length;
    const nextId = String(commentListLength && commentListLength + 1);

    const variables = {
      text: commentValue,
    };
<<<<<<< refs/remotes/origin/feat/Challenge
    // 댓글 post 함수를 짠다.
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg';
    const postData = await ChallengeComment(token, challengeID, variables);
    console.log('크하하하하하ㅏ핳', postData);
=======
    if (userStatusData) {
      const isSuccess = await postChallengeComment(userStatusData.token, challengeID, {
        parentID: null,
        text: commentValue,
      });
      // isSuccess && reLoadComment(variables);
      // isSuccess면 리렌더 해야함
    }
>>>>>>> Feat: 작성한 댓글 서버로 전송
    setCommentValue('');
  };

  return (
    <SCommentList>
      <ChallengeCommentWrite
        className="comment__write"
        value={commentValue}
        isComment={true}
        onChange={handleChange}
        onClick={onSubmit}
        onSubmit={onSubmit}
      />
      {commentList?.map((data: ICommentData) => (
        <ChallengeSingleComment
          key={data._id}
          _id={data._id}
          userID={data.userID}
          childrenComment={data.childrenComment}
          text={data.text}
          challengeID={challengeID}
        />
      ))}
    </SCommentList>
  );
}
const SCommentList = Styled.div`
  .comment__write{
    margin-bottom:68px;
  }
`;
export default ChallengeCommentFunc;
