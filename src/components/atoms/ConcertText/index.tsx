import React from 'react';
import Styled from 'styled-components';

interface IProps {
  content: string;
}

function ConcertText({ content }: IProps): React.ReactElement {
  return <SText>{content}</SText>;
}

const SText = Styled.p`
`;
export default ConcertText;
