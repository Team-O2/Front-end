import React from 'react';
import Styled from 'styled-components';

interface IProps {
  content: string;
}

function ConcertCardText({ content }: IProps): React.ReactElement {
  return <SText>{content}</SText>;
}

const SText = Styled.p`
`;
export default ConcertCardText;
