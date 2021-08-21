import Image from 'next/image';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export const SImg = Styled(Image)`
  width: inherit;
  height: inherit;
  object-fit: inherit;
  border-radius: inherit;
`;

export const SDiv = Styled.div`
  width: inherit;
  height: inherit;
  object-fit: inherit;
  border-radius: inherit;
  background-color: ${palette('emptyImage')};
`;
