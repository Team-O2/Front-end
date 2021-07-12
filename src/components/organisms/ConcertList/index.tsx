import React from 'react';
import { useHistory } from 'react-router';
import Styled from 'styled-components';
import Concert from '../../molecules/Concert';

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
  concertData: Array<IData> | undefined;
}
function ConcertList({ concertData }: IProps): React.ReactElement {
  const history = useHistory();
  return (
    <>
      <SConcertList>
        {concertData?.map((card: IData) => (
          <Concert
            imgThumbnail={card.imgThumbnail}
            authorNickname={card.authorNickname}
            interest={card.interest}
            createdAt={card.createdAt}
            title={card.title}
            text={card.text}
            commentNum={card.commentNum}
            likes={card.likes}
            key={card._id}
            onClickFunc={() => history.push(`/ShareTogether/${card._id}`)}
          ></Concert>
        ))}
      </SConcertList>
    </>
  );
}

const SConcertList = Styled.div`
  margin-top: 60px;
`;

export default ConcertList;
