import Image from 'next/image';
import React from 'react';
import Styled from 'styled-components';
import { ifProp } from 'styled-tools';

export interface IProps {
  height?: string;
  alt?: string;
  src: string | StaticImageData;
  circular?: boolean;
}

function Icon({ height = '2rem', alt = '', ...props }: IProps): React.ReactElement {
  return <SImg height={height} width={height} alt={alt} {...props} />;
}

const SImg = Styled(Image)<{ circular?: boolean }>`
  border-radius: ${ifProp('circular', '50%', '')};
`;

export default Icon;
