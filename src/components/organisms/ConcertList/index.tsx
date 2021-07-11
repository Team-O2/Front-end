import React from 'react';
import Styled from 'styled-components';
import Concert from '../../molecules/Concert';

interface IData {
  concertId: string;
  image: string;
  speaker: string;
  interest: string[];
  createdAt: string;
  title: string;
  desc: string;
  like: number;
  commentNum: number;
}
interface IProps {
  concertData: Array<IData>;
}
function ConcertList({ concertData }: IProps): React.ReactElement {
  return (
    <>
      <SConcertList>
        {concertData.map((card: IData) => (
          <Concert
            image={card.image}
            speaker={card.speaker}
            interest={card.interest}
            createdAt={card.createdAt}
            title={card.title}
            desc={card.desc}
            commentNum={card.commentNum}
            like={card.like}
            key={card.concertId}
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
