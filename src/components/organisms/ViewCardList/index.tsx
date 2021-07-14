import ViewListCard from 'components/molecules/ViewListCard';
import { ChallengeListData } from 'libs/getChallenge';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

export interface ICommentData {
  childrenComment: {
    _id: string;
    userID: {
      _id: string;
      nickname: string;
    };
    text: string;
  }[];
  _id: string;
  userID: {
    _id: string;
    nickname: string;
  };
  text: string;
}

export interface IData {
  good: string;
  bad: string;
  learn: string;
  commentNum: number;
  comments: ICommentData[];
  generation: number;
  createdAt: string;
  isDeleted: boolean;
  scrapNum: number;
  interest: string[];
  likes: number;
  updatedAt: string;
  user: { img: string; nickname: string; _id: string };
  __v: number;
  _id: string;
}

interface IProps {
  challengeData?: Array<IData>;
}

function ViewCardList({ challengeData }: IProps): React.ReactElement {
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [challenge, setChallenge] = useState<IData[] | null>(null);
  const [commentList, setCommentList] = useState([]);

  const ChallengeList = async (): Promise<void> => {
    if (userStatusData) {
      const data = await ChallengeListData(userStatusData.token);
      data && setChallenge(data);
      data && setCommentList(data.comments);
    }
  };

  React.useEffect(() => {
    ChallengeList();
  }, []);

  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };

  return (
    <SViewCardList>
      {challenge?.map((data: IData) => {
        return (
          <ViewListCard
            nickname={data?.user?.nickname}
            image={data?.user?.img}
            createdAt={data?.createdAt}
            interest={data?.interest}
            good={data?.good}
            bad={data?.bad}
            learn={data?.learn}
            like={data?.likes}
            commentlist={data?.comments}
            reLoadComment={reLoadComment}
            comments={data?.comments.length}
            scrap={data?.scrapNum}
            key={data?._id}
          />
        );
      })}
    </SViewCardList>
  );
}

const SViewCardList = Styled.div`
`;

export default ViewCardList;
