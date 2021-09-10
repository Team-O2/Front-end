import Image from 'next/image';
import React from 'react';
import Styled from 'styled-components';
import { ifProp } from 'styled-tools';

export interface IProps {
  size?: number;
  alt?: string;
  src: string | StaticImageData;
  layout?: 'fixed' | 'intrinsic' | 'fill' | 'responsive';
  circular?: string | boolean;
}

function Icon({ size, alt = '', ...props }: IProps): React.ReactElement {
  return <SImg height={size} width={size} alt={alt} {...props} />;
}

const SImg = Styled(Image)<{ circular?: boolean | string }>`
  border-radius: ${ifProp('circular', '50%', '')};
`;

export default Icon;
