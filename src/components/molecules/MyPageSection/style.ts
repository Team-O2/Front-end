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

export const Wrapper = Styled.div<{ column: number; gap: number }>`
  width: 1062px;

  .infoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
    color: ${palette('grayscale', -4)};

    &__link {
      display: flex;
      align-items: center;
      width: 60px;
      height: 25px;
      color: ${palette('grayscale', 4)};

      p {
        margin: 2px 0 1px 0;
      }

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .emptyContainer {
    width: 100%;
    text-align: center;
    margin-top: 90px;
    color: ${palette('grayscale', 2)}
  }

  .itemContainer {
    display: grid;
    grid-template-columns: repeat(${prop('column')}, 1fr);
    gap: ${prop('gap')}px;
    width: 100%;
  }
`;
