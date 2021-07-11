import React from 'react';
import { useHistory } from 'react-router';
import Styled from 'styled-components';
import ConcertCard from '../../molecules/ConcertCard';

interface IData {
  concertId: string;
  image: string;
  speaker: string;
  interest: string[];
  createdAt: string;
  title: string;
  desc: string;
  like: number;
}
interface IProps {
  concertCardData: Array<IData>;
}

function ConcertCardList({ concertCardData }: IProps): React.ReactElement {
  const history = useHistory();
  return (
    <SConcertCardList>
      {concertCardData.map((card: IData) => (
        <ConcertCard
          image={card.image}
          title={card.title}
          speaker={card.speaker}
          interest={card.interest}
          key={card.concertId}
          onClickFunc={() => history.push(`/ShareTogether/${card.concertId}`)}
        ></ConcertCard>
      ))}
    </SConcertCardList>
  );
}

const SConcertCardList = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export default ConcertCardList;
