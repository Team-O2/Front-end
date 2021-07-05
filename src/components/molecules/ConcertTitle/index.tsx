import React from 'react';
import Styled from 'styled-components';

function ConcertTitle(): React.ReactElement {
  return <SConcertTitle>Share Together</SConcertTitle>;
}
const SConcertTitle = Styled.div`
  font-size: 46px;
  font-family: 'HomepageBaukasten';
  font-weight: bold;
  color: #3d3d3d;
  margin: 100px auto 110px;
`;
export default ConcertTitle;
