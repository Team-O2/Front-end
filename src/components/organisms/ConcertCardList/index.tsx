import React from 'react';
import { useHistory } from 'react-router';
import Styled from 'styled-components';
import ConcertCard from '../../molecules/ConcertCard';

interface IData {
  videoLink: string;
  imgThumbnail: string;
  likes: number;
  commentNum: number;
  scrapNum: number;
  interest: string[];
  hashtag: string[];
  isDeleted: boolean;
  comments: string[];
  isNotice: boolean;
  _id: string;
  title: string;
  user: { _id: string; nickname: string; img: string };
  createdAt: string;
  text: string;
  authorNickname: string;
  updatedAt: string;
  __v: number;
}
interface IProps {
  concertCardData: Array<IData> | undefined;
}

function ConcertCardList({ concertCardData }: IProps): React.ReactElement {
  const history = useHistory();
  return (
    <SConcertCardList>
      {concertCardData?.map(
        (card: IData) =>
          card && (
            <ConcertCard
              imgThumbnail={card.imgThumbnail}
              title={card.title}
              authorNickname={card.authorNickname}
              interestList={card.interest}
              key={card._id}
              onClickFunc={() => history.push(`/ShareTogether/${card._id}`)}
            ></ConcertCard>
          ),
      )}
    </SConcertCardList>
  );
}

const SConcertCardList = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 60px;
`;
export default ConcertCardList;
