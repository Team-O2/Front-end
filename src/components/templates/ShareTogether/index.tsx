import React from 'react';
import Styled from 'styled-components';
import ConcertCardList from '../../organisms/ConcertCardList';
import ConcertList from '../../organisms/ConcertList';

function ShareTogether(): React.ReactElement {
  return (
    <SShareTogether>
      <ConcertCardList />
      <ConcertList></ConcertList>
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
