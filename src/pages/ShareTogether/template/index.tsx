export {};
/*
import React from 'react';
import Styled from 'styled-components';
import ConcertTitle from '../../molecules/ConcertTitle';
import SeachForm from '../../organisms/SearchForm';
import ConcertCardList from '../../organisms/ConcertCardList';
import ConcertList from '../../organisms/ConcertList';

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
  concerts: Array<IData>;
}

function ShareTogether({ concerts }: IProps): React.ReactElement {
  concerts.sort(function (a: IData, b: IData) {
    return b.like - a.like;
  });
  const concertCardData = concerts.slice(undefined, 3);
  const concertData = concerts.slice(3);

  return (
    <SShareTogether>
      <ConcertTitle></ConcertTitle>
      <SeachForm></SeachForm>
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
*/
