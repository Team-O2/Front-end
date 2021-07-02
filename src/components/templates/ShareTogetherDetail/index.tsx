import React from 'react';
import Styled from 'styled-components';
import ConcertDetailTitle from '../../molecules/ConcertDetailTitle';

interface IProps {
  selectedConcert: any;
}

function ShareTogetherDetail({ selectedConcert }: IProps): React.ReactElement {
  const { title, speaker, date, category } = selectedConcert;
  return (
    <SShareTogetherDetail>
      <ConcertDetailTitle title={title} speaker={speaker} date={date} category={category}></ConcertDetailTitle>
    </SShareTogetherDetail>
  );
}

const SShareTogetherDetail = Styled.div`
  width: 845px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default ShareTogetherDetail;
