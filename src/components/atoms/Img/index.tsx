import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  alt?: string;
  src: string;
  className?: string;
}

function Img({ alt = '', src, ...props }: IProps): React.ReactElement {
  return <SImg src={src} alt={alt} {...props} />;
}

const SImg = Styled.img`
  width: inherit;
  height: inherit;
  object-fit: inherit;
  border-radius: inherit;
`;

export default Img;
