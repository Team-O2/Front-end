import React from 'react';
import Styled from 'styled-components';
import { ifProp } from 'styled-tools';

export interface IProps {
  alt?: string;
  src: string;
  height?: string;
  circular?: boolean;
  className?: string;
}

function Icon({ height = '2rem', alt = '', ...props }: IProps): React.ReactElement {
  return <SImg height={height} alt={alt} {...props} />;
}

const SImg = Styled.img`
  height: ${(props) => props.height};
  border-radius: ${ifProp('circular', '50%', '')};
`;

export default Icon;
