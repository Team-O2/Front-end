import Styled from 'styled-components';
import { palette } from 'styled-tools';

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .dp1 {
    color: ${palette('grayscale', 0)};
  }

  .dp1_eng {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
  }

  .userInfo {
    margin-right: 50px;

    &__thumbnail {
      width : 74px;
      height : 74px;
      margin-bottom: 36px;
      border: solid 1px ${palette('grayscale', 0)};
    }

    &__editIcon {
      margin: 10px 0 0 20px;
    }

    &__tag {
      margin-top: 40px;
      color: ${palette('grayscale', 1)};
    }
  }
`;
