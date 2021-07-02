import React from 'react';
import Styled from 'styled-components';
import ConcertCardList from '../../organisms/ConcertCardList';
import ConcertList from '../../organisms/ConcertList';

interface IProps {
  concerts: any;
}

function ShareTogether({ concerts }: IProps): React.ReactElement {
  concerts.sort(function (a: any, b: any) {
    return b.like - a.like;
  });
  const concertCardData = concerts.slice(undefined, 3);
  const concertData = concerts.slice(3);

  return (
    <SShareTogether>
      <ConcertCardList concertCardData={concertCardData} />
      <ConcertList concertData={concertData}></ConcertList>
    </SShareTogether>
  );
}

const SShareTogether = Styled.div`
  width: 845px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default ShareTogether;
