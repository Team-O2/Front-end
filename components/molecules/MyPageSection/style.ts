import Styled from 'styled-components';
import { palette, prop, theme } from 'styled-tools';

export const Title = Styled.h2`
  ${theme('font.dp2')}
  margin-bottom: 14px;
  color: ${palette('grayscale', -3)};
`;

export const EngTitle = Styled.h2`
  ${theme('font.dp2_eng')}
  margin-bottom: 14px;
  color: ${palette('grayscale', -3)};
`;

export const InfoWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  color: ${palette('grayscale', -4)};

  h2 {
    ${theme('font.body2')};
  }
`;

export const LinkWrapper = Styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  height: 25px;
  color: ${palette('grayscale', 4)};

  p {
    margin: 2px 0 1px 0;
    ${theme('font.body2')};
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const ItemContainer = Styled.div<{ column: number; gap: number }>`
  display: grid;
  grid-template-columns: repeat(${prop('column')}, 1fr);
  gap: ${prop('gap')}px;
  width: 100%;
`;

export const EmptyTextWrapper = Styled.div`
  width: 100%;
  text-align: center;
  margin-top: 90px;
  color: ${palette('grayscale', 2)};

  p {
    ${theme('font.subhead4')};
  }
`;

export const MyPageSectionContainer = Styled.div`
  width: 1062px;
`;
