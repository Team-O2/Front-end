import React from 'react';
import { SDiv, SImg } from './style';

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

export default Img;
