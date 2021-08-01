import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { ifProp, palette } from 'styled-tools';

export const PageNumber = Styled(Button)<{ isSelected?: boolean }>`
  color: ${ifProp('isSelected', '#03b6ce', '#6f6f6f')};
`;

export const PageNavi = Styled(Button)`
  margin: 0 25px;
`;

export const Wrapper = Styled.div`
  width: 1062px;

  .dp2 {
    margin-bottom: 14px;
    color: ${palette('grayscale', -3)};
  }

  .body3 {
    margin-bottom: 60px;
    color: ${palette('grayscale', -4)};
  }

  .tagContainer {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    button {
      margin-right: 10px;
    }
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    button:first-child {
      margin-right: 17px;
      color: ${palette('grayscale', 4)};
    }
    button:nth-child(2) {
      margin-right: 17px;
      color: ${palette('grayscale', 5)};
    }
  }

  .commentContainer {
    width: 100%;
  }

  .navigationContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      width: 24px;
      height: 24px;
    }

    ul li {
      margin: 0 15px;
      float: left;
    }
  }
`;
