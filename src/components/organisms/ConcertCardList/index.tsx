import React from 'react';
import Styled from 'styled-components';
import ConcertCard from '../../molecules/ConcertCard';
import { useHistory } from 'react-router';

interface IProps {
  concertCardData: any;
}

function ConcertCardList({ concertCardData }: IProps): React.ReactElement {
  const history = useHistory();
  return (
    <SConcertCardList>
      {concertCardData.map((card: any) => (
        <ConcertCard
          image={card.image}
          title={card.title}
          speaker={card.speaker}
          category={card.category}
          key={card.concertId}
          onClickFunc={() => history.push(`/ShareTogetherDetail/${card.concertId}`)}
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
