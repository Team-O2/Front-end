import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  alt: string;
  src: string;
}

function Img({ alt = '', src }: IProps): React.ReactElement {
  return <SImg src={src} alt={alt} />;
}

const SImg = Styled.img`
  width: inherit;
  height: inherit;
  object-fit: inherit;
`;

export default Img;
