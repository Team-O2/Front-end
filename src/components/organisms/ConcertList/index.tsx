import React from 'react';
import Styled from 'styled-components';
import Concert from '../../molecules/Concert';

interface IProps {
  concertData: any;
}
function ConcertList({ concertData }: IProps): React.ReactElement {
  return (
    <>
      <SConcertList>
        {concertData.map((card: any) => (
          <Concert
            image={card.image}
            speaker={card.speaker}
            category={card.category}
            date={card.date}
            title={card.title}
            desc={card.desc}
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
