import ViewListCard from 'components/molecules/ViewListCard';
import { ChallengeListData } from 'libs/getChallenge';
import React, { useState } from 'react';
import Styled from 'styled-components';

interface IChallengeData {
  good: string;
  bad: string;
  learn: string;
  commentNum: number;
  comments: string[];
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

function viewCardList(): React.ReactElement {
  const [state, setState] = useState([]);
  const [challenge, setChallenge] = useState<IChallengeData | null>(null);
  const [commentList, setCommentList] = useState([]);
  const [likes, setLikes] = useState(0);
  const [likeClick, setLikeClick] = useState(false);

  const ChallengeList = async (): Promise<void> => {
    const data = await ChallengeListData();
    data && setChallenge(data);
    data && setCommentList(data.comments);
    data && setLikes(data.likes);
    console.log('데이터잘들어올까요?', data);
    // setState(data);
    // React.useEffect(() => {
    //   setState(data);
    // }, [state]);
  };

  React.useEffect(() => {
    ChallengeList();
  }, []);

  console.log('데이터잘들어올까요222?', challenge);

  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };

  const clickLike = () => {
    setLikeClick(!likeClick);
    if (likeClick === true) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };

  return (
    <SViewCardList>
      {challenge?.map((data: IChallengeData) => {
        <ViewListCard
          nickname={challenge?.user?.nickname}
          image={challenge?.user?.img}
          createdAt={challenge?.createdAt}
          interest={challenge?.interest}
          good={challenge?.good}
          bad={challenge?.bad}
          learn={challenge?.learn}
          like={likes}
          commentlist={commentList}
          reLoadComment={reLoadComment}
          comments={commentList?.length}
          scrap={challenge?.scrapNum}
          onClickLike={clickLike}
          likeClick={likeClick}
          key={challenge?.user?._id}
        />;
      })}
    </SViewCardList>
  );
}

const SViewCardList = Styled.div`
`;

export default viewCardList;
