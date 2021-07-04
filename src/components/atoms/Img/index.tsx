import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  alt?: string;
  src?: string;
  className?: string;
}

function Img({ alt = '', src, ...props }: IProps): React.ReactElement {
  if (!src) {
    return <SDiv {...props} />;
  }

  return <SImg src={src} alt={alt} {...props} />;
}

const SImg = Styled.img`
  width: inherit;
  height: inherit;
  object-fit: inherit;
  border-radius: inherit;
`;

const SDiv = Styled.div`
  width: inherit;
  height: inherit;
  object-fit: inherit;
  border-radius: inherit;
  background-color: ${palette('emptyImage')};
`;

export default Img;
