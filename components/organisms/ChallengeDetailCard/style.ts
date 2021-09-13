import Styled from 'styled-components';
import { palette } from 'styled-tools';

export const MainCardWrapper = Styled.div`
    position: relative;
    align-items: center;
    margin: 0 auto;
    border-radius: 18px;
    box-shadow: 0px 0px 24px rgba(13, 12, 63, 0.1);
    background: ${palette('grayscale', 0)};
    padding-top: 40px;
    width : 844px;
`;

export const Container = Styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;
