import ViewListCard from 'components/molecules/ViewListCard';
import { ChallengeListData } from 'libs/getChallenge';
import React, { useEffect, useState } from 'react';
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
    img: string;
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
  const [reRenderFlag, setReRenderFlag] = useState(false);

  const ChallengeList = async (): Promise<void> => {
    if (userStatusData) {
      const data = await ChallengeListData(userStatusData.token);
      console.log(data);
      data && setChallenge(data);
    }
  };
  useEffect(() => {
    ChallengeList();
  }, [reRenderFlag]);

  return (
    <SViewCardList>
      {challenge?.map((data: IData, id) => {
        return (
          <ViewListCard
            id={data?._id}
            nickname={data?.user?.nickname}
            image={data?.user?.img}
            createdAt={data?.createdAt}
            interest={data?.interest}
            good={data?.good}
            bad={data?.bad}
            learn={data?.learn}
            like={data?.likes}
            commentlist={data?.comments}
            comments={data?.comments.length}
            scrap={data?.scrapNum}
            reRenderFlag={reRenderFlag}
            setReRenderFlag={setReRenderFlag}
            key={id}
          />
        );
      })}
    </SViewCardList>
  );
}

const SViewCardList = Styled.div`
`;

export default ViewCardList;
