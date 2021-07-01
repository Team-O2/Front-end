import React from 'react';
import Styled from 'styled-components';
import ConcertCard from '../../molecules/ConcertCard';
import test from '../../../assets/images/test.svg';

interface IProps {
  content: string;
}
const mockData = [
  {
    id: '1',
    image: test,
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    speaker: '앵그리엘모',
    category: '그래핏 및 디자인/AR앱/기타',
  },
  {
    id: '2',
    image: test,
    title: '창업에서 살아남기',
    speaker: '살아남는자',
    category: 'IT/AR앱',
  },
  {
    id: '3',
    image: test,
    title: '노동으로 히트친 그 사람, 드디어 만나보다 엘모의 내적',
    speaker: '사랑아노동해',
    category: '그래핏 및 디자인/스포츠',
  },
];
function ConcertCardList(): React.ReactElement {
  return (
    <SConcertCardList>
      {mockData.map((card) => (
        <ConcertCard
          image={card.image}
          title={card.title}
          speaker={card.speaker}
          category={card.category}
          key={card.id}
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
